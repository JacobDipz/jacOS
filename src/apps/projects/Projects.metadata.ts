import type { NodeMetadata } from "../../tree/types";
import { folderAppInfo } from "../../appInfo/folderAppInfo/folderAppInfo";

const projectsMetadata: NodeMetadata = {
    appInfo: {
        ...folderAppInfo
    },
    title: "My Projects"
}

export default projectsMetadata;