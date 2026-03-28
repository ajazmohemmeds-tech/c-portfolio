import React from 'react';
import { Sun, Moon } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          Ajaz<span className="dot"></span>
        </div>
        <nav className="nav-menu">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience-cinematic" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
        </nav>
        <div className="header-actions">
          <a href="mailto:ajazmohemmeds@gmail.com" className="btn-contact">hello@ajaz.com</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
