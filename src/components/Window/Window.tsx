import styles from './Window.module.css'

function Window({ title, content }: {title: string; content: string}) {
  return (
    <div className={styles.window}>
      <div className={styles.windowHeader}>
        <span className={styles.windowTitle}>{title}</span>
        <button className={styles.windowCloseButton}>X</button>
      </div>
      <div className={styles.windowContent}>
        {content}
        </div>
    </div>
  );
}

export default Window;