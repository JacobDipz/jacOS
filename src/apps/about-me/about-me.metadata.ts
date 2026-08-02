import type { NodeMetadata } from "../../tree/types";
import { txtAppInfo } from "../../appInfo/txtAppInfo/txtAppInfo.ts";
import AboutMe from "./AboutMe";
import AboutMeLogo from "./about-me-logo.png";

const aboutMeMetadata: NodeMetadata = {
    appInfo: {
        ...txtAppInfo,
        logo: AboutMeLogo,
        content: AboutMe(),
    },
    title: 'About me!'
};

export default aboutMeMetadata;