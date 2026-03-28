import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="word-span">
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

const About = () => {
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headlineRef,
    offset: ["start 0.9", "start 0.25"]
  });

  const headlineText = "I build intelligent systems, experiment with ideas, and turn complex problems into simple, powerful solutions that create real impact.";
  const words = headlineText.split(" ");

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current && isHovering) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        sectionRef.current.style.setProperty('--about-x', `${x}px`);
        sectionRef.current.style.setProperty('--about-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [isHovering]);

  const spotlightSize = isHovering ? 250 : 0;

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.setProperty('--spotlight-size', `${spotlightSize}px`);
    }
  }, [spotlightSize]);

  return (
    <section 
      id="about" 
      className="about-section" 
      ref={sectionRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Cinematic Intro Page */}
      <div className="about-cinematic">
        <div className="container">
          <div className="about-label reveal">ABOUT ME</div>
          
          <div className="headline-wrapper" ref={headlineRef}>
            {/* Base Layer - Highlighting Words */}
            <div className="text-layer base-layer">
              <h2 className="about-headline">
                {words.map((word, i) => {
                  const highlightTerms = ["intelligent", "systems", "simple,", "powerful", "solutions"];
                  const isHighlighted = highlightTerms.some(term => word.toLowerCase().includes(term.toLowerCase()));
                  const start = i / words.length;
                  const end = start + (1 / words.length);
                  return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                      <span className={isHighlighted ? "highlight" : ""}>{word}</span>
                    </Word>
                  );
                })}
              </h2>
            </div>

            {/* Secret Layer - Spotlight Reveal */}
            <div className="text-layer secret-layer">
              <h2 className="about-headline">
                building things that sometimes work, pretending i understand everything, questioning life choices
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
