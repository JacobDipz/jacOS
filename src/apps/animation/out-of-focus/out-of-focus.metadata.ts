import type { NodeMetadata } from "../../../tree/types.ts";
import { videoAppInfo, videoPlayer } from "../../../appInfo/videoAppInfo/videoAppInfo.ts";

const aboutMeMetadata: NodeMetadata = {
    appInfo: {
        ...videoAppInfo,
        content: videoPlayer({
            youtube: "https://youtu.be/NoHVBkfFZ5U",
            caption: "Out of Focus by Jacob Dipasupil | FYSEMR 33O Final Project",
            // poster: stillImage
            loop: true,           // start over when it ends
            // pixelated: true
        })
    },
    title: 'Out of Focus'
};

export default aboutMeMetadata;