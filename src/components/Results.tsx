import { Component, createSignal, Show } from 'solid-js';
import { generateReport } from '../services/ai';
import { questions } from '../data/questions';

interface ResultsProps {
    score: number;
    total: number;
    onRestart: () => void;
    answers?: Record<number, number>; // Pass answers down if possible, or we need to access state
}

// NOTE: We need to modify App.tsx to pass 'answers' to Results.tsx
// For now, assuming App.tsx will be updated or we handle it here.
// Actually, let's update this file to accept `answers` prop.

// Update the interface in App.tsx as well!

const Results: Component<ResultsProps> = (props) => {
    const percentage = Math.round((props.score / props.total) * 100);
    const [report, setReport] = createSignal<string | null>(null);
    const [loading, setLoading] = createSignal(false);

    const handleGenerateReport = async () => {
        if (!props.answers) return; // Guard clause
        setLoading(true);
        const result = await generateReport(props.score, props.total, props.answers, questions);
        setReport(result);
        setLoading(false);
    };

    return (
        <div class="min-h-screen flex items-center justify-center p-4 animate-fade-in py-12">
            <div class="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10  border border-brand-100 flex flex-col items-center">
                <h1 class="text-3xl font-bold text-slate-900 mb-2">Assessment Complete</h1>
                <p class="text-slate-500 mb-8">Great job! Here is your summary.</p>

                <div class="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
                    <div class="w-full h-full rounded-full border-8 border-brand-100 flex items-center justify-center">
                        <div class="text-5xl font-black text-brand-600">{percentage}%</div>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-8 w-full max-w-sm">
                    <div class="bg-slate-50 p-4 rounded-xl text-center">
                        <div class="text-sm text-slate-500 uppercase font-bold tracking-wider">Correct</div>
                        <div class="text-2xl font-bold text-green-600">{props.score}</div>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-xl text-center">
                        <div class="text-sm text-slate-500 uppercase font-bold tracking-wider">Total</div>
                        <div class="text-2xl font-bold text-slate-900">{props.total}</div>
                    </div>
                </div>

                {/* AI Report Section */}
                <div class="w-full mb-8">
                    <Show when={!report() && !loading()}>
                        <button
                            onClick={handleGenerateReport}
                            class="w-full py-4 bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Generate AI Report
                        </button>
                    </Show>

                    <Show when={loading()}>
                        <div class="w-full py-8 text-center text-brand-600 animate-pulse">
                            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600 mb-2"></div>
                            <p>Analyzing performance with Gemini AI...</p>
                        </div>
                    </Show>

                    <Show when={report()}>
                        <div class="bg-brand-50/50 p-6 rounded-2xl border border-brand-100 text-left prose prose-sm prose-slate max-w-none">
                            <h3 class="text-lg font-bold text-brand-800 mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                                </svg>
                                AI Analysis
                            </h3>
                            {/* Ideally use a markdown parser, but simple whitespace-pre-wrap works for now */}
                            <div class="whitespace-pre-wrap font-reading">{report()}</div>
                        </div>
                    </Show>
                </div>

                <button
                    onClick={props.onRestart}
                    class="w-full py-3 text-slate-400 hover:text-slate-600 font-semibold transition-colors"
                >
                    Start Over
                </button>
            </div>
        </div>
    );
};

export default Results;
