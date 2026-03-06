import React from 'react';
import { projects, research } from '../data';
import { ExternalLink, Github, FileText } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects & <span>Research</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.image ? (
                   <img src={project.image} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                ) : (
                  <div className="placeholder-image">
                    <span>Project Image</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-meta">
                  <span><strong>Role:</strong> {project.role}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <div className="project-tags">
                  {project.tech.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-outcome">
                   <strong>Outcome:</strong> {project.outcome}
                </div>
                <div className="project-links">
                  <a href={project.githubLink || "#"} target={project.githubLink ? "_blank" : undefined} rel="noopener noreferrer" className="link-btn"><Github size={16} /> Code</a>
                  <a href={project.demoLink || "#"} target={project.demoLink ? "_blank" : undefined} rel="noopener noreferrer" className="link-btn"><ExternalLink size={16} /> Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="research-section">
          <h3 className="subsection-title">Research Publications</h3>
          {research.map((paper, index) => (
            <div key={index} className="research-card">
              <div className="research-icon">
                <FileText size={32} />
              </div>
              <div className="research-content">
                <h4>{paper.title}</h4>
                <p className="research-venue">
                  {paper.publisher} - {paper.conference} ({paper.date})
                </p>
                <p className="research-abstract">{paper.description}</p>
                <div className="research-authors">
                  <strong>Authors:</strong> {paper.authors.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
