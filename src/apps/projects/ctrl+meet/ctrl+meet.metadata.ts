import type { NodeMetadata } from "../../../tree/types";
import { projectAppInfo } from "../../../appInfo/projectAppInfo/projectAppInfo";

const ctrlMeetMetadata: NodeMetadata = {
    appInfo: {
        ...projectAppInfo
    },
    title: "Ctrl+Meet"
}

export default ctrlMeetMetadata;