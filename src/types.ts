type NodeMetadata = 
| { filename: string; title: string; type: 'txt' ; content: React.ComponentType }
| { filename: string; title: string; type: 'folder' }

export type { NodeMetadata };