import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faLaptopCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div id="service" className="services">
      <div className="service-section">
        <h1>My <span>Service</span></h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
      </div>
      <div className="service-cards">
        <ServiceCard 
          icon={faBullhorn} 
          title="Digital Marketing" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        />
        <ServiceCard 
          icon={faLaptopCode} 
          title="Web Development" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        />
        <ServiceCard 
          icon={faPaintBrush} 
          title="Creative Graphic Design" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        />
      </div>
    </div>
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
