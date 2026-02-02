const apiKey = 'AIzaSyB928obhbzvhTLKtoQF-RTzaOkg13PQ-Ug';
const model = 'gemini-3-pro-preview'; // Testing user request
const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

const prompt = `
You are an expert pedagogical analyst for 12-year-olds.
A student took an aptitude test.
Score: 5 / 10
Please provide a report.
`;

async function testGenerate() {
    console.log(`Testing model: ${model}`);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Success!");
            console.log(JSON.stringify(data, null, 2));
        } else {
            console.error("API Error:");
            console.error(JSON.stringify(data, null, 2));
        }

    } catch (error) {
        console.error("Network/Fetch Error:", error);
    }
}

testGenerate();
