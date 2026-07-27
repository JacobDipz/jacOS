import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Desktop from './components/Desktop/Desktop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Desktop />
  </StrictMode>,
)
