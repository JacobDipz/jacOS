import type { NodeMetadata } from "../../types";
import { projectAppInfo } from "../../appTypes/ProjectType/ProjectAppInfo";

const projectsMetadata: NodeMetadata = {
    appInfo: {
        ...projectAppInfo
    },
    title: "AADT Limelight"
}

export default projectsMetadata;