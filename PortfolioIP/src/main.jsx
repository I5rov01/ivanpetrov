// src/App.jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Contacts from './Contacts.jsx';
import Footer from './Footer.jsx';
import Loading from './Loading.jsx';

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
          <Projects />
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
