import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Zap, 
  Search, 
  GitBranch, 
  Github,
  Box, 
  Layout, 
  Server, 
  Wind 
} from 'lucide-react';
import './TechStack.css';

const techRows = [
  {
    direction: 1, // Right
    items: [
      { name: "OpenCV", icon: <Globe size={20} /> },
      { name: "Scikit-Learn", icon: <Database size={20} /> },
      { name: "Pandas", icon: <Layers size={20} /> },
      { name: "Google Gemini", icon: <Zap size={20} /> },
      { name: "LangChain", icon: <Code2 size={20} /> },
      { name: "TensorFlow", icon: <Cpu size={20} /> },
      { name: "PyTorch", icon: <Search size={20} /> },
    ]
  },
  {
    direction: -1, // Left
    items: [
      { name: "Git", icon: <GitBranch size={20} /> },
      { name: "GitHub", icon: <Github size={20} /> },
      { name: "Docker", icon: <Box size={20} /> },
      { name: "React.js", icon: <Layout size={20} /> },
      { name: "Node.js", icon: <Server size={20} /> },
      { name: "MongoDB", icon: <Database size={20} /> },
    ]
  }
];

const TechStack = () => {
  return (
    <section className="tech-stack-section">
      <div className="container">
        <header className="tech-header">
          <span className="section-label reveal">TECHNOLOGY STACK</span>
        </header>
      </div>

      <div className="marquee-container">
        {techRows.map((row, rowIndex) => (
          <div key={rowIndex} className="marquee-row-wrapper">
            <motion.div 
              className="marquee-track"
              animate={{
                x: row.direction > 0 ? [-2000, 0] : [0, -2000]
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Render items twice for seamless loop */}
              {[...row.items, ...row.items, ...row.items, ...row.items].map((item, itemIndex) => (
                <div key={itemIndex} className="tech-pill">
                  <span className="tech-icon">{item.icon}</span>
                  <span className="tech-name">{item.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
