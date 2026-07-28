import styles from './App.module.css'

function App({ src, title }: { src: string; title: string }) {
  return (
    <div className={styles.app}>
        <div className={styles.appIcon}>
            <img src={src} alt={title} />
        </div>
        <div className={styles.appTitle}>
            {title}
        </div>
    </div>
  );
}

export default App;
