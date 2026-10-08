import type { NodeMetadata } from "../../../tree/types";
import { projectAppInfo, projectPage } from "../../../appInfo/projectAppInfo/projectAppInfo";
// To add images, put them in this folder and import them, e.g.:
// import screenshot from "./screenshot.png";

// TODO: replace the placeholder text with the real project details
const ctrlMeetMetadata: NodeMetadata = {
    appInfo: {
        ...projectAppInfo,
        content: projectPage({
            pitch: "One sentence: what Ctrl+Meet is and who it's for.",
            date: "Fall 2025",
            role: "What you built, e.g. Solo or Frontend lead",
            tools: ["React", "TypeScript"],
            // images: [{ src: screenshot, alt: "Ctrl+Meet's main screen", caption: "Optional caption" }],
            about: [
                "What was hard about building it, and how you solved it.",
                "What you learned, or what you'd do differently.",
            ],
            links: [
                { name: "GitHub", url: "https://github.com/your-username/ctrl-meet" },
            ],
        }),
    },
    title: "Ctrl+Meet"
}

export default ctrlMeetMetadata;
