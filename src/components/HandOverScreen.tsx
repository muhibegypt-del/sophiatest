import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HandOverScreenProps {
    onContinue: () => void;
}

export function HandOverScreen({ onContinue }: HandOverScreenProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
        >
            <div className="mb-12">
                <span className="text-9xl">🌟</span>
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
                Great Job, Sophia!
            </h1>
            <p className="text-3xl text-slate-600 mb-12 leading-relaxed">
                You've finished the test! Time to take a break.
                <br />
                <span className="font-bold text-indigo-600 block mt-4">
                    Please hand the iPad to your parents now.
                </span>
            </p>

            <div className="border-t-2 border-slate-100 pt-12">
                <p className="text-sm text-slate-400 mb-4 uppercase tracking-wider font-semibold">
                    For Parents Only
                </p>
                <Button
                    variant="outline"
                    onClick={onContinue}
                    className="text-slate-400 hover:text-slate-600"
                >
                    Continue to Dashboard
                </Button>
            </div>
        </motion.div>
    );
}
