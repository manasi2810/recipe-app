import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/classy-nav.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/nice-select.min.css'
import './assets/css/animate.css'
import './assets/css/custom-icon.css'
import './assets/style.css'

import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)