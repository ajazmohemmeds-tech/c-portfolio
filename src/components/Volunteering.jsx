import React, { useState } from 'react';
import { volunteering } from '../data';
import { Camera, ArrowRight, X } from 'lucide-react';
import './Volunteering.css';

const Volunteering = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const featuredImages = [
    `${import.meta.env.BASE_URL}images/photo1.jpg`,
    `${import.meta.env.BASE_URL}images/photo2.JPG`,
    `${import.meta.env.BASE_URL}images/photo3.JPG`,
    `${import.meta.env.BASE_URL}images/photo4.jpg`
  ];

  const extraImages = [
    `${import.meta.env.BASE_URL}images/gallery_1.jpg`,
    `${import.meta.env.BASE_URL}images/gallery_2.jpg`,
    `${import.meta.env.BASE_URL}images/gallery_3.jpg`,
    `${import.meta.env.BASE_URL}images/gallery_4.jpg`,
    `${import.meta.env.BASE_URL}images/gallery_5.jpg`
  ];

  const allImages = [...featuredImages, ...extraImages];
  const displayedImages = isExpanded ? allImages : featuredImages;

  return (
    <section id="volunteering" className="section volunteering">
      <div className="container">
        <h2 className="section-title">Media & <span>Volunteering</span></h2>
        
        <div className="volunteering-content">
          <div className="volunteering-list">
             {volunteering.map((item, index) => (
                <div key={index} className="vol-item">
                   <div className="vol-header">
                     <h3>{item.role}</h3>
                     <span className="vol-org">{item.organization}</span>
                   </div>
                   <p>{item.description}</p>
                </div>
             ))}
          </div>

          <div className="media-gallery">
            <div className="gallery-header">
              <h3>Gallery</h3>
              {isExpanded && (
                <button className="btn-close-gallery" onClick={() => setIsExpanded(false)} title="Close gallery">
                  <X size={20} />
                </button>
              )}
            </div>
            
            <div className={`gallery-grid ${isExpanded ? 'expanded' : ''}`}>
               {displayedImages.map((src, index) => (
                 <div key={index} className="gallery-item fade-in">
                   <img 
                     src={src} 
                     alt={`Gallery ${index + 1}`} 
                     className="gallery-img"
                     onError={(e) => {
                       e.target.style.display = 'none';
                       e.target.nextSibling.style.display = 'flex';
                     }}
                   />
                   <div className="gallery-placeholder" style={{display: 'none'}}>
                      <Camera size={24} />
                      <span>Photo ${index + 1}</span>
                   </div>
                 </div>
               ))}
               
               {!isExpanded && (
                 <div className="gallery-item see-more" onClick={() => setIsExpanded(true)} title="See more photos">
                    <div className="see-more-content">
                      <ArrowRight size={24} />
                    </div>
                 </div>
               )}
            </div>
            <p className="gallery-note">
              Capturing moments from university events and social drives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
