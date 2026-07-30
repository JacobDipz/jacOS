import buildTree from '../../buildTree.ts'
import Folder from '../Folder/Folder.tsx';
import Window from '../Window/Window.tsx';
import type { TreeNode } from '../../types.ts';

function Desktop() {
  const root = buildTree();

  const windows: React.ReactElement[] = [];
    
  renderWindows(root, windows);
    
  return (
    <>
      <Folder node={root} windows={windows}/>
    </>
  );
}

function renderWindows(node: TreeNode, windows: React.ReactElement[]) {
    for (const childNode of Object.values(node.children)) {
      renderWindows(childNode, windows);
    }
    if (node.metadata && node.metadata.type !== "desktop") {
      windows.push(<Window node={node} key={node.path}/>);
    }
  }

export default Desktop;