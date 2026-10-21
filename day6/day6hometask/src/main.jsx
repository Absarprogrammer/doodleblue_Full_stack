import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'

import Sidebar from './pages/sidebar.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Skill from './pages/skills.jsx'
import Project from './pages/projects.jsx'
import Internship from './pages/internship.jsx'
import Education from './pages/education.jsx'
import Certificate from './pages/certificate.jsx'
import Contact from './pages/contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className='layout'>
    <Sidebar/>
    <div className='page-content'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  </StrictMode>,
)