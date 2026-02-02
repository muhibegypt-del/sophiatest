import { Question } from '../data/questions';

const API_KEY = 'AIzaSyB928obhbzvhTLKtoQF-RTzaOkg13PQ-Ug';
const MODEL = 'gemini-3-pro-preview';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

interface AIResponse {
    candidates?: {
        content: {
            parts: {
                text: string;
            }[];
        };
    }[];
    error?: {
        message: string;
    };
}

export const generateReport = async (
    score: number,
    total: number,
    answers: Record<number, number>,
    questions: Question[]
): Promise<string> => {

    // Construct a prompt based on the answers
    const correctCount = score;
    let promptDetails = "";

    questions.forEach((q, idx) => {
        const userAnswerIndex = answers[idx];
        const isCorrect = userAnswerIndex === q.correctAnswer;
        const userAnswerText = q.options[userAnswerIndex];

        // Only send details for incorrect answers to save tokens/make it focused, 
        // or send summary by category.
        if (!isCorrect) {
            promptDetails += `- Question: "${q.text}" (Category: ${q.category})\n  User Answered: "${userAnswerText}" (Incorrect)\n  Correct Answer: "${q.options[q.correctAnswer]}"\n\n`;
        }
    });

    const prompt = `
    You are an expert pedagogical analyst for 12-year-olds.
    A student took an aptitude test with 40 questions covering Reading Comprehension, Logic, and Math.
    
    Score: ${correctCount} / ${total}
    
    Here is a list of the questions they missed:
    ${promptDetails}

    Please provide a encouraging but analytical report for their parents.
    1. Summarize their strengths based on the score.
    2. Analyze the specific areas where they struggled (Reading, Logic, or Math) based on the missed questions.
    3. Suggest specific fun activities or study topics to improve in those areas.
    
    Keep the tone professional, encouraging, and "premium". Format with Markdown.
  `;

    try {
        const response = await fetch(API_URL, {
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

        const data: AIResponse = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        if (data.candidates && data.candidates[0].content.parts[0].text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('No content generated');
        }

    } catch (error) {
        console.error('AI Generation Error:', error);
        return "We couldn't generate the report at this time. Please try again later.";
    }
};
