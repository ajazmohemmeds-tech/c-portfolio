import React from 'react';
import { personalInfo } from '../data';
import { Mail, Linkedin, Github, Phone, MapPin, Star, Link, LayoutGrid, ExternalLink, Instagram } from 'lucide-react';
import './Contact.css';

const ContactItem = ({ label, icon: Icon, value, subtext, link }) => (
  <div className="contact-grid-item">
    <div className="contact-item-header">
      <span className="contact-label">{label}</span>
      <ExternalLink size={14} className="corner-icon" />
    </div>
    <div className="contact-item-body">
      <div className="contact-icon">
        <Icon size={24} />
      </div>
      {link ? (
        <a href={link} className="contact-value-link">
          <h4 className="contact-value">{value}</h4>
        </a>
      ) : (
        <h4 className="contact-value">{value}</h4>
      )}
      {subtext && <p className="contact-subtext">{subtext}</p>}
    </div>
  </div>
);

const Contact = () => {
  return (
    <footer id="contact" className="section contact">
      <div className="container">
        <h1 className="contact-title">LET'S CONNECT</h1>
        
        <div className="contact-main-grid">
          <ContactItem 
            label="NAME" 
            icon={Star} 
            value={personalInfo.name} 
          />
          <ContactItem 
            label="EMAIL" 
            icon={Link} 
            value={personalInfo.email} 
            subtext="For professional correspondence, kindly reach out via email"
            link={`mailto:${personalInfo.email}`}
          />
          <ContactItem 
            label="PHONE" 
            icon={LayoutGrid} 
            value={personalInfo.phone} 
            subtext="Call availability is minimal; email remains the primary channel."
          />
          <ContactItem 
            label="LOCATION" 
            icon={MapPin} 
            value="Kerala" 
            subtext="Kerala, India"
          />
        </div>

        <div className="contact-footer-grid">
          <div className="contact-socials-section">
            <span className="contact-label">SOCIALS</span>
            <div className="socials-list">
              <div className="social-row">
                <span className="social-platform">LINKEDIN:</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">/AJAZ-MOHEMMED-S</a>
              </div>
              <div className="social-row">
                <span className="social-platform">GITHUB:</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">/AJAZMOHEMMEDS-TECH</a>
              </div>
              <div className="social-row">
                <span className="social-platform">EMAIL:</span>
                <a href={`mailto:hello@ajaz.com`}>HELLO@AJAZ.COM</a>
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
