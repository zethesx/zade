import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/tokens.css'
import './styles/global.css'

const standaloneProjectRoutes = new Set([
  '/projects/dionysia',
  '/projects/lichtwerft',
  '/projects/aurelle',
])

if (standaloneProjectRoutes.has(window.location.pathname)) {
  window.location.replace(`${window.location.pathname}/${window.location.search}${window.location.hash}`)
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
