import type { NodeMetadata } from "../../../tree/types";
import { projectAppInfo, projectPage } from "../../../appInfo/projectAppInfo/projectAppInfo";
// To add images, put them in this folder and import them, e.g.:
// import screenshot from "./screenshot.png";

// TODO: replace the placeholder text with the real project details. Leave out anything you don't have.
const ctrlMeetMetadata: NodeMetadata = {
    appInfo: {
        ...projectAppInfo,
        content: projectPage({
            pitch: "One sentence: what Ctrl+Meet is and who it's for.",

            role: "What you did, e.g. Solo developer, or Frontend lead on a team of 4",
            timeline: "Fall 2025",
            tools: ["React", "TypeScript"],
            links: [
                { name: "GitHub", url: "https://github.com/your-username/ctrl-meet" },
            ],

            highlights: [
                "The thing you most want a recruiter to remember",
                "A number, if you have one: users, speedup, size",
            ],
            // images: [{ src: screenshot, alt: "Ctrl+Meet's main screen" }],

            problem: ["Why it needed to exist."],
            solution: ["What you built and how it works."],
            challenges: [
                { title: "The hardest part", text: "What made it hard, and how you solved it." },
            ],
            learned: ["What you learned."],
        }),
    },
    title: "Ctrl+Meet"
}

export default ctrlMeetMetadata;
