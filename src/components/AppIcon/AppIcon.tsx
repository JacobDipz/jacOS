import styles from './AppIcon.module.css'

function AppIcon({ src, title }: { src: string; title: string }) {
  return (
    <div className={styles.appIcon}>
        <div className={styles.appLogo}>
            <img src={src} alt={title} />
        </div>
        <div className={styles.appTitle}>
            {title}
        </div>
    </div>
  );
}

export default AppIcon;
