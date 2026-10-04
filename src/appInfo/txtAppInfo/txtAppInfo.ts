import type { AppInfo } from '../../tree/types.ts';
import txtLogo from '../../assets/logos/txt-logo.png';
import TxtDefault from './TxtDefault.tsx';

export const txtAppInfo = {
    kind: 'file',
    fileExtension: 'txt',
    logo: txtLogo,
    content: TxtDefault(),
} satisfies AppInfo;