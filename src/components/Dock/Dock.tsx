import type { ValidTreeNode } from '../../tree/types.ts';
import { dockLinks } from '../../apps/dock.config.ts';
import { linkTargetProps } from '../openLink.ts';
import { renderFilename } from '../renderFilename.ts';
import styles from './Dock.module.css';

// The hover image comes first so CSS can hide the normal one after it while hovered
function DockIcon({ logo, hoverLogo }: { logo: string, hoverLogo?: string }) {
    return (
        <>
            {hoverLogo && <img className={styles.hoverIcon} src={hoverLogo} alt="" draggable={false} />}
            <img className={styles.icon} src={logo} alt="" draggable={false} />
        </>
    );
}

type DockProps = {
    openWindows: ValidTreeNode[],
    topWindowPath: string | undefined,
    trash: ValidTreeNode | undefined,
    handleOpen: (path: string) => void,
}

function Dock({ openWindows, topWindowPath, trash, handleOpen }: DockProps) {
    // The trash has its own spot on the right, so it isn't listed with the other open windows
    const isTrashOpen = openWindows.some(node => node.path === trash?.path);
    const otherOpenWindows = openWindows.filter(node => node.path !== trash?.path);

    return (
        <nav className={styles.dock} aria-label="Dock">
            <div className={styles.bar}>
                {dockLinks.map(link => (
                    <a key={link.name} className={styles.item} href={link.url} aria-label={link.name} {...linkTargetProps(link.url)}>
                        <DockIcon logo={link.logo} hoverLogo={link.hoverLogo} />
                        <span className={styles.label} aria-hidden="true">{link.name}</span>
                    </a>
                ))}

                {otherOpenWindows.length > 0 && <div className={styles.divider} />}
                {otherOpenWindows.map(node => {
                    const title = node.metadata.title || renderFilename(node);
                    return (
                        <button
                            key={node.path}
                            type="button"
                            className={styles.item}
                            onClick={() => handleOpen(node.path)}
                            aria-label={title}
                            aria-current={node.path === topWindowPath ? 'true' : undefined}
                        >
                            <DockIcon logo={node.metadata.appInfo.logo} hoverLogo={node.metadata.appInfo.hoverLogo} />
                            <span className={styles.label} aria-hidden="true">{title}</span>
                            <span className={styles.openDot} />
                        </button>
                    );
                })}

                {trash && (
                    <>
                        <div className={styles.divider} />
                        <button
                            type="button"
                            className={styles.item}
                            onClick={() => handleOpen(trash.path)}
                            aria-label="Trash"
                            aria-current={trash.path === topWindowPath ? 'true' : undefined}
                        >
                            <DockIcon logo={trash.metadata.appInfo.logo} hoverLogo={trash.metadata.appInfo.hoverLogo} />
                            <span className={styles.label} aria-hidden="true">Trash</span>
                            {isTrashOpen && <span className={styles.openDot} />}
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Dock;
