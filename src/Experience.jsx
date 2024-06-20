import React from 'react';
import './Experience.css';

const Experiences = () => {
  return (
    <section id="experience">
    <div  className="services">
      <div className="service-section">
        <h1>My <span>Experiences</span></h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <p className="date">Sept-2023 - Jan-2024</p>
          <h2 className="title">UX/UI Internship</h2>
          <p className="company">Simptel</p>
          <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className="service-card">
          <p className="date">Nov-2023 - Present</p>
          <h2 className="title">SEO</h2>
          <p className="company">Reborn Skin Institute</p>
          <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className="service-card">
          <p className="date">Nov-2023 - Present</p>
          <h2 className="title">Web Creator</h2>
          <p className="company">Reborn Skin Institute</p>
          <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Experiences;
