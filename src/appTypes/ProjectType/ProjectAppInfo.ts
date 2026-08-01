import type { AppInfo } from '../../types.ts';
import TxtLogo from '../../assets/logos/TxtLogo.gif';
import ProjectDefault from './ProjectDefault.tsx';

export const projectAppInfo = {
    kind: 'file',
    fileExtension: 'proj',
    logo: TxtLogo,
    content: ProjectDefault(),
} satisfies AppInfo;