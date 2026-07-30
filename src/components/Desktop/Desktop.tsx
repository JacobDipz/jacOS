import buildTree from '../../buildTree.ts'
import Window from '../Window/Window.tsx';
import type { TreeNode } from '../../types.ts';
import styles from './Desktop.module.css';
import Folder from '../Folder/Folder.tsx';

function Desktop() {
  const root = buildTree();

  const windows: React.ReactElement[] = [];

  for (const childNode of Object.values(root.children)) {
    renderWindows(childNode, windows)
  }

  return (
    <div className={styles.desktop}>
      <Folder node={root}/>
      {windows}
    </div>
  );
}

function renderWindows(node: TreeNode, windows: React.ReactElement[]) {
    for (const childNode of Object.values(node.children)) {
      renderWindows(childNode, windows);
    }
    windows.push(<Window node={node} key={node.path}/>);
  }

export default Desktop;
