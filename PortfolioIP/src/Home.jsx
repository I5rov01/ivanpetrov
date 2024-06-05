import React, { useEffect } from 'react';
import './Home.css';
import HomeImg from './assets/HomeImg.png';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animated-text, .HomeImg');
      const viewportHeight = window.innerHeight;

      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount to check visibility initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleContactClick = () => {
    const section = document.getElementById('contacts');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2 className="animated-text"><span>Hey,</span> Welcome</h2>
        <h1 className="animated-text">I am <span>Ivan Petrov</span></h1>
        <p className="animated-text">I am a Media Design student at Fontys. Currently I am in semester 6, and I will be doing a minor next year.</p>
        <button className="contact-button animated-text" onClick={handleContactClick}>Contact</button>
      </div>
      <div className="home-image">
        <img className="HomeImg" src={HomeImg} alt="Ivan P" />
      </div>
    </section>
  );
};

export default Home;
