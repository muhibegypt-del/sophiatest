import { motion } from 'framer-motion';
import type { Question } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
    question: Question;
    currentAnswer?: string;
    onAnswer: (val: string) => void;
    onNext: () => void;
}

export function QuestionCard({ question, currentAnswer, onAnswer, onNext }: QuestionCardProps) {

    // Handlers for specific input types
    const handleSortToggle = (option: string) => {
        // Simple toggle logic for sorting: 
        // If not in list, append. If in list, remove.
        // However, the answer is a string. We parse it or assume it's comma separated string for storage.
        const currentList = currentAnswer ? currentAnswer.split(', ') : [];

        if (currentList.includes(option)) {
            const newList = currentList.filter(item => item !== option);
            onAnswer(newList.join(', '));
        } else {
            const newList = [...currentList, option];
            onAnswer(newList.join(', '));
        }
    };

    const isSelected = (option: string) => {
        if (!currentAnswer) return false;
        return currentAnswer.split(', ').includes(option);
    };

    const getSortOrder = (option: string) => {
        if (!currentAnswer) return null;
        const index = currentAnswer.split(', ').indexOf(option);
        return index !== -1 ? index + 1 : null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            key={question.id}
        >
            <Card className="border-none shadow-none bg-transparent">
                <CardHeader className="p-0 mb-8 space-y-6">
                    {question.context && (
                        <div className="bg-indigo-50 p-6 rounded-2xl text-lg md:text-xl leading-relaxed text-indigo-900 border-l-4 border-indigo-400 italic">
                            {question.context}
                        </div>
                    )}
                    <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                        {question.text}
                    </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                    <div className="space-y-8">

                        {/* Input Area */}
                        <div className="min-h-[200px]">
                            {question.type === 'choice' && question.options && (
                                <RadioGroup
                                    value={currentAnswer}
                                    onValueChange={onAnswer}
                                    className="grid gap-4 md:grid-cols-1"
                                >
                                    {question.options.map((option) => (
                                        <div key={option} className="relative">
                                            <RadioGroupItem value={option} id={option} className="peer sr-only" />
                                            <Label
                                                htmlFor={option}
                                                className="flex items-center p-6 rounded-xl border-2 border-slate-200 bg-white hover:border-indigo-200 hover:bg-slate-50 cursor-pointer peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 transition-all text-xl font-medium text-slate-700"
                                            >
                                                <div className="w-8 h-8 rounded-full border-2 border-slate-300 mr-4 flex items-center justify-center peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-600">
                                                    {currentAnswer === option && <div className="w-4 h-4 rounded-full bg-white" />}
                                                </div>
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            )}

                            {(question.type === 'text' || question.type === 'number') && (
                                <Input
                                    type={question.type === 'number' ? 'number' : 'text'}
                                    placeholder="Type your answer here..."
                                    className="text-2xl p-8 h-auto rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                                    value={currentAnswer || ''}
                                    onChange={(e) => onAnswer(e.target.value)}
                                    autoFocus
                                />
                            )}

                            {question.type === 'sort' && question.options && (
                                <div className="space-y-4">
                                    <p className="text-slate-500 text-lg mb-4">Tap items in the correct order:</p>
                                    <div className="grid gap-3">
                                        {question.options.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleSortToggle(option)}
                                                className={cn(
                                                    "flex items-center justify-between w-full p-6 text-xl font-medium rounded-xl border-2 transition-all",
                                                    isSelected(option)
                                                        ? "border-indigo-600 bg-indigo-50 text-indigo-900"
                                                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                                )}
                                            >
                                                <span>{option}</span>
                                                {isSelected(option) && (
                                                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                        {getSortOrder(option)}
                                                    </span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-4 p-4 bg-slate-100 rounded-lg min-h-[60px] flex flex-wrap gap-2">
                                        <span className="text-slate-400 font-medium text-sm w-full">Your Order:</span>
                                        {currentAnswer ? currentAnswer.split(', ').map((item, idx) => (
                                            <span key={idx} className="bg-white px-3 py-1 rounded-md shadow-sm border border-slate-200 text-slate-800 font-medium">
                                                {idx + 1}. {item}
                                            </span>
                                        )) : <span className="text-slate-400 italic">Tap options above...</span>}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-end pt-8">
                            <Button
                                size="lg"
                                onClick={onNext}
                                disabled={!currentAnswer}
                                className="text-xl px-10 py-8 rounded-full shadow-lg shadow-indigo-200 bg-indigo-600 hover:bg-indigo-700 transition-all hover:scale-105"
                            >
                                {question.id === 40 ? 'Finish Test' : 'Next Question'}
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
