export type AppInfo = { 
    fileExtension: string;
    logo: string;
    background?: string;
    width?: string;
    height?: string;
}

export type NodeMetadata = { 
    appInfo: AppInfo; 
    content?: React.ReactElement; 
    title?: string  
};

export type TreeNode = {
    metadata?: NodeMetadata;
    path: string;
    filename: string;
    children: Record<string, TreeNode>;
};

export type FolderProps = {
    node: TreeNode,
    openWindows: React.ReactElement[],
    handleAppClick: (key: string) => void,
}

export type AppProps = {
    node: TreeNode,
    handleAppClick: () => void
}

export type windowProps = {
    node: TreeNode,
    handleWindowClose: () => void,
    handleWindowClick: () => void,
    handleAppClick: (key: string) => void,
    zOrder: number,
}