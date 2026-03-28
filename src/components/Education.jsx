import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section">
      <div className="container">
        <header className="education-header">
          <span className="section-label reveal">EDUCATION</span>
        </header>

        <div className="education-grid">
          {personalInfo.education.map((edu, index) => (
            <motion.div 
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <div className="glass-card">
                <div className="card-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="duration">{edu.year}</span>
                </div>
                <p className="institution">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
