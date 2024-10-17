'use client'

import { ReactElement, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TrainingBlockTextTemplate, TrainingBlockVideoTemplate } from "@/entities/training/ui/blocks/templates";


export default function WatchTrainPage() {
    const [currentComponent, setCurrentComponent] = useState(0);

    const data: Record<number, ReactElement> = {
        0: <TrainingBlockTextTemplate key="one" />,
        1: <TrainingBlockVideoTemplate key="two" />,
        2: <TrainingBlockVideoTemplate key="three" />,
        3: <TrainingBlockTextTemplate key="four" />
    }

    const nextComponent = () => {
        setCurrentComponent((prev) => (prev + 1) % 3);
    };

    return (
        <div className='w-[100dvw] h-[100dvh] overflow-hidden'>
            <AnimatePresence mode="wait">
                {data[currentComponent]}
            </AnimatePresence>

            <button onClick={nextComponent} className='absolute top-0'>Switch Component</button>
        </div>
    );
};
