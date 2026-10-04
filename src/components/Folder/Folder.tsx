import type { ValidTreeNode } from "../../tree/types.ts";
import App from "../App/App.tsx";
import { PX } from "../pixelScale.ts";
import styles from "./Folder.module.css";

type FolderProps = {
    node: ValidTreeNode,
    openWindows: React.ReactElement[],
    handleAppClick: (key: string) => void,
}

function Folder({ node, openWindows, handleAppClick }: FolderProps) {
    if (node.metadata.appInfo.kind !== 'folder') {
        throw new Error(`Node at path ${node.path} is not a folder or is missing metadata.`);
    }
    const folderApps = Object.values(node.children).map(childNode => 
        <App 
            key={childNode.path} 
            node={childNode} 
            handleAppClick={() => handleAppClick(childNode.path)} 
        />
    );
    const { background, tileBackground } = node.metadata.appInfo;
    // Declaring the tile as a 1/PX-resolution image makes the browser draw it PX times larger,
    // so tiled art lines up with the window art's pixel scale
    const backgroundImage = tileBackground
        ? `image-set(url(${background}) ${1 / PX}x)`
        : `url(${background})`;
    return (
        <div 
            className={tileBackground ? `${styles.folder} ${styles.tiled}` : styles.folder} 
            style={ background ? { backgroundImage } : {}}
        >
            {folderApps}
            {openWindows}
        </div>
    );
}

export default Folder;