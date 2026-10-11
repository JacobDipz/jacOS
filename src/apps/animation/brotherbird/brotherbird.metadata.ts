import type { NodeMetadata } from "../../../tree/types.ts";
import { videoAppInfo, videoPlayer } from "../../../appInfo/videoAppInfo/videoAppInfo.ts";
import myVideo from "./brotherbird.mp4";

const aboutMeMetadata: NodeMetadata = {
    appInfo: {
        ...videoAppInfo,
        content: videoPlayer({
            src: myVideo,
            caption: "dance creds: brotherhood",
            // poster: stillImage
            loop: true,           // start over when it ends
            // pixelated: true
        })
    },
    title: 'it\'s a...brotherhood??'
};

export default aboutMeMetadata;