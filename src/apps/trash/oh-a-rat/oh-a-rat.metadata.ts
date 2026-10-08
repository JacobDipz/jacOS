import type { NodeMetadata } from "../../../tree/types.ts";
import { videoAppInfo, videoPlayer } from "../../../appInfo/videoAppInfo/videoAppInfo.ts";
import myVideo from "./rat-walk.mp4";

const aboutMeMetadata: NodeMetadata = {
    appInfo: {
        ...videoAppInfo,
        content: videoPlayer({
            src: myVideo,
            caption: "who left this rat here...",
            // poster: stillImage,   an image shown before it plays (import it like the video)
            loop: true,           // start over when it ends
            // pixelated: true,      keep pixel-art animation sharp when it's scaled up
        })
    },
    title: 'oh...a rat'
};

export default aboutMeMetadata;