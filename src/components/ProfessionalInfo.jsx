import React, { useEffect, useRef } from 'react';
import { personalInfo, experience } from '../data';
import './About.css';

const ProfessionalInfo = () => {
  const sectionRef = useRef(null);

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

    const revealElements = sectionRef.current.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="about-details" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text-content">
            <h3 className="about-subtitle reveal">My Background</h3>
            <p className="reveal">
              I am an Artificial Intelligence and Machine Learning enthusiast pursuing my B.Tech at Christ University, Bangalore.
              With a strong foundation in Python, specialized libraries like TensorFlow and PyTorch, and a passion for data science,
              I have developed predictable models and intelligent systems.
            </p>
            
            <div className="education-list reveal">
              <h4>Education</h4>
              {personalInfo.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h5>{edu.degree}</h5>
                  <p>{edu.institution}</p>
                  <span>{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="experience-list reveal">
            <h3 className="about-subtitle">Experience</h3>
            {experience.map((job, index) => (
              <div key={index} className="experience-card">
                <div className="exp-header">
                  <h4>{job.role}</h4>
                  <span className="exp-period">{job.period}</span>
                </div>
                <h5 className="company-info">{job.company} - {job.type}</h5>
                <ul className="exp-desc">
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInfo;
