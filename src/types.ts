export type SectionType = 'Cognition' | 'Spelling' | 'Reading Comprehension' | 'Logic';

export type QuestionType = 'choice' | 'text' | 'number' | 'sort';

export interface Question {
    id: number;
    section: SectionType;
    text: string;
    type: QuestionType;
    options?: string[]; // For multiple choice
    context?: string; // For reading comprehension passages
    correctAnswer: string; // Stored for analysis, strictly speaking we might not need it in the client for the kid to see, but good for structure.
    image?: string; // Potential for future use
}

export interface QuizState {
    currentQuestionIndex: number;
    answers: Record<number, string>;
    isComplete: boolean;
    sectionTransition?: SectionType; // If present, show transition screen
}
