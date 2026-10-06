import type { NodeMetadata } from "../../tree/types";
import { folderAppInfo } from "../../appInfo/folderAppInfo/folderAppInfo";

const projectsMetadata: NodeMetadata = {
    appInfo: {
        ...folderAppInfo
    },
    title: "My Animation Work"
}

export default projectsMetadata;