import type { AppInfo } from '../../types.ts';
import TxtLogo from '../../assets/logos/TxtLogo.gif';
import TxtDefault from './TxtDefault.tsx';

export const txtAppInfo = {
    kind: 'file',
    fileExtension: 'txt',
    logo: TxtLogo,
    content: TxtDefault(),
} satisfies AppInfo;