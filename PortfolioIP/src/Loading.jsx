// src/Loading.jsx
import React, { useEffect, useState } from 'react';
import './Loading.css';
import Logo from './assets/Logo.png';

const Loading = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 2000); // Start fade-out after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fade) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Complete fade-out after 1 second
      return () => clearTimeout(timer);
    }
  }, [fade]);

  return (
    <div className={`loading-screen ${fade ? 'fade-out' : ''}`}>
      <img src={Logo} alt="Logo" className="loading-logo" />
    </div>
  );
};

export default Loading;
