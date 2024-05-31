import React, { useState, useEffect } from 'react';
import './Navigation.css';
import Logo from './assets/Logo.png';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const navbarHeight = 50; // Adjust as needed

        if (scrollPosition >= sectionTop - navbarHeight && scrollPosition < sectionTop + sectionHeight - viewportHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const navbarHeight = 50; // Adjust as needed
    const scrollTo = sectionTop - (viewportHeight - sectionHeight) / 2 - navbarHeight;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navigation">
      <img className="logo" src={Logo} alt="Logo" />
      <ul>
        <li><a href="#home" onClick={() => handleClick('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
        <li><a href="#about" onClick={() => handleClick('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#service" onClick={() => handleClick('service')} className={activeSection === 'service' ? 'active' : ''}>Service</a></li>
        <li><a href="#projects" onClick={() => handleClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
        <li><a href="#experience" onClick={() => handleClick('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
        <li><a href="#contacts" onClick={() => handleClick('contacts')} className={activeSection === 'contacts' ? 'active' : ''}>Contacts</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
