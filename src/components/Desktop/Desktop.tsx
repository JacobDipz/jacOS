import buildTree from '../../buildTree.ts'
import Window from '../Window/Window.tsx';
import styles from './Desktop.module.css';
import Folder from '../Folder/Folder.tsx';
import { useState } from 'react';

function Desktop() {
  const [root, pathToNode] = buildTree();
  const [openWindows, setOpenWindows] = useState(new Array<string>()) 

  function handleOpen(path: string) {
    setOpenWindows([...openWindows, path])
  }

  function handleClose(path: string) {
    setOpenWindows(openWindows.filter(key => path !== key ));
  }

  return (
    <div className={styles.desktop}>
      <Folder node={root} handleAppClick={handleOpen}/>
      {openWindows.map((path) => (
          <Window 
            node={pathToNode[path]} 
            key={path} 
            handleWindowClose={ () => handleClose(path)}
            handleAppClick={ handleOpen }
          />
      ))};
    </div>
  );
}

export default Desktop;
