export type AppInfo = { 
    kind: 'file';
    fileExtension: string;
    logo: string;
    width?: string;
    height?: string;
    content: React.ReactElement;
} | { 
    kind: 'folder';
    background: string;
    logo: string;
    width?: string;
    height?: string;
}

export type NodeRegistry = Record<string, ValidTreeNode>;

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
    children: NodeRegistry;
};

export type FolderProps = {
    node: ValidTreeNode,
    openWindows: React.ReactElement[],
    handleAppClick: (key: string) => void,
}

export type AppProps = {
    node: ValidTreeNode,
    handleAppClick: () => void
}

export type windowProps = {
    node: ValidTreeNode,
    handleWindowClose: () => void,
    handleWindowClick: () => void,
    handleAppClick: (key: string) => void,
    zOrder: number,
}