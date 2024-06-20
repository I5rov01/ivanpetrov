import React from 'react';
import './About.css';
import AboutImg from './assets/AboutImg.png';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <img className="about-img" src={AboutImg} alt="Ivan" />
      </div>
      <div className="about-content">
        <h2 className="animated-text">About <span>Me</span></h2>
        <p className="animated-text">
        I am from Kazanlak, Bulgaria. My hometown is situated at the central part of the country. It is also known as the Rose Valley of Bulgaria. It has unique and beautiful nature and is a town full of history.        </p>
        <p className="animated-text">
        Currently, I am 3rd year ICT & Media Design student. After my UX/UI internship I decided to continue with Advanced Media Design, and in the same time I have a Freelance job as a SEO and webiste and content creator.        </p>
      </div>
    </section>
  );
};

export default AboutMe;
