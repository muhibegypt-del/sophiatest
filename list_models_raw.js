
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

        console.log(`Found ${data.models.length} models total.`);
        console.log("----------------------------------------");
        data.models.forEach(model => {
            console.log(`ID: ${model.name.replace('models/', '')}`);
            console.log(`Name: ${model.displayName}`);
            console.log(`Methods: ${model.supportedGenerationMethods.join(', ')}`);
            console.log("---");
        });

    } catch (error) {
        console.error("Failed to fetch models:", error.message);
    }
}

listModels();
