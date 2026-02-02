import { Component, Show, createSignal } from 'solid-js';
import { Question } from '../data/questions';

interface QuestionCardProps {
    question: Question;
    onAnswer: (index: number) => void;
    selectedOption?: number;
}

const QuestionCard: Component<QuestionCardProps> = (props) => {

    return (
        <div class="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8 items-start h-full min-h-[80vh]">

            {/* Passage Column (Only for Reading) */}
            <Show when={props.question.category === 'Reading' && props.question.passage}>
                <div class="w-full md:w-1/2 bg-white rounded-2xl p-8 shadow-sm border border-brand-100/50 animate-slide-up">
                    <h3 class="text-xs font-bold text-brand-500 tracking-widest uppercase mb-4">Passage</h3>
                    <div class="prose prose-zinc prose-lg font-reading leading-relaxed text-slate-700">
                        {props.question.passage}
                    </div>
                </div>
            </Show>

            {/* Question Column */}
            <div class={`w-full ${props.question.category === 'Reading' ? 'md:w-1/2' : 'max-w-2xl mx-auto'} bg-white rounded-2xl p-8 shadow-xl border border-brand-100 flex flex-col justify-center animate-slide-up`}>
                <div class="mb-6">
                    <span class="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wider uppercase mb-4">
                        {props.question.category}
                    </span>
                    <h2 class="text-2xl font-bold text-slate-900 leading-tight">
                        {props.question.text}
                    </h2>
                </div>

                <div class="space-y-3">
                    {props.question.options.map((option, index) => (
                        <button
                            onClick={() => props.onAnswer(index)}
                            class={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 group relative overflow-hidden
                ${props.selectedOption === index
                                    ? 'border-brand-500 bg-brand-50 text-brand-900'
                                    : 'border-slate-100 hover:border-brand-300 hover:bg-slate-50 text-slate-700'
                                }`}
                        >
                            <span class={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mr-4 transition-colors
                ${props.selectedOption === index ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-200 group-hover:text-brand-700'}`}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span class="text-lg font-medium">{option}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
