import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { research } from './data';
import './CertificatePage.css';

const CertificatePage = () => {
  const cert = research[0]; // Assuming first research for now as per request

  return (
    <div className="certificate-page">
      <header className="cert-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        <div className="cert-logo">Ajaz<span>.</span></div>
      </header>

      <main className="cert-main">
        <motion.div 
          className="cert-container reveal-active"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="cert-card glass">
            <div className="cert-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}images/research-cert.jpg`} alt="Research Certificate" />
            </div>
            
            <div className="cert-details">
              <span className="cert-label">RESEARCH PUBLICATION</span>
              <h1 className="cert-title">{cert.title}</h1>
              <div className="cert-meta">
                <span>{cert.conference}</span>
                <span className="dot-sep"></span>
                <span>{cert.date}</span>
              </div>
              
              <div className="cert-description">
                <p>{cert.description}</p>
              </div>

              <div className="cert-actions">
                <a href={`${import.meta.env.BASE_URL}images/research-cert.jpg`} download className="cert-btn primary">
                  <Download size={18} /> Download Certificate
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="cert-footer">
        <p>© {new Date().getFullYear()} Ajaz Mohemmed S. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CertificatePage;
