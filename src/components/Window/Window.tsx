import { renderFilename } from '../../nameHelper.ts';
import type { TreeNode } from '../../types';
import Folder from '../Folder/Folder.tsx'
import styles from './Window.module.css'

function Window({ node }: {node : TreeNode}) {
  const metadata = node.metadata!;

  const content = <Folder node={node} />

  return (
    <div className={styles.window}>
      <div className={styles.windowHeader}>
        <span className={styles.windowTitle}>{metadata.title || renderFilename(node) }</span>
        <button className={styles.windowCloseButton}>X</button>
      </div>
      <div className={styles.windowContent}>
        {content}
      </div>
    </div>
  );
}

export default Window;