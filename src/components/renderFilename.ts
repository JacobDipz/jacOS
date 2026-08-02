import type { ValidTreeNode } from "../tree/types"

export function renderFilename(node: ValidTreeNode): string {
    const appInfo = node.metadata.appInfo;
    if (appInfo.kind === 'file') {
        return `${node.filename}.${appInfo.fileExtension}`;
    }
    return node.filename;
}