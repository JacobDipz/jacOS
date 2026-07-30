import styles from './App.module.css'
import type { TreeNode } from '../../types.ts';
import * as Constants from '../../constants.ts';
import folderLogo from '../../assets/logos/FolderLogo.png';
import txtLogo from '../../assets/logos/TxtLogo.png';
import unknownLogo from '../../assets/logos/TxtLogo.png'

function App({ node }: { node: TreeNode }) {
  const metadata = node.metadata;


  let logo = unknownLogo;
  let title = Constants.UNKNOWN_TITLE;

  if (metadata && metadata.type !== "desktop") {
    const type = metadata.type;
    title = metadata.title || (metadata.type === "folder" ? metadata.filename : `${metadata.filename}.${metadata.type}`);
    if (type === "folder") {
      logo = folderLogo;
    } else if (type === "txt") {
      logo = txtLogo;
    }
  }
  
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
