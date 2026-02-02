const fs = require('fs');
const apiKey = 'AIzaSyBmbooBdNzO4LXHKJGxFUQ7msVn_9PPaxE';
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

async function listModels() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.models) {
            const chatModels = data.models
                .filter(m => m.supportedGenerationMethods.includes("generateContent"))
                .map(m => `- ${m.name.replace('models/', '')}`)
                .join('\n');

            fs.writeFileSync('available_models.txt', chatModels, 'utf8');
            console.log("Written to available_models.txt");
        }
    } catch (error) {
        console.error(error);
    }
}

listModels();
