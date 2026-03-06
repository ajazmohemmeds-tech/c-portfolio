import React from 'react';
import { personalInfo } from '../data';
import { Linkedin, Github, Mail } from 'lucide-react';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-line top"></div>
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
        <Linkedin size={20} />
      </a>
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
        <Github size={20} />
      </a>
      <a href={`mailto:${personalInfo.email}`} className="social-link">
        <Mail size={20} />
      </a>
      <div className="social-line bottom"></div>
    </div>
  );
};

export default SocialSidebar;
