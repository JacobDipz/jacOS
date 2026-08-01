import type { FolderProps } from "../../types";
import App from "../App/App.tsx";
import styles from "./Folder.module.css";

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
    const background = node.metadata.appInfo.background;
    return (
        <div 
            className={styles.folder} 
            style={ background ? {backgroundImage: `url(${background})`} : {}}
        >
            {folderApps}
            {openWindows}
        </div>
    );
}

export default Folder;