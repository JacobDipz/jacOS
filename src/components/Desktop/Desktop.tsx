import buildTree from '../../tree/buildTree.ts'
import Window from '../Window/Window.tsx';
import styles from './Desktop.module.css';
import Folder from '../Folder/Folder.tsx';
import { useEffect, useRef, useState } from 'react';
import { PX } from '../pixelScale.ts';

function windowElement(path: string) {
  return document.querySelector<HTMLElement>(`[data-window="${CSS.escape(path)}"]`);
}

function Desktop() {
  const [root, pathToNode] = buildTree();
  const [openWindowPaths, setOpenWindowPaths] = useState(new Array<string>());
  const [zOrder, setZOrder] = useState(new Array<string>());
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  // What had focus when each window opened (usually its icon), so closing can return focus there
  const openers = useRef(new Map<string, HTMLElement>());

  function handleOpen(path: string) {
    if (!openWindowPaths.includes(path)){
      if (document.activeElement instanceof HTMLElement) {
        openers.current.set(path, document.activeElement);
      }
      setOpenWindowPaths(paths => [...paths, path]);
    }
    else {
      windowElement(path)?.focus();
    }
    handleWindowClick(path);
  }

  // Updates use the latest state (not this render's) because focus events can fire between them
  function handleWindowClick(path: string) {
    setZOrder(order => [...order.filter(key => key !== path), path]);
  }

  function handleWindowClose(path: string) {
    setOpenWindowPaths(paths => paths.filter(key => key !== path));
    setZOrder(order => order.filter(key => key !== path));

    // Return focus to the icon that opened this window, or else to the next window down
    const opener = openers.current.get(path);
    openers.current.delete(path);
    const remaining = zOrder.filter(key => key !== path);
    if (opener?.isConnected) {
      opener.focus();
    }
    else if (remaining.length > 0) {
      windowElement(remaining[remaining.length - 1])?.focus();
    }
  }

  // Escape closes the window on top
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const topWindow = zOrder[zOrder.length - 1];
      if (e.key === 'Escape' && topWindow) {
        handleWindowClose(topWindow);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  const openWindows: React.ReactElement[] = openWindowPaths.map((path, index) =>
    <Window 
      key={path} 
      node={pathToNode[path]} 
      cascade={index}
      zOrder={zOrder.indexOf(path)}
      selectedPath={selectedPath}
      handleWindowClose={ () => handleWindowClose(path)}
      handleWindowClick= { () => handleWindowClick(path)}
      handleAppOpen={ handleOpen }
      handleAppSelect={ setSelectedPath }
    />
  );

  return (
    <div className={styles.desktop} style={{ '--px': `${PX}px` } as React.CSSProperties}>
      <Folder
        node={root}
        openWindows={openWindows}
        selectedPath={selectedPath}
        handleAppOpen={handleOpen}
        handleAppSelect={setSelectedPath}
      />
    </div>
  );
}

export default Desktop;
