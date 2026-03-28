import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { projects, volunteering, volunteeringGallery } from '../data';
import { ExternalLink, Github, FileText, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Projects.css';

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="project-slider-container">
      <div className="slider-controls">
        <button className="nav-btn prev" onClick={() => paginate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <button className="nav-btn next" onClick={() => paginate(1)}>
          <ArrowRight size={24} />
        </button>
      </div>

      <div className="slider-window">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="project-slide"
          >
            <div className="slide-content">
              <span className="project-index">{(currentIndex + 1).toString().padStart(2, '0')}</span>
              <div className="project-info">
                <h3>{currentProject.title}</h3>
                <p className="project-role">{currentProject.role || "Developer"}</p>
                <div className="tools-features">
                  <h4>TOOLS & FEATURES</h4>
                  <ul>
                    {currentProject.tech.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </div>
                <div className="project-links">
                  {currentProject.githubLink && (
                    <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                      <Github size={18} /> Code
                    </a>
                  )}
                  {currentProject.demoLink && (
                    <a href={currentProject.demoLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="slide-visual">
              <div className="visual-frame">
                {currentProject.image ? (
                  <img src={`${import.meta.env.BASE_URL}${currentProject.image}`} alt={currentProject.title} />
                ) : (
                  <div className="placeholder-image">Visual Mockup</div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="slider-pagination">
        {projects.map((_, i) => (
          <button 
            key={i} 
            className={`pagination-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <header className="projects-header">
          <span className="section-label reveal">MY WORK</span>
        </header>
        
        <ProjectSlider />


        <div className="volunteering-block">
          <div className="subsection-header">
            <span className="section-label reveal">VOLUNTEERING</span>
          </div>
          <div className="volunteering-list">
            {volunteering.map((v, index) => (
              <motion.div 
                key={index} 
                className="volunteering-item"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="volunteering-meta">
                  <span className="volunteering-role">{v.role}</span>
                  {v.period && <span className="volunteering-date">{v.period}</span>}
                </div>
                <h4>{v.organization}</h4>
                <p className="volunteering-desc">{v.description}</p>
                {/* Specific Action Link for CUESTIC Gallery */}
                {v.organization.includes("CUESTIC") && (
                  <div className="volunteering-actions" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <Link to="/gallery" className="read-more">
                      View Gallery <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
