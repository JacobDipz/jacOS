import type { NodeMetadata } from "../../types";
import { folderAppInfo } from "../../appTypes/FolderType/FolderAppInfo";

const projectsMetadata: NodeMetadata = {
    appInfo: {
        ...folderAppInfo
    },
    title: "My Projects"
}

export default projectsMetadata;