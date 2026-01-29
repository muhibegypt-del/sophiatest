import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { SectionType } from "../types";

interface SectionIntroProps {
    section: SectionType;
    questionCount: number;
    onStart: () => void;
}

const sectionInfo: Record<SectionType, { title: string; subtitle: string; icon: string }> = {
    'Cognition': {
        title: "Brain Power!",
        subtitle: "Let's warm up those thinking muscles.",
        icon: "🧠"
    },
    'Spelling': {
        title: "Word Wizard",
        subtitle: "Listen carefully and spell the words.",
        icon: "✍️"
    },
    'Reading Comprehension': {
        title: "Story Time",
        subtitle: "Read the story and answer the questions.",
        icon: "📚"
    },
    'Logic': {
        title: "Puzzle Master",
        subtitle: "Use your logic to solve these problems.",
        icon: "🧩"
    }
};

export function SectionIntro({ section, questionCount, onStart }: SectionIntroProps) {
    const info = sectionInfo[section];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-lg"
        >
            <div className="text-8xl mb-8 animate-bounce">{info.icon}</div>
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight">{info.title}</h1>
            <p className="text-2xl text-indigo-100 mb-8 font-medium">{info.subtitle}</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-12 inline-block">
                <span className="text-xl font-bold">{questionCount} Questions</span>
            </div>

            <div>
                <Button
                    onClick={onStart}
                    size="lg"
                    className="text-2xl px-12 py-8 rounded-full bg-white text-indigo-600 hover:bg-indigo-50 shadow-xl transition-all hover:scale-105 font-bold"
                >
                    Start Section
                </Button>
            </div>
        </motion.div>
    );
}
