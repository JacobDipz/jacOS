import type { TreeNode } from "../../types";
import App from "../App/App.tsx";
import styles from "./Folder.module.css";
import wallpaper from "../../assets/defaultBackground.jpg"

function Folder({ node, windows }: { node: TreeNode, windows?: React.ReactElement[]}) {
    const childrenNodes = Object.values(node.children);
    if (!node.metadata) {
        return <p>ERROR: Node metadata is missing</p>; // or some fallback UI
    } 
    const type = node.metadata.type
    if (type !== 'folder' && type !== 'desktop') {
        return <p>ERROR: Node is not a folder or desktop</p>; // or some fallback UI
    }
    const folderApps = childrenNodes.map(childNode => <App key={childNode.path} node={childNode} />);


    if (type === "desktop") {
        return (
            <div className={styles.desktop} style= {{backgroundImage: `url(${wallpaper})`}}>
                {folderApps}
                {windows}
            </div>
        
        );
    }
    return (
        <div className={styles.folder}>
            {folderApps}
        </div>
        
    );
    


}

export default Folder;