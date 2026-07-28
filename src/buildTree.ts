import type { NodeMetadata } from './types';
import type { TreeNode } from './types';

function buildTree(): TreeNode {
    const nodes = import.meta.glob<{ default: NodeMetadata }>('./apps/**/*.metadata.ts', { eager: true });
    const root: TreeNode =  { children: {}, path: '' };

    for (const [path, module] of Object.entries(nodes)) {
        const metadata = module.default;
        const segments = routeFromPath(path);

        let cursor = root;
        // Traverse the segments and create nodes (without metadata) as needed
        for (const segment of segments) {
            cursor = findOrCreateChild(cursor, segment);
        }
        cursor.metadata = metadata; // Assign the metadata to the final node

    }

    validateTree(root)

    return root;
}

function validateTree(node: TreeNode): void {
    if (!node.metadata) {
        if (!node.path) {
            throw new Error(`Root node must have metadata.`);
        } else {
            throw new Error(`Node ${node.path} is missing metadata.`);
        }
    }

    for (const childNode of Object.values(node.children)) {
        validateTree(childNode);
    }
}

function findOrCreateChild(cursor: TreeNode, segment: string): TreeNode {
    if (!cursor.children[segment]) {
        // Create a new node if it doesn't exist
        cursor.children[segment] = { 
            children: {}, 
            path: [cursor.path, segment].filter(Boolean).join('/')
        }; 
    }
    return cursor.children[segment];
}

function routeFromPath(path: string): string[] {
    path = path.replace(/^\.\/apps\//, ''); // Remove the leading './apps/' from the path
    return path.split('/').slice(0,-1); // Remove the last segment (the filename);
}

export default buildTree;
