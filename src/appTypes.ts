import type { AppInfo } from './types.ts';
import defaultFolderBackground from './assets/fishBackground.jpg';
import defaultFolderLogo from './assets/logos/FolderLogo.png'
import defaultTxtLogo from './assets/logos/TxtLogo.png';

export const folderAppInfo: AppInfo = {
    fileExtension: '', 
    defaultLogo: defaultFolderLogo,
    customBackground: defaultFolderBackground,
};

export const txtAppInfo: AppInfo = {
    fileExtension: 'txt',
    defaultLogo: defaultTxtLogo,
};

export const projectAppInfo: AppInfo = {
    fileExtension: 'proj',
    defaultLogo: defaultTxtLogo, // CHANGE LATER
}


