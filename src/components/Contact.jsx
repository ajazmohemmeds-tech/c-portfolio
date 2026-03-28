import React from 'react';
import { personalInfo } from '../data';
import { Linkedin, Github, Instagram } from 'lucide-react';
import './Contact.css';


const Contact = () => {
  return (
    <footer id="contact" className="section contact">
      <div className="container">
        <h1 className="contact-title">LET'S CONNECT</h1>
        

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
