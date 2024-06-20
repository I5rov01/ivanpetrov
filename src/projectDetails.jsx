// ProjectDetails.js
import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details-container">
      <div className="project-details">
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
        <p>{project.details}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
