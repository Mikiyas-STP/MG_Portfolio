import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="starfield">
      <div className="stars-layer layer-3"></div>
      <div className="stars-layer layer-2"></div>
      <div className="stars-layer layer-1"></div>
    </div>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)