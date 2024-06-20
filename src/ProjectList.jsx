import React, { useState, useRef, useEffect } from 'react';
import Projects from './Projects';
import './ProjectList.css';
import MaxSpeedAuto from './assets/MaxSpeedAuto.png';
import RebornSkinStore from './assets/RebornSkinStore.png';
import tier from './assets/Winter-tier.png'; // Import the new project image
import Dashboard from './assets/Dashboard.png'; 

import Slider from 'react-slick'; // Import React Slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles

const projects = [
  {
    title: 'Reborn Skin Store',
    description: 'E-commerce site for skin care products',
    image: RebornSkinStore,
    details: 'More information about Reborn Skin Store project...',
    category: 'personal'
  },
  {
    title: 'Max Speed Auto',
    description: 'Auto service and repair center',
    image: MaxSpeedAuto,
    details: 'More information about Max Speed Auto project...',
    category: 'personal'
  },
  {
    title: 'Referral Program',
    description: 'A project developed during university studies',
    image: tier,
    details: 'More information about the University Project...',
    category: 'university'
  },
  {
    title: 'Dashboard',
    description: 'Managing users data',
    image: Dashboard,
    details: 'More information about the New Project...',
    category: 'university'
  },
  
];

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const closePopupOnClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setSelectedProject(null);
      }
    };

    document.addEventListener('mousedown', closePopupOnClickOutside);

    return () => {
      document.removeEventListener('mousedown', closePopupOnClickOutside);
    };
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory ? projects.filter(project => project.category === selectedCategory) : projects;

  // Settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section id="projects">
    <div id="projects" className="projects"> {/* Changed class name from 'services' to 'projects' */}
      <div className="service-section">
        <h1>My <span>Projects</span></h1>
        <p>Here are some of the projects I have worked on recently.</p>
        <div className="category-buttons">
          <button onClick={() => handleCategoryChange(null)}>All</button>
          <button onClick={() => handleCategoryChange('personal')}>Personal</button>
          <button onClick={() => handleCategoryChange('university')}>University</button>
        </div>
      </div>
      <Slider {...sliderSettings}>
        {filteredProjects.map((project, index) => (
          <div key={index}>
            <Projects {...project} onClick={handleProjectClick} />
          </div>
        ))}
      </Slider>
      {selectedProject && (
        <div className="popup">
          <div className="popup-content" ref={popupRef}>
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="project-image-popup" />
            <p>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default ProjectList;
