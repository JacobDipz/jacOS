export type AppInfo = 
{ // Capitalized & inline export
    fileExtension: string;
    defaultLogo: string;
    customLogo?: string;
    customBackground?: string;
}


export type NodeMetadata = { 
    appInfo: AppInfo; 
    content?: React.ComponentType; 
    title?: string  
};

export type TreeNode = {
    metadata?: NodeMetadata;
    path: string;
    filename: string;
    children: Record<string, TreeNode>;
};