import React from 'react';
import { personalInfo } from '../data';
import { Linkedin, Github, Instagram } from 'lucide-react';
import './Contact.css';


const Contact = () => {
  return (
    <footer id="contact" className="section contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-label reveal">CONNECT</span>
        </div>
        
        <div className="contact-footer-grid">
          <div className="contact-socials-section">
            <div className="socials-grid">
              <div className="social-column">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-arrow"></span> Linkedin
                </a>
                <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-arrow"></span> Instagram
                </a>
              </div>
              <div className="social-column">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-arrow"></span> Github
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-arrow"></span> Medium
                </a>
              </div>
              <div className="social-column contact-info-column">
                <div className="contact-info-item">
                  <span className="info-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="info-value">{personalInfo.email}</a>
                </div>
                <div className="contact-info-item">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
