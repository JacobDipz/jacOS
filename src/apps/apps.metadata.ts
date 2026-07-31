import type { NodeMetadata } from '../types';
import { folderAppInfo } from '../appTypes';
import desktopBackground from '../assets/windowsBackground.jpg';

const appsMetadata: NodeMetadata = {
    appInfo: {
        ...folderAppInfo,
        background: desktopBackground,
    }
};

export default appsMetadata;