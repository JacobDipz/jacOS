import styles from './Desktop.module.css'
import resume from '../../assets/resume.png'
import folder from '../../assets/folder.png'
import Window from '../Window/Window.tsx'
import AppIcon from '../App/App.tsx'

function Desktop() {
  const myApps = apps.map((app, index) => (
    <AppIcon src={app.src} title={app.title} key={index} />
  ))
  return (
  <div className={styles.desktopMain}>
    {myApps}
    <Window title='aboutme.txt' content={'Hello, I am Jacob Dipasupil. I\'m a first year at Harvard studying Applied Mathematics!'} />
  </div>);
  
}

const apps = [
  { src: folder, title: 'projects' },
  { src: resume, title: 'aboutme.txt' },
]

export default Desktop
