import type { TreeNode } from '../../types';
import Folder from '../Folder/Folder.tsx'
import styles from './Window.module.css'

function Window({ node }: {node : TreeNode}) {
  const content = <Folder node={node} />

  if (!node.metadata || node.metadata.type === "desktop") {
    return null;
  }

  return (
    <div className={styles.window}>
      <div className={styles.windowHeader}>
        <span className={styles.windowTitle}>{node.metadata.title || node.metadata.filename }</span>
        <button className={styles.windowCloseButton}>X</button>
      </div>
      <div className={styles.windowContent}>
        {content}
      </div>
    </div>
  );
}

export default Window;