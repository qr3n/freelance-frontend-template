'use client';

import { motion } from "framer-motion";
import { useState } from "react";

const items = [
    'Эспандер тр.',
    'Резинка',
    'Коврик',
    'Стул',
    'Скамья',
    'Гантели',
    'Штанга'
]

const CheckboxWithAnimation = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex items-center space-x-2">
            <motion.div
                onClick={toggleCheckbox}
                className="w-9 h-9 bg-blue-500 rounded-xl cursor-pointer flex justify-center items-center"
                whileTap={{scale: 0.9}}
                animate={{scale: 1}}
                transition={{type: "spring", stiffness: 300, damping: 10, duration: 0.1}}
            >
                {isChecked && (
                    <motion.svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path
                            d="M7 14L10 17L17 9" // Галочка остается уменьшенной
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{pathLength: 0}}
                            animate={{pathLength: 1}}
                            transition={{duration: 0.2}}
                        />
                    </motion.svg>
                )}
            </motion.div>
        </div>
    );
};

export const CreateTrainEquipment = () => {
    return (
        <>
            {items.map(item => (
                <div key={item} className='flex text-sm items-center gap-2 flex-col justify-center cursor-pointer'>
                    <CheckboxWithAnimation/>
                    {item}
                </div>
            ))}
        </>
    )
}
