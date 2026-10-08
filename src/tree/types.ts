export type AppInfo = { 
    kind: 'file';
    fileExtension: string;
    logo: string;
    hoverLogo?: string; // shown instead of logo while hovered in the dock
    width?: number; // in art pixels
    height?: number; // in art pixels
    content: React.ReactElement;
} | { 
    kind: 'folder' | 'desktop';
    background?: string;
    tileBackground?: boolean; // repeat the background as a pattern instead of fitting one copy
    logo: string;
    hoverLogo?: string; // shown instead of logo while hovered in the dock
    width?: number; // in art pixels
    height?: number; // in art pixels
} | {
    kind: 'link'; // opens a website (or email) in a new tab instead of a window
    url: string;
    logo: string;
    hoverLogo?: string; // shown instead of logo while hovered in the dock
}

export type NodeMetadata = { 
    appInfo: AppInfo;  
    title?: string;
    hidden?: boolean; // no icon in its folder; still opens from elsewhere (e.g. the trash, from the dock)
};

// A link shown in the dock
export type DockLink = {
    name: string;
    logo: string;
    hoverLogo?: string; // shown instead of logo while hovered in the dock
    url: string;
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