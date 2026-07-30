import styles from './App.module.css'
import type { TreeNode } from '../../types.ts';
import { renderFilename } from '../../nameHelper.ts';

function App({ node }: { node: TreeNode }) {
  const metadata = node.metadata;

  const logo = metadata!.appInfo.customLogo || metadata!.appInfo.defaultLogo;
  const title = renderFilename(node);
  
  return (
    <div className={styles.app}>
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
