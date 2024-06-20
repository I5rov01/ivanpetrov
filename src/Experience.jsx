import React from 'react';
import './Experience.css';

const Experiences = () => {
  return (
    <section id="experience">
    <div  className="services">
    <div className="service-section">
        <h1>My <span>Experiences</span></h1>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <p className="date">Sept-2023 - Jan-2024</p>
          <h2 className="title">UX/UI Internship</h2>
          <p className="company">Simptel</p>
          <p className="description"><ul><li>Figma</li><li>Tailwind CSS</li><li>SCRUM</li></ul> </p>
        </div>
        <div className="service-card">
          <p className="date">Nov-2023 - Present</p>
          <h2 className="title">SEO</h2>
          <p className="company">Reborn Skin Institute</p>
          <p className="description"><ul><li>Google ADS</li><li>Instagram Ads</li><li>Tik Tok Ads</li></ul> </p>
        </div>
        <div className="service-card">
          <p className="date">Nov-2023 - Present</p>
          <h2 className="title">Web Creator</h2>
          <p className="company">Reborn Skin Institute</p>
          <p className="description"><ul><li>Shopify</li><li>CSS</li><li>Canva</li></ul> </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Experiences;
