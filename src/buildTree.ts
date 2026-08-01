import type { NodeMetadata, NodeRegistry, ValidTreeNode,  } from './types';
import type { TreeNode } from './types';

function buildTree(): [ValidTreeNode, NodeRegistry] {
    const nodes = import.meta.glob<{ default: NodeMetadata }>('./apps/**/*.metadata.ts', { eager: true });
    const pathToNode: Record<string, ValidTreeNode> = {}
    const root: TreeNode =  { children: {}, filename: 'desktop', path: '' };

    for (const [path, module] of Object.entries(nodes)) {
        const metadata = module.default;
        const segments = routeFromPath(path);

        let cursor = root;
        // Traverse the segments and create nodes (without metadata) as needed
        for (const segment of segments) {
            cursor = findOrCreateChild(cursor, segment);
        }
        if (cursor.metadata) {
            throw new Error(`Duplicate metadata found at ${cursor.path}`);
        }
        cursor.metadata = metadata; // Assign the metadata to the final node
    }


    return validateTree(root, pathToNode);
}

function validateTree(node: TreeNode, pathToNode: NodeRegistry): [ValidTreeNode, NodeRegistry] {
    if (!node.metadata) {
        if (!node.path) {
            throw new Error(`Root node must have metadata.`);
        } else {
            throw new Error(`Node ${node.path} is missing metadata.`);
        }
    }
    const validNode: ValidTreeNode = node as ValidTreeNode;
    pathToNode[node.path] = validNode;

    for (const [segment, childNode] of Object.entries(node.children)) {
        validNode.children[segment] = validateTree(childNode, pathToNode)[0];
    }

    return [validNode, pathToNode];
}
    
    

function findOrCreateChild(cursor: TreeNode, segment: string): TreeNode {
    if (!cursor.children[segment]) {
        // Create a new node if it doesn't exist
        const path = [cursor.path, segment].filter(Boolean).join('/');
        cursor.children[segment] = { 
            children: {}, 
            filename: segment,
            path: path,
        }; 
    }
    return cursor.children[segment];
}

function routeFromPath(path: string): string[] {
    path = path.replace(/^\.\/apps\//, ''); // Remove the leading './apps/' from the path
    return path.split('/').slice(0,-1); // Remove the last segment (the filename);
}

export default buildTree;
