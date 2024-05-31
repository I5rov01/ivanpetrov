// src/components/AboutMe.jsx
import React from 'react';
import './About.css';
import AboutImg from "./assets/AboutImg.png";


const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
      <img className="AboutImg" src={AboutImg} alt="Ivan" />
      </div>
      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
        <p>Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
      </div>
    </section>
  );
};

export default AboutMe;
