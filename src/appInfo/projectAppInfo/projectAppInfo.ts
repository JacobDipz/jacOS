import type { AppInfo } from '../../tree/types.ts';
import projectLogo from '../../assets/logos/txt-logo.png'; // FIX LATER
import ProjectDefault from './ProjectDefault.tsx';

export const projectAppInfo = {
    kind: 'file',
    fileExtension: 'proj',
    logo: projectLogo,
    content: ProjectDefault(),
} satisfies AppInfo;