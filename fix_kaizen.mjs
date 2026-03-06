import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'src/components/KaizenAssistant.jsx');
let content = fs.readFileSync(file, 'utf8');

// The missing backtick is before "skills:"
content = content.replace(
  "boards (Demo: monday-bi-agent-nlp9.onrender.com).\n\n  skills:",
  "boards (Demo: monday-bi-agent-nlp9.onrender.com).`,\n\n  skills:"
);

fs.writeFileSync(file, content);
console.log("Syntax fixed!");
