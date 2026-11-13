import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// O CSS global precisa vir antes dos componentes para os CSS Modules sobrescreverem os utilitários.
import './styles/global.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
