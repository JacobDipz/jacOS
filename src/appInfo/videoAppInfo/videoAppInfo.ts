import { createElement } from 'react';
import type { AppInfo } from '../../tree/types.ts';
import videoLogo from '../../assets/logos/video-logo.png';
import VideoPlayer, { type VideoDetails } from './VideoPlayer.tsx';

export const videoAppInfo = {
    kind: 'file',
    fileExtension: 'mp4',
    logo: videoLogo,
    content: createElement('p', null, 'No video yet'),
} satisfies AppInfo;

// Builds a video player; use as `content: videoPlayer({ src: myVideo })`
export function videoPlayer(details: VideoDetails) {
    return createElement(VideoPlayer, details);
}
