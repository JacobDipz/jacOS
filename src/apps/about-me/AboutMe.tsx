import styles from './AboutMe.module.css';
import meGif from './me-no-background.gif';

const courses = ['Systems Programming', 'Computer Graphics', 'Interactive Systems Design', 'Intermediate Animation'];

const funFacts = [
    { label: 'Favorite game', text: 'The Last of Us Part II (Outer Wilds is a close second)' },
    { label: 'Pretty good at', text: 'Spinning flags and rifles (color guard!)' },
    { label: 'Favorite artist', text: 'Cavetown!!!' },
];

function AboutMe() {
    return (
        <article className={styles.aboutMe}>
            <header className={styles.intro}>
                <div className={styles.introText}>
                    <h1 className={styles.greeting}>Hi, I'm Jacob!</h1>
                    <p className={styles.tagline}>
                        I'm a second-year at Harvard studying Applied Mathematics, with a secondary in Art,
                        Film, and Visual Studies.
                    </p>
                    <p>I draw pixel art and make animations, including everything on this website.</p>
                </div>
                <img src={meGif} alt="Pixel-art self-portrait of Jacob" className={styles.portrait} />
            </header>

            <p className={styles.callout}>
                <span className={styles.calloutLabel}>Looking for</span>
                Software development internships for Summer 2027!
            </p>

            <section>
                <h2 className={styles.heading}>Why mathematics</h2>
                <p>
                    My passion for math didn't show up until the latter half of high school, when I took
                    Multivariable Calculus and Linear Algebra.
                </p>
                <p>
                    In multi, I loved how visual imagination could bridge the mathematical understanding of shapes
                    and systems. And in linear algebra, I found it fascinating that abstracting relationships into
                    simple vectors and matrices could be applied to anything from Markov chains to computer graphics!
                </p>
            </section>

            <section>
                <h2 className={styles.heading}>Right now</h2>
                <p>I'm taking courses on:</p>
                <ul className={styles.courses}>
                    {courses.map(course => <li key={course}>{course}</li>)}
                </ul>
                <p>
                    They're all super interesting, but I'm especially excited about Computer Graphics, where we're
                    learning graphics from the ground up through OpenGL! I'm also teaching myself game design: how to
                    craft meaningful and entertaining experiences through art and storytelling.
                </p>
            </section>

            <section>
                <h2 className={styles.heading}>Outside class</h2>
                <p>
                    You can find me dancing, drawing, taking pictures, or eating yummy food. I'm super interested in
                    the intersection of art and computers, particularly graphics and video games. The design of this
                    website was actually inspired by a video game called Hypnospace Outlaw!
                </p>
            </section>

            <section>
                <h2 className={styles.heading}>Fun facts</h2>
                <dl className={styles.facts}>
                    {funFacts.map(fact => (
                        <div key={fact.label}>
                            <dt>{fact.label}</dt>
                            <dd>{fact.text}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <p className={styles.signoff}>
                Want to reach out? My email and LinkedIn are in the dock below.
                Thanks for visiting, and feel free to explore : &gt;
            </p>
        </article>
    );
}

export default AboutMe;
