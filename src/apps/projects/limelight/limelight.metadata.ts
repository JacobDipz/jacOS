import type { NodeMetadata } from "../../../tree/types";
import { projectAppInfo, projectPage } from "../../../appInfo/projectAppInfo/projectAppInfo";
// To add a screenshot, put it in this folder and import it, e.g.:
// import screenshot from "./screenshot.png";

const limelightMetadata: NodeMetadata = {
    appInfo: {
        ...projectAppInfo,
        content: projectPage({
            pitch: "A lighting designer for dancers who have never touched a lighting board.",

            role: "Product, design and testing, with Claude Code as my pair programmer",
            timeline: "June 2026 to now: v1 in July, the Show Assembler in August, a big redesign this fall",
            audience: "Choreographers in Harvard's Asian American Dance Troupe (AADT), and the tech chairs who run the show",
            status: "Live, with a redesign in progress",
            tools: ["Preact", "htm", "wavesurfer.js", "JavaScript", "Claude Code"],
            links: [
                { name: "Try it live", url: "https://jacobdipz.github.io/aadt-limelight/" },
                { name: "Code", url: "https://github.com/JacobDipz/aadt-limelight" },
            ],

            highlights: [
                "Turns a choreographer's \"warm and low from above\" into exact QLab cues, tested byte for byte against real cues from past shows",
                "Went through all 130 effects in two years of show files and found they came down to four: flash, strobe, pulse and travel",
                "Two tools: Limelight designs one dance, and the Show Assembler builds the whole show in QLab",
                "One static page with no build step, so it keeps running as maintainers change every year",
            ],
            // images: [{ src: screenshot, alt: "Limelight's timeline and stage preview" }],

            problem: [
                "Every fall, AADT puts on Horizon in Lowell Lecture Hall. Every choreographer knows what their dance should look like, but the lights run on QLab, which thinks in submaster numbers and dimmer channels, not \"warm and low from above.\" The people who know the board graduate every year, so that knowledge kept walking out the door.",
            ],
            solution: [
                "Limelight closes the gap. You load your song, drop cues on the beat, and paint each look against a drawing of the actual stage. Flashes, strobes and color chases go right on the music. When you're done, you export one file.",
                "Its sibling, the Show Assembler, is for the tech chair: it pulls every dance into the show order and writes a script that builds the whole show in QLab.",
            ],
            myRole: [
                "I built it with Claude Code as my pair programmer. My job was mostly product and design: digging through old show files and spreadsheets, deciding how it should work and feel, writing specs, and testing everything in Safari and Firefox. Claude wrote most of the code, against those specs and a big pile of tests.",
                "It's one static web page with nothing to install or compile, on purpose. A tool that has to survive a new set of maintainers every year needs to still run in three years without anyone touching it.",
            ],
            challenges: [
                {
                    title: "Speaking QLab",
                    text: "A look has to turn into the exact cue text the venue's QLab file expects. I mapped the whole rig into one config file, and the export is tested byte for byte against real cues from past shows.",
                },
                {
                    title: "A preview you can trust",
                    text: "You can't simulate stage lighting in a browser, so the preview layers hand-drawn light shapes over a drawing of the hall, tuned by eye. Strobes were their own puzzle: sharp enough to read as a strobe, but under three flashes a second so they're safe to watch.",
                },
                {
                    title: "Effects",
                    text: "Choreographers ask for things like \"red flash on the hits at 1:22, 1:24 and 1:26.\" Every effect in two years of show files came down to four shapes, which became Limelight's four effects, and the Show Assembler builds each one as real QLab cues. I prototyped a few timeline layouts first; each effect ended up living inside the look it plays during, while keeping its own beat.",
                },
                {
                    title: "Cue numbers",
                    text: "These only make sense once you know the whole running order. So I split the work in two: Limelight handles one dance, and the Show Assembler handles the whole show.",
                },
            ],
            // impact: ["How many dances or shows it has been used for", "What choreographers or tech chairs said about it"],
            learned: [
                { title: "Real data beats guessing", text: "My best design calls came from old spreadsheets and show files, not from my head." },
                { title: "Prototype the tricky parts first", text: "Clickable mockups let me try several effect editors in an afternoon before committing to one." },
                { title: "Calm beats cool", text: "I built a retro \"Limelight OS\" theme with CRT scanlines and a boot screen. It was fun, and it got in the way, so now it's off by default." },
                { title: "With AI, the bottleneck is judgment", text: "The code comes fast. The real work is clear specs, good tests, and actually using the thing in a real browser." },
            ],
            nextTime: [
                "Put it in front of choreographers much sooner.",
                "Settle how effects work before building UI around them. I reworked them several times.",
                "Test in the browsers people actually use from day one. Some of the worst bugs only ever showed up in Safari.",
                "Spend less time on early visual redesigns, and more on the core workflow.",
            ],
        }),
    },
    title: "AADT Limelight"
}

export default limelightMetadata;
