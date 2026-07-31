import type { FolderProps } from "../../types";
import App from "../App/App.tsx";
import styles from "./Folder.module.css";

function Folder({ node, handleAppClick }: FolderProps) {
    const folderApps = Object.values(node.children).map(childNode => 
        <App 
            key={childNode.path} 
            node={childNode} 
            handleAppClick={() => handleAppClick(childNode.path)} 
        />
    );
    const background = node.metadata!.appInfo.customBackground;
    return (
        <div 
            className={styles.folder} 
            style={ background ? {backgroundImage: `url(${background})`} : {}}
        >
            {folderApps}
        </div>
    );
}

export default Folder;