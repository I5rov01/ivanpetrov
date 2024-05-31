// src/Navigation.jsx
import React, { useState, useEffect } from 'react';
import './Navigation.css';
import Logo from './assets/Logo.png';

const Navigation = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowNav(false);
    } else {
      // Scrolling up
      setShowNav(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navigation ${showNav ? 'visible' : 'hidden'}`}>
      <img className="logo" src={Logo} alt="Logo" />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
