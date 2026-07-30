import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Desktop from './components/Desktop/Desktop.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<h1>Something went wrong loading the desktop.</h1>}>
      <Desktop />
    </ErrorBoundary>
  </StrictMode>,
)
