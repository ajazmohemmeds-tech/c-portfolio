import React, { useEffect, useRef } from 'react';
import './WhatIDo.css';

const services = [
  {
    title: "AI DEVELOPMENT",
    secret: "“Building things that work… unlike most tutorials”"
  },
  {
    title: "MACHINE LEARNING",
    secret: "“Training models better than I train myself”"
  },
  {
    title: "GENERATIVE AI",
    secret: "“Convincing people I worked harder than I actually did”"
  },
  {
    title: "COMPUTER VISION",
    secret: "“Making machines see… while humans still miss the obvious”"
  },
  {
    title: "AUTOMATION",
    secret: "“If I do it twice, it’s already a bug”"
  }
];

const WhatIDo = () => {
  const sectionRef = useRef(null);
  const [activeItem, setActiveItem] = React.useState({ top: 0, height: 0, opacity: 0 });

  const parallaxRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach(el => observer.observe(el));

    // Cache parallax elements for high-performance scroll
    parallaxRefs.current = Array.from(sectionRef.current?.querySelectorAll('.parallax-text') || []);

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const offset = (scrolled - sectionTop) * 0.1;
      
      parallaxRefs.current.forEach(el => {
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnterRow = (e) => {
    const row = e.currentTarget;
    setActiveItem({
      top: row.offsetTop,
      height: row.offsetHeight,
      opacity: 1
    });
  };

  const handleMouseLeaveSection = () => {
    setActiveItem(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <section id="what-i-do" 
             ref={sectionRef} 
             className="what-i-do-premium"
             onMouseLeave={handleMouseLeaveSection}>
      <div className="premium-header">
        <span className="section-label reveal">WHAT I DO</span>
      </div>
      
      <div className="premium-services">
        {services.map((service, sIndex) => (
          <div key={sIndex} 
               className="service-line-item"
               onMouseEnter={handleMouseEnterRow}>
            <div className="grid-line reveal"></div>
            <div className="word-content reveal">
              <div className="word-wrapper">
                <div className="title-container">
                  <h2 className="premium-word parallax-text">{service.title}</h2>
                </div>
                <p className="premium-secret">{service.secret}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Shared Flowing Bar */}
        <div className="flowing-bar" 
             style={{ 
               transform: `translateY(${activeItem.top}px)`, 
               height: `${activeItem.height}px`,
               opacity: activeItem.opacity 
             }}></div>
        {/* Final closing line */}
        <div className="grid-line reveal"></div>
      </div>
    </section>
  );
};

export default WhatIDo;
