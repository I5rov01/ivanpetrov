// Footer.jsx

import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="icon" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
