import type { AppInfo } from '../../tree/types.ts';
import linkLogo from '../../assets/logos/link-logo.png';

// Spread this into a link's appInfo and set `url`
export const linkAppInfo = {
    kind: 'link',
    logo: linkLogo,
    url: '',
} satisfies AppInfo;
