import type { NodeMetadata } from "../../types";
import { txtAppInfo } from "../../appTypes/TxtType/TxtAppInfo";
import AboutMe from "./AboutMe";
import AboutMeLogo from "./AboutMeLogo.png";

const aboutMeMetadata: NodeMetadata = {
    appInfo: {
        ...txtAppInfo,
        logo: AboutMeLogo,
        content: AboutMe(),
    },
    title: 'About me!'
};

export default aboutMeMetadata;