import type { NodeMetadata } from "../../tree/types";
import { txtAppInfo } from "../../appInfo/txtAppInfo/txtAppInfo.ts";
import AboutMe from "./AboutMe";

const aboutMeMetadata: NodeMetadata = {
    appInfo: {
        ...txtAppInfo,
        content: AboutMe(),
    },
    title: 'About Me!'
};

export default aboutMeMetadata;