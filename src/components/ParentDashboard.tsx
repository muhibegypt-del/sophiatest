import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { questions } from '@/data/questions';
import { Loader2 } from 'lucide-react';

interface ParentDashboardProps {
    answers: Record<number, string>;
}

export function ParentDashboard({ answers }: ParentDashboardProps) {
    const [apiKey, setApiKey] = useState('AIzaSyBmbooBdNzO4LXHKJGxFUQ7msVn_9PPaxE');
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const calculateScore = () => {
        let score = 0;
        questions.forEach(q => {
            // Very basic normalization for scoring match
            const userAnswer = answers[q.id]?.trim().toLowerCase();
            const correctAnswer = q.correctAnswer.trim().toLowerCase();
            if (userAnswer === correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const handleAnalyze = async () => {
        if (!apiKey) {
            setError("Please enter a valid Gemini API Key.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

            const prompt = `
        You are an expert educational psychologist. Analyze the following aptitude test results for an 8-year-old child named Sophia.
        
        The test had 4 sections: Cognition, Spelling, Reading Comprehension, and Logic.
        
        Here is the data:
        ${questions.map(q => `
          [${q.section}] Q: ${q.text}
          Correct Answer: ${q.correctAnswer}
          Child's Answer: ${answers[q.id] || "No Answer"}
        `).join('\n')}
        
        Please provide a comprehensive report in Markdown/HTML format covering:
        1. Overall Score Assessment (Mental Age estimation if possible based on this dummy data).
        2. Section-by-section breakdown of strengths and weaknesses.
        3. Specific areas for improvement (e.g., if she missed "Logic" questions, suggest logic puzzles).
        4. Detailed constructive feedback.
        
        Keep the tone encouraging mainly for the parents but honest about the performance.
      `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            setReport(text);
        } catch (err) {
            setError("Failed to generate analysis. Please check your API key and try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-slate-900">Parent Dashboard</h1>
                <p className="text-slate-600">Review results and generate AI analysis.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-indigo-600 mb-2">
                            {calculateScore()} / {questions.length}
                        </div>
                        <p className="text-sm text-slate-500">Correct Answers (Auto-calculated)</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>AI Analysis</CardTitle>
                        <CardDescription>Unlock deep insights with Gemini AI</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="apiKey">Gemini API Key</Label>
                            <Input
                                id="apiKey"
                                type="password"
                                placeholder="Enter your API Key"
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                            />
                        </div>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            onClick={handleAnalyze}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Analyzing...
                                </>
                            ) : (
                                "Generate Full Report"
                            )}
                        </Button>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </CardContent>
                </Card>
            </div>

            {report && (
                <Card className="bg-white border-2 border-indigo-100 shadow-xl">
                    <CardHeader className="bg-indigo-50 border-b border-indigo-100 rounded-t-xl">
                        <CardTitle className="text-indigo-900">Analysis Report</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-indigo max-w-none p-8">
                        <ReactMarkdown>{report}</ReactMarkdown>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
