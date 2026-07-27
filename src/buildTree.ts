import type { NodeMetadata } from './types';
const nodes = import.meta.glob<{default: NodeMetadata}>('./apps/**/*.metadata.ts', { eager: true });

type TreeNode = {
    metadata?: NodeMetadata;
    children: Record<string, TreeNode>;
}

function buildTree(nodes: Record<string, { default: NodeMetadata }>): TreeNode {
    const root: TreeNode = { children: {} };

    for (const [path, module] of Object.entries(nodes)) {
        const metadata = module.default;
        const segments = routeFromPath(path);

        let cursor = root;
        for (const segment of segments) {
            cursor = findOrCreateChild(cursor, segment);
        }
        cursor.metadata = metadata;

    }

    return root;
}

function findOrCreateChild(node: TreeNode, segment: string): TreeNode {
    if (!node.children[segment]) {
        node.children[segment] = { children: {} };
    }
    return node.children[segment];
}

function routeFromPath(path: string): string[] {
    path = path.replace(/^\.\/apps\//, ''); // Remove the leading './apps/' from the path
    return path.split('/').slice(0,-1); // Remove the last segment (the filename);
}

export default buildTree(nodes);
