import type { AppInfo } from './types.ts';
import defaultFolderBackground from './assets/fishBackground.jpg';
import defaultFolderLogo from './assets/logos/FolderLogo.png'
import defaultTxtLogo from './assets/logos/TxtLogo.png';

export const folderAppInfo: AppInfo = {
    fileExtension: '', 
    logo: defaultFolderLogo,
    background: defaultFolderBackground,
    width: '40%',
    height: '50%',
};

export const txtAppInfo: AppInfo = {
    fileExtension: 'txt',
    logo: defaultTxtLogo,
    width: '30%',
    height: '50%',
};

export const projectAppInfo: AppInfo = {
    fileExtension: 'proj',
    logo: defaultTxtLogo, // CHANGE LATER
}


