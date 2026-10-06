import type { NodeMetadata } from "../../../tree/types";
import { projectAppInfo } from "../../../appInfo/projectAppInfo/projectAppInfo";

const limelightMetadata: NodeMetadata = {
    appInfo: {
        ...projectAppInfo
    },
    title: "AADT Limelight"
}

export default limelightMetadata;