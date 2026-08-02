import type { NodeMetadata } from '../tree/types';
import { folderAppInfo } from '../appInfo/folderAppInfo/folderAppInfo';
import desktopBackground from '../assets/backgrounds/background.gif';

const desktopMetadata: NodeMetadata = {
    appInfo: {
        ...folderAppInfo,
        background: desktopBackground,
    }
};

export default desktopMetadata;