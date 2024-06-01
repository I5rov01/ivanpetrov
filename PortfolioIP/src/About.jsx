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
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
        <p className="animated-text">
          Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
