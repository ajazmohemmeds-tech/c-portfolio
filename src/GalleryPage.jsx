import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { volunteeringGallery } from './data';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import './GalleryPage.css';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-page">
      <div className="gallery-background" />
      
      <div className="container gallery-container">
        <header className="gallery-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Volunteering Gallery
          </motion.h1>
          <motion.p 
            className="gallery-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CUESTIC (Christ University) - Media Vice Head & Team Contributions
          </motion.p>
        </header>

        <div className="gallery-grid">
          {volunteeringGallery.map((item, index) => (
            <motion.div 
              key={index}
              className="gallery-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="gallery-image-wrapper">
                <img src={`${import.meta.env.BASE_URL}${item.image.startsWith('/') ? item.image.substring(1) : item.image}`} alt={item.title} />
                <div className="gallery-hover-overlay">
                  <ZoomIn size={32} color="white" />
                </div>
              </div>
              <div className="gallery-card-content">
                <span className="gallery-card-title">{item.title}</span>
                <span className="gallery-card-desc">{item.desc}</span>
                <p className="gallery-card-back">{item.backDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
