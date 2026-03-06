import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    console.log("Launching browser to capture Business Intelligence Agent demo...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set viewport to a good desktop size
    await page.setViewport({width: 1280, height: 800});
    
    // Go to the URL and wait until network is mostly idle (since it's a Render app spinning up)
    console.log("Navigating to https://monday-bi-agent-nlp9.onrender.com (this may take 20s if spinning up)...");
    await page.goto('https://monday-bi-agent-nlp9.onrender.com', { waitUntil: 'networkidle2', timeout: 60000 });
    
    // Additional wait just in case Render has a loading screen right before the main app
    await new Promise(r => setTimeout(r, 5000));
    
    const imagePath = path.join(__dirname, 'public', 'images', 'bi-agent.png');
    await page.screenshot({ path: imagePath });
    
    console.log(`Screenshot saved to ${imagePath}`);
    await browser.close();
})();
