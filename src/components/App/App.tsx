import styles from './App.module.css'
import type { ValidTreeNode } from '../../tree/types.ts';
import { renderFilename } from '../renderFilename.ts';

type AppProps = {
    node: ValidTreeNode,
    handleAppClick: () => void
}

function App({ node, handleAppClick }: AppProps) {
  const metadata = node.metadata;

  const logo = metadata.appInfo.logo;
  const title = renderFilename(node);
  
  return (
    <div className={styles.app} onClick={handleAppClick}>
        <div className={styles.appIcon}>
          <img src={logo} alt={title}/>
        </div>
        <div className={styles.appTitle}>
            {title}
        </div>
    </div>
  );
}

export default App;
