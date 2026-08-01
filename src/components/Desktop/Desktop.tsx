import buildTree from '../../buildTree.ts'
import Window from '../Window/Window.tsx';
import styles from './Desktop.module.css';
import Folder from '../Folder/Folder.tsx';
import { useState } from 'react';

function Desktop() {
  const [root, pathToNode] = buildTree();
  const [openWindowPaths, setOpenWindowPaths] = useState(new Array<string>());
  const [zOrder, setZOrder] = useState(new Array<string>());

  function handleOpen(path: string) {
    if (!openWindowPaths.includes(path)){
      setOpenWindowPaths([...openWindowPaths, path])
    }
    handleWindowClick(path);
  }

  function handleWindowClick(path: string) {
    if (zOrder.includes(path)){
      setZOrder([...zOrder.filter(key => key !== path), path]);
    }
    else {
      setZOrder([...zOrder, path]);
    }
  }

  function handleWindowClose(path: string) {
    setOpenWindowPaths(openWindowPaths.filter(key => key !== path ));
    setZOrder([...zOrder.filter(key => key !== path), path]);
  }

  const openWindows: React.ReactElement[] = [];
  for (const path of openWindowPaths) {
    openWindows.push(
      <Window 
        key={path} 
        node={pathToNode[path]} 
        handleWindowClose={ () => handleWindowClose(path)}
        handleAppClick={ handleOpen }
        handleWindowClick= { () => handleWindowClick(path)}
        zOrder={zOrder.indexOf(path)}
      />
    )
  }

  return (
    <div className={styles.desktop}>
      <Folder node={root} openWindows={openWindows} handleAppClick={handleOpen}/>
    </div>
  );
}

export default Desktop;
