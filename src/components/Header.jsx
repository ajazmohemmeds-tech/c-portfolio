import React from 'react';
import { Sun, Moon } from 'lucide-react';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          Ajaz<span>.</span>
        </div>
        <nav className="nav-menu">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#volunteering" className="nav-link">Photos</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="mailto:hello@ajaz.com" className="btn-contact">hello@ajaz.com</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
