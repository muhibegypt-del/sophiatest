import React from 'react';
import { cn } from '@/lib/utils';

interface QuizLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export function QuizLayout({ children, className }: QuizLayoutProps) {
    return (
        <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 sm:p-8">
            {/* iPad-ish Container */}
            <div
                className={cn(
                    "w-full max-w-[1024px] min-h-[768px] bg-white rounded-[32px] shadow-2xl overflow-hidden relative border-8 border-slate-900/5",
                    "flex flex-col",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}
