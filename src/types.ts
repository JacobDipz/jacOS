export type AppInfo = 
{ // Capitalized & inline export
    fileExtension: string;
    defaultLogo: string;
    customLogo?: string;
    customBackground?: string;
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
    handleAppClick: (key: string) => void,
}

export type AppProps = {
    node: TreeNode,
    handleAppClick: () => void
}

export type windowProps = {
    node: TreeNode,
    handleWindowClose: () => void,
    handleAppClick: (key: string) => void
}