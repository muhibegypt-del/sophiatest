
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyBmbooBdNzO4LXHKJGxFUQ7msVn_9PPaxE';
const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        console.log("Attempting to generate with gemini-1.5-flash...");
        const result = await model.generateContent("Hello");
        console.log("Success! Response:", result.response.text());
        console.log("Usage Model: gemini-1.5-flash");
    } catch (error) {
        console.error("Error with gemini-1.5-flash:", error.message);

        try {
            console.log("Attempting to generate with gemini-pro...");
            const modelPro = genAI.getGenerativeModel({ model: "gemini-pro" });
            const resultPro = await modelPro.generateContent("Hello");
            console.log("Success! Response:", resultPro.response.text());
            console.log("Usage Model: gemini-pro");
        } catch (errPro) {
            console.error("Error with gemini-pro:", errPro.message);
        }
    }
}

listModels();
