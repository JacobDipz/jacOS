import type { AppInfo } from '../../tree/types.ts';
import defaultFolderBackground from '../../assets/backgrounds/fish-background.jpg';
import defaultFolderLogo from '../../assets/logos/folder-logo.png'

export const folderAppInfo = {
    kind: 'folder',
    logo: defaultFolderLogo,
    background: defaultFolderBackground,
} satisfies AppInfo;