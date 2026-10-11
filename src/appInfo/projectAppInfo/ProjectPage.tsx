import type { ReactNode } from 'react';
import { linkTargetProps } from '../../components/openLink.ts';
import styles from './ProjectPage.module.css';

// A bullet point: plain text, or a short title shown as a label above its text
export type ProjectPoint = string | { title: string, text: string };

export type ProjectSection = {
    heading: string;
    paragraphs?: string[];
    points?: ProjectPoint[];
};

/*
 * Laid out in the order recruiters tend to ask their questions.
 * Only `pitch` is required; anything left out is skipped.
 */
export type ProjectDetails = {
    pitch: string;              // What is it? One sentence.

    // At a glance (the card at the top)
    role?: string;              // What did you do? e.g. "Solo developer", "Frontend lead on a team of 4"
    timeline?: string;          // When? e.g. "Fall 2025", "June 2026 to now"
    audience?: string;          // Who is it for?
    team?: string;              // Who with? e.g. "Solo", "Team of 4"
    status?: string;            // Where is it now? e.g. "Live", "In use for Horizon 2026"
    tools?: string[];           // What tech?
    links?: { name: string, url: string }[];  // Can I try it? Demo first, then code

    highlights?: string[];      // The 3 or 4 things you most want a recruiter to remember
    images?: { src: string, alt: string, caption?: string }[];  // the first one is shown largest

    // The story
    problem?: string[];         // Why does it exist? (paragraphs)
    solution?: string[];        // What did you build, and how does it work? (paragraphs)
    myRole?: string[];          // What exactly did you do? (paragraphs)
    challenges?: { title: string, text: string }[];  // What was hard, and how did you solve it?
    impact?: ProjectPoint[];    // What happened? Users, numbers, feedback
    learned?: ProjectPoint[];   // What did you learn?
    nextTime?: ProjectPoint[];  // What would you do differently?
    sections?: ProjectSection[];  // Anything else, at the end
};

// Section headers; change the wording here
const HEADINGS = {
    highlights: 'Highlights',
    problem: 'The problem',
    solution: 'What I built',
    myRole: 'My role',
    challenges: 'Challenges',
    impact: 'Impact',
    learned: 'What I learned',
    nextTime: "What I'd do differently",
};

function Section({ heading, children }: { heading: string, children: ReactNode }) {
    return (
        <section className={styles.section}>
            <h3 className={styles.heading}>{heading}</h3>
            {children}
        </section>
    );
}

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
}

function Points({ points }: { points: ProjectPoint[] }) {
    return (
        <ul className={styles.points}>
            {points.map((point, index) => (
                <li key={index}>
                    {typeof point === 'string' ? point : (
                        <>
                            <span className={styles.pointTitle}>{point.title}</span>
                            {point.text}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

function has<T>(list: T[] | undefined): list is T[] {
    return !!list && list.length > 0;
}

function ProjectPage(project: ProjectDetails) {
    const facts = [
        { label: 'Role', value: project.role },
        { label: 'Timeline', value: project.timeline },
        { label: 'Built for', value: project.audience },
        { label: 'Team', value: project.team },
        { label: 'Status', value: project.status },
    ].filter(fact => fact.value);

    return (
        <article className={styles.project}>
            <p className={styles.pitch}>{project.pitch}</p>

            {(facts.length > 0 || has(project.tools) || has(project.links)) && (
                <div className={styles.card}>
                    <dl className={styles.facts}>
                        {facts.map(fact => (
                            <div key={fact.label}>
                                <dt>{fact.label}</dt>
                                <dd>{fact.value}</dd>
                            </div>
                        ))}
                        {has(project.tools) && (
                            <div>
                                <dt>Stack</dt>
                                <dd>
                                    <ul className={styles.tools}>
                                        {project.tools.map(tool => <li key={tool}>{tool}</li>)}
                                    </ul>
                                </dd>
                            </div>
                        )}
                    </dl>
                    {has(project.links) && (
                        <div className={styles.links}>
                            {project.links.map(link => (
                                <a key={link.url} href={link.url} {...linkTargetProps(link.url)}>{link.name}</a>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {has(project.highlights) && (
                <Section heading={HEADINGS.highlights}><Points points={project.highlights} /></Section>
            )}

            {has(project.images) && (
                <div className={styles.images}>
                    {project.images.map(image => (
                        <figure key={image.src}>
                            <img src={image.src} alt={image.alt} />
                            {image.caption && <figcaption>{image.caption}</figcaption>}
                        </figure>
                    ))}
                </div>
            )}

            {has(project.problem) && (
                <Section heading={HEADINGS.problem}><Paragraphs paragraphs={project.problem} /></Section>
            )}
            {has(project.solution) && (
                <Section heading={HEADINGS.solution}><Paragraphs paragraphs={project.solution} /></Section>
            )}
            {has(project.myRole) && (
                <Section heading={HEADINGS.myRole}><Paragraphs paragraphs={project.myRole} /></Section>
            )}
            {has(project.challenges) && (
                <Section heading={HEADINGS.challenges}>
                    <div className={styles.challenges}>
                        {project.challenges.map(challenge => (
                            <div key={challenge.title} className={styles.challenge}>
                                <h4>{challenge.title}</h4>
                                <p>{challenge.text}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            )}
            {has(project.impact) && (
                <Section heading={HEADINGS.impact}><Points points={project.impact} /></Section>
            )}
            {has(project.learned) && (
                <Section heading={HEADINGS.learned}><Points points={project.learned} /></Section>
            )}
            {has(project.nextTime) && (
                <Section heading={HEADINGS.nextTime}><Points points={project.nextTime} /></Section>
            )}

            {project.sections?.map(section => (
                <Section key={section.heading} heading={section.heading}>
                    {has(section.paragraphs) && <Paragraphs paragraphs={section.paragraphs} />}
                    {has(section.points) && <Points points={section.points} />}
                </Section>
            ))}
        </article>
    );
}

export default ProjectPage;
