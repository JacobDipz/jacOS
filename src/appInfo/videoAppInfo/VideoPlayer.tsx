import { useRef, useState } from 'react';
import playIcon from '../../assets/video/play.png';
import pauseIcon from '../../assets/video/pause.png';
import soundIcon from '../../assets/video/sound.png';
import mutedIcon from '../../assets/video/muted.png';
import fullscreenIcon from '../../assets/video/fullscreen.png';
import thumbImage from '../../assets/video/seek-thumb.png';
import styles from './VideoPlayer.module.css';

export type VideoDetails = {
    src: string;          // the video file, imported like an image: import video from "./my-video.mp4"
    poster?: string;      // image shown before it plays (defaults to the first frame)
    loop?: boolean;       // start over when it ends
    pixelated?: boolean;  // keep pixel-art videos sharp when scaled up
    caption?: string;     // text under the player
};

const SEEK_STEP = 5; // seconds the arrow keys skip

// 75 → "1:15"
function formatTime(seconds: number) {
    if (!Number.isFinite(seconds)) return '0:00';
    const whole = Math.floor(seconds);
    return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}

function VideoPlayer({ src, poster, loop, pixelated, caption }: VideoDetails) {
    const playerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const progress = duration > 0 ? time / duration : 0;

    function togglePlay() {
        const video = videoRef.current;
        if (!video) return;
        // play() fails harmlessly if a pause interrupts it; the buttons follow the video's own events
        if (video.paused) video.play().catch(() => {});
        else video.pause();
    }

    function toggleMute() {
        const video = videoRef.current;
        if (video) video.muted = !video.muted;
    }

    function seekTo(seconds: number) {
        const video = videoRef.current;
        if (!video || !duration) return;
        video.currentTime = Math.min(Math.max(seconds, 0), duration);
        setTime(video.currentTime);
    }

    // Seek to wherever the pointer is along the bar
    function seekToPointer(e: React.PointerEvent<HTMLDivElement>) {
        const bar = e.currentTarget.getBoundingClientRect();
        seekTo(((e.clientX - bar.left) / bar.width) * duration);
    }

    function toggleFullscreen() {
        const player = playerRef.current;
        const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        else if (player?.requestFullscreen) {
            player.requestFullscreen();
        }
        else {
            video?.webkitEnterFullscreen?.(); // iPhone Safari only allows the video itself to go fullscreen
        }
    }

    return (
        <div className={styles.player} ref={playerRef}>
            <div className={styles.screen} onClick={togglePlay}>
                <video
                    ref={videoRef}
                    className={pixelated ? styles.pixelated : undefined}
                    src={src}
                    poster={poster}
                    loop={loop}
                    playsInline
                    preload="metadata"
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
                    onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                    onDurationChange={(e) => setDuration(e.currentTarget.duration)}
                    onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
                />
            </div>

            <div className={styles.controls}>
                <button type="button" className={styles.button} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
                    <img src={playing ? pauseIcon : playIcon} alt="" draggable={false} />
                </button>

                <div
                    className={styles.seekBar}
                    style={{ '--progress': progress } as React.CSSProperties}
                    role="slider"
                    tabIndex={0}
                    aria-label="Seek"
                    aria-valuemin={0}
                    aria-valuemax={Math.floor(duration)}
                    aria-valuenow={Math.floor(time)}
                    aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
                    onPointerDown={(e) => {
                        e.currentTarget.setPointerCapture(e.pointerId);
                        seekToPointer(e);
                    }}
                    onPointerMove={(e) => {
                        if (e.currentTarget.hasPointerCapture(e.pointerId)) seekToPointer(e);
                    }}
                    onKeyDown={(e) => {
                        const target = {
                            ArrowLeft: time - SEEK_STEP,
                            ArrowRight: time + SEEK_STEP,
                            Home: 0,
                            End: duration,
                        }[e.key];
                        if (target !== undefined) {
                            e.preventDefault();
                            seekTo(target);
                        }
                    }}
                >
                    <div className={styles.seekFill} />
                    <img className={styles.seekThumb} src={thumbImage} alt="" draggable={false} />
                </div>

                <span className={styles.time}>{formatTime(time)} / {formatTime(duration)}</span>

                <button type="button" className={styles.button} onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
                    <img src={muted ? mutedIcon : soundIcon} alt="" draggable={false} />
                </button>
                <button type="button" className={styles.button} onClick={toggleFullscreen} aria-label="Fullscreen">
                    <img src={fullscreenIcon} alt="" draggable={false} />
                </button>
            </div>

            {caption && <p className={styles.caption}>{caption}</p>}
        </div>
    );
}

export default VideoPlayer;
