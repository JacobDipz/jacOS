import type { NodeMetadata } from '../types';
import { folderAppInfo } from '../appTypes/FolderType/FolderAppInfo';
import desktopBackground from '../assets/background.gif';

const appsMetadata: NodeMetadata = {
    appInfo: {
        ...folderAppInfo,
        background: desktopBackground,
    }
};

export default appsMetadata;