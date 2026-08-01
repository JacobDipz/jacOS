import { Rnd } from 'react-rnd';
import { renderFilename } from '../../nameHelper.ts';
import type { windowProps } from '../../types';
import Folder from '../Folder/Folder.tsx'
import styles from './Window.module.css'

function Window({ node, handleWindowClose, handleAppClick, handleWindowClick, zOrder }: windowProps) {
  const metadata = node.metadata!;

  const content = metadata.appInfo.kind === 'folder'
  ?  <Folder node={node} openWindows={[]} handleAppClick={handleAppClick} />
  :  metadata.appInfo.content;

  const appWidth = metadata.appInfo.width || '50%';
  const appHeight = metadata.appInfo.height || '60%';

  return (
    <Rnd
      default={{
        x: 50,
        y: 50,
        width: appWidth,
        height: appHeight,
      }}
      style={{zIndex: zOrder}}
      dragHandleClassName={styles.windowHeader}
      onMouseDown={handleWindowClick}
      className={styles.window}
    >
      <div className={styles.windowHeader}>
        <span className={styles.windowTitle}>{metadata.title || renderFilename(node) }</span>
        <button className={styles.windowCloseButton} onClick={handleWindowClose}>
          X
        </button>
      </div>
      <div className={styles.windowContent}>
        {content}
      </div>
    </Rnd>
  );
  
}

export default Window;