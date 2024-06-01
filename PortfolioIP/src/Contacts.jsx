import React from 'react';
import './Contacts.css';

const Contacts = () => {
  const linkedinMessageUrl = 'https://www.linkedin.com/messaging/compose/?recipient=ivan-petrov-8b0831256';
  const instagramMessageUrl = 'https://www.instagram.com/direct/t/ivan._.5rov';
  const emailUrl = 'mailto:ivan.5rov01@gmail.com';

  return (
    <div id="contacts" className="contacts">
      <h2>Contact Me</h2>
      <div className="contact-list">
        <a href={linkedinMessageUrl} target="_blank" rel="noopener noreferrer" className="contact-card">
          <i className="fab fa-linkedin contact-icon"></i>
          <span className="contact-text">LinkedIn</span>
        </a>
        <a href={instagramMessageUrl} target="_blank" rel="noopener noreferrer" className="contact-card">
          <i className="fab fa-instagram contact-icon"></i>
          <span className="contact-text">Instagram</span>
        </a>
        <a href={emailUrl} className="contact-card">
          <i className="fas fa-envelope contact-icon"></i>
          <span className="contact-text">Email</span>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
