export type AppInfo = { 
    kind: 'file';
    fileExtension: string;
    logo: string;
    width?: number; // in art pixels
    height?: number; // in art pixels
    content: React.ReactElement;
} | { 
    kind: 'folder' | 'desktop';
    background?: string;
    tileBackground?: boolean; // repeat the background as a pattern instead of fitting one copy
    logo: string;
    width?: number; // in art pixels
    height?: number; // in art pixels
}

export type NodeMetadata = { 
    appInfo: AppInfo;  
    title?: string  
};

export type TreeNode = {
    metadata?: NodeMetadata;
    path: string;
    filename: string;
    children: Record<string, TreeNode>;
};

export type ValidTreeNode = {
    metadata: NodeMetadata;
    path: string;
    filename: string;
    children: Record<string, ValidTreeNode>;
};