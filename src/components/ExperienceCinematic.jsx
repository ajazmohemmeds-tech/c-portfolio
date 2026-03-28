import React, { useState, useEffect, useRef } from 'react';
import './ExperienceCinematic.css';

const ExperienceCinematic = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const spotlightSize = isHovering ? 300 : 2;

  return (
    <section 
      id="experience-cinematic" 
      className="experience-cinematic" 
      ref={sectionRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container">
        <div className="exp-label">EXPERIENCE</div>
        
        <div className="cinematic-text-wrapper">
          {/* Base Layer: Professional Text */}
          <div className="text-layer base-layer">
            <h2 className="cinematic-headline">
              Not <span className="highlight">years of experience</span> yet, but already building systems that <span className="highlight">solve real problems</span>
            </h2>
          </div>

          {/* Secret Layer: Honest Reveal */}
          <div 
            className="text-layer secret-layer"
            style={{
              clipPath: `circle(${spotlightSize}px at ${mousePos.x}px ${mousePos.y}px)`,
              WebkitClipPath: `circle(${spotlightSize}px at ${mousePos.x}px ${mousePos.y}px)`
            }}
          >
            <h2 className="cinematic-headline">
              Watching tutorials. Reading docs. Trying to understand what’s actually going on
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCinematic;
