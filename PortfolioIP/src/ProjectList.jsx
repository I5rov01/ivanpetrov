import React, { useState } from 'react';
import Projects from './Projects';
import './ProjectList.css';
import MaxSpeedAuto from './assets/MaxSpeedAuto.png';
import RebornSkinStore from './assets/RebornSkinStore.png';

const projects = [
  {
    title: 'Reborn Skin Store',
    description: 'E-commerce site for skin care products',
    image: RebornSkinStore,
    details: 'More information about Reborn Skin Store project...'
  },
  {
    title: 'Max Speed Auto',
    description: 'Auto service and repair center',
    image: MaxSpeedAuto,
    details: 'More information about Max Speed Auto project...'
  },
  // Add more projects here
];

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="services">
      <div className="service-section">
        <h1>My <span>Projects</span></h1>
        <p>Here are some of the projects I have worked on recently.</p>
      </div>
      <div className="service-cards">
        {projects.map((project, index) => (
          <div className="service-card" key={index} onClick={() => handleProjectClick(project)}>
            <img className="project-image" src={project.image} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
