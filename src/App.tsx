import { useState } from 'react';
import { QuizLayout } from '@/components/QuizLayout';
import { questions } from '@/data/questions';
import { QuestionCard } from '@/components/QuestionCard';
import { SectionIntro } from '@/components/SectionIntro';
import { HandOverScreen } from '@/components/HandOverScreen';
import { ParentDashboard } from '@/components/ParentDashboard';
import { Progress } from '@/components/ui/progress';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isIntroVisible, setIsIntroVisible] = useState(true); // Show intro for first section
  const [isHandOverVisible, setIsHandOverVisible] = useState(false);
  const [isParentDashboardVisible, setIsParentDashboardVisible] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  // Handlers
  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      if (questions[currentIndex + 1].section !== currentQuestion.section) {
        // Next question is new section
        // We might want to show intro *before* showing the question.
        // Actually, let's toggle a "show intro" state if strict sectioning is needed.
        // Simpler: Just rely on isNewSection detection during render? 
        // But we want an interstitial.
        setIsIntroVisible(true);
      }
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsHandOverVisible(true);
    }
  };

  const startSection = () => {
    setIsIntroVisible(false);
  };

  if (isParentDashboardVisible) {
    return (
      <QuizLayout className="p-8">
        <ParentDashboard answers={answers} />
      </QuizLayout>
    );
  }

  if (isHandOverVisible) {
    return (
      <QuizLayout className="p-8 bg-indigo-50 flex items-center justify-center text-center">
        <HandOverScreen onContinue={() => setIsParentDashboardVisible(true)} />
      </QuizLayout>
    );
  }

  if (isIntroVisible) {
    return (
      <QuizLayout className="p-8 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <SectionIntro
          section={currentQuestion.section}
          onStart={startSection}
          questionCount={questions.filter(q => q.section === currentQuestion.section).length}
        />
      </QuizLayout>
    );
  }

  return (
    <QuizLayout className="bg-slate-50/50">
      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full p-8 md:p-12 gap-8 h-full justify-center">

        {/* Header */}
        <div className="flex items-center justify-between text-slate-500 font-medium">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span className="uppercase tracking-widest text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {currentQuestion.section}
          </span>
        </div>

        {/* Progress */}
        <Progress value={progress} className="h-3" />

        {/* Question Card */}
        <div className="flex-1 flex flex-col justify-center">
          <QuestionCard
            question={currentQuestion}
            currentAnswer={answers[currentQuestion.id]}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        </div>
      </div>
    </QuizLayout>
  );
}
