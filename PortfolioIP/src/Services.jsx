import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <div className="service-section">
        <h1>My <span>Service</span></h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
      </div>
      <div className="service-cards">
        <ServiceCard 
          icon="📣" 
          title="Digital Marketing" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        />
        <ServiceCard 
          icon="💻" 
          title="Web Development" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        />
        <ServiceCard 
          icon="🎨" 
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
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Services;
