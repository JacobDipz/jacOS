import type { NodeMetadata } from "../../types";
import { txtAppInfo } from "../../appTypes";
import AboutMe from "./AboutMe";
import AboutMeLogo from "./AboutMeLogo.png";

const aboutMeMetadata: NodeMetadata = {
    appInfo: {
        ...txtAppInfo,
        customLogo: AboutMeLogo
    },
    content: AboutMe, // Use the imported AboutMe component as the content
    title: 'About me!'
};

export default aboutMeMetadata;