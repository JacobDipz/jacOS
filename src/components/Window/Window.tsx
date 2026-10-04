import { Rnd } from 'react-rnd';
import { renderFilename } from '../renderFilename.ts';
import type { ValidTreeNode } from '../../tree/types.ts';
import Folder from '../Folder/Folder.tsx'
import { PX } from '../pixelScale.ts';
import resizeGrip from '../../assets/window/resize-grip.png';
import styles from './Window.module.css'

// Sizes in art pixels
const DEFAULT_WIDTH = 160;
const DEFAULT_HEIGHT = 120;
const MIN_WIDTH = 60;
const MIN_HEIGHT = 40;
const GRIP_SIZE = 8;
const FRAME_SIZE = 4; // must match the border width in .windowBody

// Offset that centers `size` within `available` screen pixels, snapped to the art-pixel grid
function centerOffset(size: number, available: number) {
  return Math.max(0, Math.round((available - size) / 2 / PX) * PX);
}

type WindowProps = {
    node: ValidTreeNode,
    handleWindowClose: () => void,
    handleWindowClick: () => void,
    handleAppClick: (key: string) => void,
    zOrder: number,
}

function Window({ node, handleWindowClose, handleAppClick, handleWindowClick, zOrder }: WindowProps) {
  const metadata = node.metadata;

  const content = metadata.appInfo.kind === 'file'
  ?  metadata.appInfo.content
  :  <Folder node={node} openWindows={[]} handleAppClick={handleAppClick} />;

  const width = (metadata.appInfo.width ?? DEFAULT_WIDTH) * PX;
  const height = (metadata.appInfo.height ?? DEFAULT_HEIGHT) * PX;

  return (
    <Rnd
      // Rnd only reads `default` when the window first opens, so it opens centered on screen
      default={{
        x: centerOffset(width, window.innerWidth),
        y: centerOffset(height, window.innerHeight),
        width,
        height,
      }}
      minWidth={MIN_WIDTH * PX}
      minHeight={MIN_HEIGHT * PX}
      // Snap to the art-pixel grid so the frame never lands between pixels
      dragGrid={[PX, PX]}
      resizeGrid={[PX, PX]}
      // Rnd sets display: inline-block inline, so the flex layout has to be inline too
      style={{ zIndex: zOrder, display: 'flex', flexDirection: 'column' }}
      dragHandleClassName={styles.windowHeader}
      cancel={`.${styles.windowCloseButton}`}
      resizeHandleStyles={{
        // Sit inside the frame rather than on top of its corner
        bottomRight: { right: FRAME_SIZE * PX, bottom: FRAME_SIZE * PX, width: GRIP_SIZE * PX, height: GRIP_SIZE * PX },
      }}
      resizeHandleComponent={{
        // draggable={false} stops the browser's native image drag from hijacking the mouse
        bottomRight: <img className={styles.resizeGrip} src={resizeGrip} alt="" draggable={false} />,
      }}
      onMouseDown={handleWindowClick}
      className={styles.window}
    >
      <div className={styles.windowHeader}>
        <div className={styles.windowIcon}>
          <img src={metadata.appInfo.logo} alt="" draggable={false} />
        </div>
        <div className={styles.windowTitle}>
          <span>{metadata.title || renderFilename(node)}</span>
        </div>
        <button className={styles.windowCloseButton} onClick={handleWindowClose} aria-label="Close" />
      </div>
      <div className={styles.windowBody}>
        <div className={styles.windowContent}>
          {content}
        </div>
      </div>
    </Rnd>
  );

}

export default Window;
