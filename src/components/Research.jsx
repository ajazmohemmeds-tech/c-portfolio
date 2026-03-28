import React from 'react';
import { motion } from 'framer-motion';
import { research } from '../data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Research.css';

const Research = () => {
  return (
    <section id="research" className="section research-section">
      <div className="container">
        <div className="research-block">
          <div className="subsection-header">
            <span className="section-label reveal">RESEARCH PUBLICATIONS</span>
          </div>
          <div className="research-list">
            {research.map((paper, index) => (
              <motion.div 
                key={index} 
                className="research-item"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="research-meta">
                  <span className="research-date">{paper.date}</span>
                  <span className="research-publisher">{paper.publisher}</span>
                </div>
                <h4>{paper.title}</h4>
                <p className="research-conf">{paper.conference}</p>
                <div className="research-actions">
                  <a href={paper.paperLink} className="read-more" target="_blank" rel="noopener noreferrer">
                    View Paper <ArrowRight size={14} />
                  </a>
                  {paper.certificateLink && (
                    <Link to="/certificate" className="read-more">
                      View Certificate <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
