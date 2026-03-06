import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import KaizenAssistant from './components/KaizenAssistant';
import './index.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SocialSidebar />
      <KaizenAssistant />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Volunteering />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}

export default App;
