// src/components/Home.jsx
import React from 'react';
import './Home.css';
import HomeImg from "./assets/HomeImg.png";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2>Hello, Welcome</h2>
        <h1>I am <span>Ivan Petrov</span></h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
        <button className="contact-button">Contact</button>
      </div>
      <div className="home-image">
      <img className="HomeImg" src={HomeImg} alt="Ivan P" />
      </div>
    </section>
  );
};

export default Home;
