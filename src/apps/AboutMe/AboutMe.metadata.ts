import type { NodeMetadata } from "../../types";
import AboutMe from "./AboutMe";

const aboutMeMetadata: NodeMetadata = {
    filename: "aboutme",
    type: "txt",
    title: "About Me",
    content: AboutMe, // Use the imported AboutMe component as the content
};

export default aboutMeMetadata;