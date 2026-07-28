type NodeMetadata = 
| { type: 'txt' ; filename: string; content: React.ComponentType; title?: string  }
| { type: 'folder' ; filename: string; title?: string  }
| { type: 'desktop' ; wallpaper?: string  }

export type { NodeMetadata };

type TreeNode = {
    metadata?: NodeMetadata;
    path: string;
    children: Record<string, TreeNode>;
}

export type { TreeNode };