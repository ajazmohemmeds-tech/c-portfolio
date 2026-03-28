import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import ExperienceCinematic from './components/ExperienceCinematic';
import Projects from './components/Projects';
import Contact from './components/Contact';
import History from './components/History';
import Education from './components/Education';
import TechStack from './components/TechStack';
import SocialSidebar from './components/SocialSidebar';
import KaizenAssistant from './components/KaizenAssistant';
import Research from './components/Research';
import Loader from './components/Loader';
import './index.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CertificatePage from './CertificatePage';
import GalleryPage from './GalleryPage';

const MainContent = ({ loading }) => {
  return (
    <>
      <Loader loading={loading} />
      <Header />
      <SocialSidebar />
      {!loading && <KaizenAssistant />}
      <main>
        <Hero />
        <About />
        <Education />
        <WhatIDo />
        <Research />
        <ExperienceCinematic />
        <History />
        <TechStack />
        <Projects />
      </main>
      <Contact />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Handle Lenis and other window-level effects
  return (
    <Router basename="/c-portfolio">
      <AppInner loading={loading} setLoading={setLoading} />
    </Router>
  );
}

function AppInner({ loading, setLoading }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Scroll to top on route change
    lenis.scrollTo(0, { immediate: true });

    return () => lenis.destroy();
  }, [location.pathname]);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000);
    };

    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setLoading]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainContent loading={loading} />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
