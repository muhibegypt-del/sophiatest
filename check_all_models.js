
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyBmbooBdNzO4LXHKJGxFUQ7msVn_9PPaxE';
const genAI = new GoogleGenerativeAI(apiKey);

const modelsToCheck = [
    "gemini-1.5-flash",
    "gemini-1.5-pro",
    "gemini-pro",
    "gemini-1.0-pro"
];

async function checkModels() {
    console.log("Checking models (Verbose)...");
    for (const modelName of modelsToCheck) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Test");
            await result.response; // Make sure we await the response structure
            console.log(`[PASS] ${modelName}`);
        } catch (error) {
            console.log(`[FAIL] ${modelName}`);
            console.log(`Error Name: ${error.name}`);
            console.log(`Error Message: ${error.message}`);
            if (error.response) {
                console.log(`Error Response: ${JSON.stringify(error.response)}`);
            }
        }
    }
}

checkModels();
