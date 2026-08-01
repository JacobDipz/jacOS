import type { AppInfo } from '../../types.ts';
import defaultFolderBackground from '../../assets/fishBackground.jpg';
import defaultFolderLogo from '../../assets/logos/FolderLogo.png'

export const folderAppInfo = {
    kind: 'folder',
    logo: defaultFolderLogo,
    background: defaultFolderBackground,
} satisfies AppInfo;