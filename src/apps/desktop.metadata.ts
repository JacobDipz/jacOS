import type { NodeMetadata } from '../tree/types';
import { folderAppInfo } from '../appInfo/folderAppInfo/folderAppInfo';
import desktopBackground from '../assets/backgrounds/checker.png';

const desktopMetadata: NodeMetadata = {
    appInfo: {
        ...folderAppInfo,
        background: desktopBackground,
        tileBackground: true,
    }
};

export default desktopMetadata;