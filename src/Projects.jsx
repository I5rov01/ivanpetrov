import React, { useState } from 'react';
import './Projects.css';

const Projects = ({ title, description, image, details, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="project-card" onClick={() => onClick({ title, description, details })}>
      <div className="project-header">
        <img src={image} alt={title} className="project-image" />
        <div className="project-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {isExpanded && (
        <div className="project-details">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
