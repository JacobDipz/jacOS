import styles from './App.module.css'
import type { ValidTreeNode } from '../../tree/types.ts';
import { renderFilename } from '../renderFilename.ts';
import { TOUCH_SCREEN, useMediaQuery } from '../useMediaQuery.ts';

type AppProps = {
    node: ValidTreeNode,
    selected: boolean,
    handleOpen: () => void,
    handleSelect: () => void,
}

function App({ node, selected, handleOpen, handleSelect }: AppProps) {
  const metadata = node.metadata;
  const isTouchScreen = useMediaQuery(TOUCH_SCREEN);

  const logo = metadata.appInfo.logo;
  const title = renderFilename(node);

  return (
    <button
      type="button"
      className={selected ? `${styles.app} ${styles.selected}` : styles.app}
      // With a mouse, click selects and double-click opens; on touch screens a tap opens
      onClick={isTouchScreen ? handleOpen : handleSelect}
      onDoubleClick={handleOpen}
      onFocus={handleSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // otherwise Enter also fires onClick
          handleOpen();
        }
      }}
    >
        <div className={styles.appIcon}>
          {/* alt is empty because the label below already names the icon */}
          <img src={logo} alt="" draggable={false} />
        </div>
        <div className={styles.appTitle}>
            {title}
        </div>
    </button>
  );
}

export default App;
