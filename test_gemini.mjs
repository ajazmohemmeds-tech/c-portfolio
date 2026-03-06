import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testConnection() {
  try {
    const envPath = path.join(__dirname, '.env');
    const env = fs.readFileSync(envPath, 'utf8');
    const apiKey = env.match(/VITE_GEMINI_API_KEY=(.*)/)[1].trim();

    const genAI = new GoogleGenerativeAI(apiKey);
    
    const modelFallbacks = ["gemini-1.5-flash-latest", "gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro", "gemini-2.0-flash"];
    let success = false;

    console.log("Starting API Test...");

    for (const modelName of modelFallbacks) {
        try {
            console.log(`Testing model: ${modelName}...`);
            const model = genAI.getGenerativeModel({ model: modelName });
            
            // Testing raw generateContent because startChat strictness might be the failure point
            const result = await model.generateContent("Reply exactly with the word SUCCESS");
            console.log(`✅ Success with ${modelName}:`, result.response.text().trim());
            success = true;
            break;
        } catch (e) {
            console.log(`❌ Failed: ${modelName} - ${e.message}`);
        }
    }
    
    if(!success) {
        console.log("All models failed. Check billing, quota, or region restrictions on the API key.");
    }

  } catch (error) {
    console.error("API Test Execution Failed:", error);
  }
}

testConnection();
