import React, { useState, useEffect } from 'react';
import './Navigation.css';
import Logo from './assets/Logo.png';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  console.log(activeSection)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const navbarHeight = 20; // Adjust as needed

        if (
          scrollPosition >= sectionTop - navbarHeight &&
          scrollPosition < sectionTop + sectionHeight - viewportHeight / 2
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount to check visibility initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <nav className={`navigation ${activeSection === 'service' ? 'service-active' : ''}`}>
      <img className="logo" src={Logo} alt="Logo" />
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => setActiveSection('home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setActiveSection('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#service"
            onClick={() => setActiveSection('service')}
            className={activeSection === 'service' ? 'active' : ''}
          >
            Service
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setActiveSection('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={() => setActiveSection('experience')}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            onClick={() => setActiveSection('contacts')}
            className={activeSection === 'contacts' ? 'active' : ''}
          >
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
