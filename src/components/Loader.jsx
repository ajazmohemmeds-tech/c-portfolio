import React from 'react';
import './Loader.css';

const Loader = ({ loading }) => {
  return (
    <div className={`loader-wrapper ${!loading ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">
          Ajaz<span className="dot"></span>
        </div>
        <div className="loader-progress-container">
          <div className="loader-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
