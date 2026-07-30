import type { NodeMetadata } from "../../types";
import { folderAppInfo } from "../../appTypes";

const projectsMetadata: NodeMetadata = {
    appInfo: {
        ...folderAppInfo
    },
    title: "My Projects"
}

export default projectsMetadata;