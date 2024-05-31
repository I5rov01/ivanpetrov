// src/components/Navigation.jsx
import React from 'react';
import './Navigation.css';
import Logo from "./assets/Logo.png";

const Navigation = () => {
  return (
    <nav className="navigation">
      <img className="logo" src={Logo} alt="Logo" />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;