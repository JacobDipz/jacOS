import { renderFilename } from '../../nameHelper.ts';
import type { windowProps } from '../../types';
import Folder from '../Folder/Folder.tsx'
import styles from './Window.module.css'

function Window({ node, handleWindowClose, handleAppClick }: windowProps) {
  const metadata = node.metadata!;

  const content = metadata.appInfo.fileExtension.length === 0 
  ?  <Folder node={node} handleAppClick={handleAppClick} />
  :  metadata.content!;


  return (
    <div className={styles.window}>
      <div className={styles.windowHeader}>
        <span className={styles.windowTitle}>{metadata.title || renderFilename(node) }</span>
        <button className={styles.windowCloseButton} onClick={handleWindowClose}>
          X
        </button>
      </div>
      <div className={styles.windowContent}>
        {content}
      </div>
    </div>
  );
}

export default Window;