import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <img src={`${import.meta.env.BASE_URL}images/main.PNG`} alt="Background" />
      </div>
      

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-intro">
            Hi, I'm Ajaz. AI & Machine Learning Engineer building intelligent systems.
          </p>
          
          <h1 className="hero-headline">
            <span className="bold">Artificial Intelligence</span>
            <span className="outline">& Machine Learning</span>
          </h1>
          
          <div className="hero-btns-wrapper">
             <div className="hero-btns">
                <button className="btn btn-primary" onClick={scrollToContact}>
                  You need a AI engineer
                </button>
                <button className="btn btn-secondary" onClick={scrollToContact}>
                  Let's Connect
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
