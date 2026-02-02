import { Component } from 'solid-js';

interface ProgressBarProps {
    current: number;
    total: number;
}

const ProgressBar: Component<ProgressBarProps> = (props) => {
    return (
        <div class="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
            <div
                class="h-full bg-brand-600 transition-all duration-300 ease-out"
                style={{ width: `${((props.current + 1) / props.total) * 100}%` }}
            />
        </div>
    );
};

export default ProgressBar;
