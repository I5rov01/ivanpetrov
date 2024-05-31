// src/components/ProjectList.js

import React from 'react';
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
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Projects
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          details={project.details}
        />
      ))}
    </div>
  );
};

export default ProjectList;
