const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src/data.js');
let data = fs.readFileSync(dataFile, 'utf8');

data = data.replace(
  /\{\s*title:\s*"AI Model for Food Recognition"[^}]+\}/,
  `{
    title: "Business Intelligence Agent",
    description: "AI agent that can answer founder-level business intelligence queries by integrating with monday.com boards containing work orders and deals data.",
    tech: ["AI Agent", "monday.com API", "NLP", "Python", "Data Integration"],
    role: "Developer",
    outcome: "Streamlined business intelligence querying for immediate data insights.",
    image: "images/bi-agent.png",
    demoLink: "https://monday-bi-agent-nlp9.onrender.com",
    githubLink: "#"
  }`
);

fs.writeFileSync(dataFile, data);

const laziraFile = path.join(__dirname, 'src/components/LaziraAssistant.jsx');
let lazira = fs.readFileSync(laziraFile, 'utf8');

lazira = lazira.replace(
  /3\.\s*Food Recognition AI:[^\n]+/,
  "3. Business Intelligence Agent: AI agent answering founder-level business queries integrating with monday.com boards (Demo: monday-bi-agent-nlp9.onrender.com)."
);

lazira = lazira.replace(
  /project\|build\|built\|food recognition/,
  "project|build|built|business intelligence|bi agent|monday\\.com"
);

fs.writeFileSync(laziraFile, lazira);
console.log("Updated projects and Lazira knowledge successfully.");
