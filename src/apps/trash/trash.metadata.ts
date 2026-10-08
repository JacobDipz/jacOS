import type { NodeMetadata } from "../../tree/types";
import { folderAppInfo } from "../../appInfo/folderAppInfo/folderAppInfo";
import trashLogo from "../../assets/dock/trash.png";
import trashHoverLogo from "../../assets/dock/trash-hover.png";

// Opens from the dock instead of the desktop. Put old projects in here as subfolders.
const trashMetadata: NodeMetadata = {
    appInfo: {
        ...folderAppInfo,
        logo: trashLogo,
        hoverLogo: trashHoverLogo,
    },
    title: "Trash",
    hidden: true,
}

export default trashMetadata;
