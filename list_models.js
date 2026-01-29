
const apiKey = 'AIzaSyBmbooBdNzO4LXHKJGxFUQ7msVn_9PPaxE';
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

async function listModels() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error("Error fetching models:", data.error.message);
            return;
        }

        if (!data.models) {
            console.log("No models found.");
            return;
        }

        console.log("Available Models:");
        const chatModels = data.models.filter(m => m.supportedGenerationMethods.includes("generateContent"));

        chatModels.forEach(model => {
            console.log(`- ${model.name.replace('models/', '')} (${model.displayName})`);
        });

    } catch (error) {
        console.error("Failed to fetch models:", error.message);
    }
}

listModels();
