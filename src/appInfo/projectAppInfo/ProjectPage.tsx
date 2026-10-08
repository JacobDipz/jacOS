import { linkTargetProps } from '../../components/openLink.ts';
import styles from './ProjectPage.module.css';

export type ProjectDetails = {
    pitch: string;                // one line: what it is and who it's for
    date?: string;                // e.g. "Fall 2025"
    role?: string;                // what you did: "Solo", "Frontend lead", ...
    tools?: string[];             // languages, frameworks, software
    images?: { src: string, alt: string, caption?: string }[];  // the first one is shown largest
    about?: string[];             // paragraphs: what was hard, what you learned
    links?: { name: string, url: string }[];  // demo, GitHub, Devpost, ...
};

function ProjectPage({ pitch, date, role, tools, images, about, links }: ProjectDetails) {
    return (
        <article className={styles.project}>
            <p className={styles.pitch}>{pitch}</p>

            {(date || role) && (
                <dl className={styles.facts}>
                    {date && <div><dt>When</dt><dd>{date}</dd></div>}
                    {role && <div><dt>Role</dt><dd>{role}</dd></div>}
                </dl>
            )}

            {tools && tools.length > 0 && (
                <ul className={styles.tools} aria-label="Tools">
                    {tools.map(tool => <li key={tool}>{tool}</li>)}
                </ul>
            )}

            {images && images.length > 0 && (
                <div className={styles.images}>
                    {images.map(image => (
                        <figure key={image.src}>
                            <img src={image.src} alt={image.alt} />
                            {image.caption && <figcaption>{image.caption}</figcaption>}
                        </figure>
                    ))}
                </div>
            )}

            {about?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}

            {links && links.length > 0 && (
                <div className={styles.links}>
                    {links.map(link => (
                        <a key={link.url} href={link.url} {...linkTargetProps(link.url)}>{link.name}</a>
                    ))}
                </div>
            )}
        </article>
    );
}

export default ProjectPage;
