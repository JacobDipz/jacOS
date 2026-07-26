import './Desktop.css'
import resume from './assets/resume.png'
import folder from './assets/folder.png'

function Desktop() {
  const myApps = apps.map((app) => (
    App({ src: app.src, title: app.title })
  ))
  return (
  <div className="desktop-main">
    {myApps}
    {Window({ title: 'aboutme.txt', content: 'Hello, I am Jacob Dipasupil. I\'m a first year at Harvard studying Applied Mathematics!' })}
  </div>);
  
}

function Window({ title, content }: {title: string; content: string}) {
  return (
    <div className="window">
      <div className="window-header">
        <span className="window-title">{title}</span>
        <button className="window-close-button">X</button>
      </div>
      <div className="window-content">
        {content}
        </div>
    </div>
  );
}

function App({ src, title }: { src: string; title: string }) {
  return (
    <>
      <div className="app">
        <AppIcon src={src} title={title} />
        <AppTitle title={title} />
      </div>
    </>
  );
}

function AppIcon({ src, title }: { src: string; title: string }) {
  return ( 
    <div className="app-icon">
      <img src={src} alt={title} />
    </div>
  );
}

function AppTitle({ title }: { title: string }) {
  return (
    <div className="app-title">
      {title}
    </div>
  );
}

const apps = [
  { src: folder, title: 'projects' },
  { src: resume, title: 'aboutme.txt' },
]

export default Desktop
