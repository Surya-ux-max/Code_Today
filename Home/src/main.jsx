import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
// import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar />
    <Hero />
    <Features />
  </StrictMode>,
)
