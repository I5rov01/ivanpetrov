// src/App.jsx

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Services from './Services';
import ProjectList from './ProjectList'; 
import Experience from './Experience';
import Contacts from './Contacts';
import Footer from './Footer';
import Loading from './Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navigation />
          <Home />
          <About />
          <Services />
          <ProjectList />
          <Experience />
          <Contacts />
          <Footer />
        </>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
