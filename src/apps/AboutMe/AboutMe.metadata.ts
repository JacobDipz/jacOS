import type { NodeMetadata } from "../../types";
import AboutMe from "./AboutMe";

const aboutMeMetadata: NodeMetadata = {
    type: "txt",
    filename: "aboutme",
    title: "About Me",
    content: AboutMe, // Use the imported AboutMe component as the content
};

export default aboutMeMetadata;