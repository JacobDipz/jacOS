export type AppInfo = { 
    kind: 'file';
    fileExtension: string;
    logo: string;
    width?: string;
    height?: string;
    content: React.ReactElement;
} | { 
    kind: 'folder' | 'desktop';
    background: string;
    logo: string;
    width?: string;
    height?: string;
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