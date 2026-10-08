import { createElement } from 'react';
import type { AppInfo } from '../../tree/types.ts';
import projectLogo from '../../assets/logos/txt-logo.png'; // FIX LATER
import ProjectDefault from './ProjectDefault.tsx';
import ProjectPage, { type ProjectDetails } from './ProjectPage.tsx';

export const projectAppInfo = {
    kind: 'file',
    fileExtension: 'proj',
    logo: projectLogo,
    content: ProjectDefault(),
} satisfies AppInfo;

// Builds a project page from its details; use as `content: projectPage({ ... })`
export function projectPage(details: ProjectDetails) {
    return createElement(ProjectPage, details);
}
