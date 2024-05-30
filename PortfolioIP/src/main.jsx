import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navigation from './Navigation.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Projects from './Projects.jsx'
import Experience from './Experience.jsx'
import Contacts from './Contacts.jsx'
import Footer from './Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Home />
    <About />
    <Services />
    <Projects />
    <Experience />
    <Contacts />
    <Footer />
  </React.StrictMode>,
)
