import type { TreeNode } from "./types"

export function renderFilename(node: TreeNode): string {
    return [node.filename, node.metadata!.appInfo.fileExtension].filter(Boolean).join('.');
}