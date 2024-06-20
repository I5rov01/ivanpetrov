import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faLaptopCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section id="services">
    <div id="service" className="services">
      <div className="service-section">
        <h1>My <span>Service</span></h1>
      </div>
      <div className="service-cards">
        <ServiceCard 
          icon={faBullhorn} 
          title="Digital Marketing" 
          description="Google ADS, Instagram, Tik Tok"
        />
        <ServiceCard 
          icon={faLaptopCode} 
          title="Web Development" 
          description="Shopify, HTML, CSS, JS, React, Vite, Tailwind CSS"
        />
        <ServiceCard 
          icon={faPaintBrush} 
          title="Design" 
          description="Figma, Adobe XD, CMD method pack, SCRUM, Double Diamond"
        />
      </div>
    </div>
    </section>
  );
}

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="icon"><FontAwesomeIcon icon={icon} /></div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Services;
