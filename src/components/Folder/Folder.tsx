import type { ValidTreeNode } from "../../tree/types.ts";
import App from "../App/App.tsx";
import { PX } from "../pixelScale.ts";
import styles from "./Folder.module.css";

type FolderProps = {
    node: ValidTreeNode,
    openWindows: React.ReactElement[],
    selectedPath: string | null,
    handleAppOpen: (path: string) => void,
    handleAppSelect: (path: string | null) => void,
}

function Folder({ node, openWindows, selectedPath, handleAppOpen, handleAppSelect }: FolderProps) {
    if (node.metadata.appInfo.kind !== 'folder') {
        throw new Error(`Node at path ${node.path} is not a folder or is missing metadata.`);
    }
    const visibleChildren = Object.values(node.children).filter(childNode => !childNode.metadata.hidden);
    const folderApps = visibleChildren.map(childNode => 
        <App 
            key={childNode.path} 
            node={childNode} 
            selected={selectedPath === childNode.path}
            handleOpen={() => handleAppOpen(childNode.path)} 
            handleSelect={() => handleAppSelect(childNode.path)}
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
            // Clicking empty space (not an icon or window) clears the selection
            onClick={(e) => { if (e.target === e.currentTarget) handleAppSelect(null); }}
        >
            {folderApps}
            {openWindows}
        </div>
    );
}

export default Folder;