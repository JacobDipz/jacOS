import type { AppInfo } from '../../tree/types.ts';
import defaultFolderLogo from '../../assets/logos/folder-logo.png'
import defaultBackground from "../../assets/backgrounds/stripe.png"

export const folderAppInfo = {
    kind: 'folder',
    logo: defaultFolderLogo,
    background: defaultBackground,
    tileBackground: true,
} satisfies AppInfo;