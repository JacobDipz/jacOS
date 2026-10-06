import { useEffect, useId, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { renderFilename } from '../renderFilename.ts';
import type { ValidTreeNode } from '../../tree/types.ts';
import Folder from '../Folder/Folder.tsx'
import { PX } from '../pixelScale.ts';
import { SMALL_SCREEN, useMediaQuery } from '../useMediaQuery.ts';
import resizeGrip from '../../assets/window/resize-grip.png';
import styles from './Window.module.css'

// Sizes in art pixels
const DEFAULT_WIDTH = 160;
const DEFAULT_HEIGHT = 120;
const MIN_WIDTH = 60;
const MIN_HEIGHT = 40;
const GRIP_SIZE = 8;
const FRAME_SIZE = 4; // must match the border width in .windowBody
const CASCADE_STEP = 8; // how far each new window is shifted down and right
const CASCADE_LIMIT = 6; // after this many windows, start again from the center

type Frame = { x: number, y: number, width: number, height: number };

// Largest multiple of PX that fits in `available` screen pixels
function fitToGrid(available: number) {
  return Math.floor(available / PX) * PX;
}

// Where a window opens along one axis: centered, shifted by its cascade position,
// kept on screen, and snapped to the art-pixel grid
function openingOffset(size: number, available: number, cascade: number) {
  const centered = Math.round((available - size) / 2 / PX) * PX;
  const shifted = centered + (cascade % CASCADE_LIMIT) * CASCADE_STEP * PX;
  return Math.max(0, Math.min(shifted, fitToGrid(available - size)));
}

// Shrink and move a window as needed so all of it is on screen
function fitOnScreen(frame: Frame): Frame {
  const width = Math.min(frame.width, fitToGrid(window.innerWidth));
  const height = Math.min(frame.height, fitToGrid(window.innerHeight));
  return {
    width,
    height,
    x: Math.max(0, Math.min(frame.x, fitToGrid(window.innerWidth - width))),
    y: Math.max(0, Math.min(frame.y, fitToGrid(window.innerHeight - height))),
  };
}

type WindowProps = {
    node: ValidTreeNode,
    cascade: number, // how many windows were already open when this one opened
    zOrder: number,
    selectedPath: string | null,
    handleWindowClose: () => void,
    handleWindowClick: () => void,
    handleAppOpen: (path: string) => void,
    handleAppSelect: (path: string | null) => void,
}

function Window({
  node, cascade, zOrder, selectedPath,
  handleWindowClose, handleWindowClick, handleAppOpen, handleAppSelect,
}: WindowProps) {
  const metadata = node.metadata;
  const isSmallScreen = useMediaQuery(SMALL_SCREEN);

  const content = metadata.appInfo.kind === 'file'
  ?  metadata.appInfo.content
  :  <Folder
       node={node}
       openWindows={[]}
       selectedPath={selectedPath}
       handleAppOpen={handleAppOpen}
       handleAppSelect={handleAppSelect}
     />;

  const titleId = useId();
  const rndRef = useRef<Rnd>(null);

  // Position and size on screen; windows larger than the screen open shrunk to fit
  const [frame, setFrame] = useState<Frame>(() => {
    const width = Math.min((metadata.appInfo.width ?? DEFAULT_WIDTH) * PX, fitToGrid(window.innerWidth));
    const height = Math.min((metadata.appInfo.height ?? DEFAULT_HEIGHT) * PX, fitToGrid(window.innerHeight));
    return {
      x: openingOffset(width, window.innerWidth, cascade),
      y: openingOffset(height, window.innerHeight, cascade),
      width,
      height,
    };
  });

  // When the browser window shrinks, pull this window back on screen
  useEffect(() => {
    function handleResize() {
      setFrame(fitOnScreen);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Move keyboard focus into the window when it opens
  useEffect(() => {
    rndRef.current?.getSelfElement()?.focus();
  }, []);

  return (
    <Rnd
      ref={rndRef}
      // Phones: fill the screen, no dragging or resizing
      position={isSmallScreen ? { x: 0, y: 0 } : { x: frame.x, y: frame.y }}
      size={isSmallScreen ? { width: '100%', height: '100%' } : { width: frame.width, height: frame.height }}
      onDragStop={(_e, d) => setFrame((f) => ({ ...f, x: d.x, y: d.y }))}
      onResizeStop={(_e, _direction, ref, _delta, position) =>
        setFrame({ width: ref.offsetWidth, height: ref.offsetHeight, ...position })
      }
      disableDragging={isSmallScreen}
      enableResizing={!isSmallScreen}
      // Keep windows on screen so the title bar can always be grabbed
      bounds="parent"
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
      // Keyboard focus moving into a window also brings it to the front
      onFocus={handleWindowClick}
      className={styles.window}
      tabIndex={-1}
      role="dialog"
      aria-labelledby={titleId}
      data-window={node.path}
    >
      <div className={styles.windowHeader}>
        <div className={styles.windowIcon}>
          <img src={metadata.appInfo.logo} alt="" draggable={false} />
        </div>
        <div className={styles.windowTitle}>
          <span id={titleId}>{metadata.title || renderFilename(node)}</span>
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
