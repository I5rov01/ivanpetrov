// src/components/Home.jsx
import React from 'react';
import './Home.css';
import HomeImg from './assets/HomeImg.png';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2 className="animated-text">Hey, Welcome</h2>
        <h1 className="animated-text">I am <span>Ivan Petrov</span></h1>
        <p>I am a Media Design student at Fontys. </p>
        <button className="contact-button">Contact</button>
      </div>
      <div className="home-image">
        <img className="HomeImg" src={HomeImg} alt="Ivan P" />
      </div>
    </section>
  );
};

export default Home;
