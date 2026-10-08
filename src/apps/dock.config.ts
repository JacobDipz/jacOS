import type { DockLink } from '../tree/types';
import resumeIcon from '../assets/dock/resume.png';
import emailIcon from '../assets/dock/email.png';
import githubIcon from '../assets/dock/github.png';
import linkedinIcon from '../assets/dock/linkedin.png';

export const dockLinks: DockLink[] = [
    // Put resume.pdf in the public/ folder; files there are served from the site root
    { name: 'Resume', logo: resumeIcon, url: '/resume.pdf' },
    { name: 'Email', logo: emailIcon, url: 'mailto:jacob.logan2025@gmail.com' },
    { name: 'GitHub', logo: githubIcon, url: 'https://github.com/JacobDipz' },
    { name: 'LinkedIn', logo: linkedinIcon, url: 'https://www.linkedin.com/in/jacob-dipasupil' },
];

export const TRASH_PATH = 'trash';
