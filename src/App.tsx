import { Component, createSignal, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import { questions } from './data/questions';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import Results from './components/Results';

const App: Component = () => {
    const [state, setState] = createStore({
        currentIndex: 0,
        answers: {} as Record<number, number>,
        isFinished: false,
    });

    const [animating, setAnimating] = createSignal(false);

    const handleAnswer = (optionIndex: number) => {
        if (animating()) return;

        // Record answer
        setState('answers', state.currentIndex, optionIndex);

        setAnimating(true);
        // Use a small delay for "fasty" feel but perceptible selection
        setTimeout(() => {
            if (state.currentIndex < questions.length - 1) {
                setState('currentIndex', (c) => c + 1);
            } else {
                setState('isFinished', true);
            }
            setAnimating(false);
            window.scrollTo(0, 0);
        }, 300); // 300ms is snappy
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((q, idx) => {
            if (state.answers[idx] === q.correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const handleRestart = () => {
        setState({
            currentIndex: 0,
            answers: {},
            isFinished: false
        });
    };

    return (
        <div class="min-h-screen bg-surface-muted antialiased pb-20">
            <Show when={!state.isFinished}>
                <ProgressBar current={state.currentIndex} total={questions.length} />

                <div class="pt-20">
                    <QuestionCard
                        question={questions[state.currentIndex]}
                        onAnswer={handleAnswer}
                        selectedOption={state.answers[state.currentIndex]}
                    />
                </div>
            </Show>

            <Show when={state.isFinished}>
                <Results
                    score={calculateScore()}
                    total={questions.length}
                    onRestart={handleRestart}
                    answers={state.answers}
                />
            </Show>
        </div>
    );
};

export default App;
