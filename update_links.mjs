import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'src/components/Projects.jsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<a href="#" className="link-btn"><Github size={16} /> Code</a>\n                  <a href="#" className="link-btn"><ExternalLink size={16} /> Demo</a>',
  '<a href={project.githubLink || "#"} target={project.githubLink ? "_blank" : undefined} rel="noopener noreferrer" className="link-btn"><Github size={16} /> Code</a>\n                  <a href={project.demoLink || "#"} target={project.demoLink ? "_blank" : undefined} rel="noopener noreferrer" className="link-btn"><ExternalLink size={16} /> Demo</a>'
);

fs.writeFileSync(file, content);
console.log("Updated links!");
