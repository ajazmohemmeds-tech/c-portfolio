import React, { useEffect, useRef, useState } from 'react';
import './History.css';
import { experience } from '../data';

const History = () => {
  const sectionRef = useRef(null);
  const [activeItem, setActiveItem] = useState({ top: 0, height: 0, opacity: 0 });

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

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
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
    <section id="history" 
             ref={sectionRef} 
             className="history-section"
             onMouseLeave={handleMouseLeaveSection}>
      <div className="container">
        <div className="history-header">
          <span className="section-label reveal">HISTORY</span>
        </div>
        
        <div className="history-list">
          {experience.map((item, index) => {
            const year = item.period.split('/').pop().split(' ')[0];
            return (
              <div key={index} 
                   className="history-item"
                   onMouseEnter={handleMouseEnterRow}>
                <div className="grid-line reveal"></div>
                <div className="history-content reveal">
                  <div className="info-left">
                    <span className="h-year">{year}</span>
                    <span className="h-title-group">
                      <span className="h-title">{item.role}</span>
                      <span className="h-sep">—</span>
                      <span className="h-company">{item.company}</span>
                    </span>
                  </div>
                  <div className="info-right">
                    <p className="history-secret">{item.secret}</p>
                  </div>
                </div>
              </div>
            );
          })}
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
      </div>
    </section>
  );
};

export default History;
