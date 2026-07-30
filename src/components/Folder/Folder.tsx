import type { TreeNode } from "../../types";
import App from "../App/App.tsx";
import styles from "./Folder.module.css";

function Folder({ node }: { node: TreeNode}) {
    const folderApps = Object.values(node.children).map(childNode => <App key={childNode.path} node={childNode} />);
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