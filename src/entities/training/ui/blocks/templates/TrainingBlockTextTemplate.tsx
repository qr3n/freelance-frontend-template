import { motion } from "framer-motion";
import { Button } from "@/shared/shadcn/ui/button";

export const TrainingBlockTextTemplate = () => {
    return (
        <div className='relative w-[100dvw] h-[100dvh] flex items-center justify-center'>
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: '50%' }}
                exit={{ height: 0, transition: { delay: 0 } }}
                transition={{ delay: 0.1 }}
                className='transform-gpu w-full bg-blue-500 rounded-b-full top-0 left-0 absolute -z-50'
            />
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{scale: 0, transition: { delay: 0.1 }}}
                transition={{ delay: 0.15 }}
                className='
                transform-gpu
                shadow-2xl
                bg-[#f2f6fe]
                rounded-full
                border
                z-50
                p-4
                '
            >
                <div className='border-4 rounded-full border-blue-500 w-[250px] h-[250px]'>

                </div>
            </motion.div>
            <div className='fixed bottom-8'>
                <motion.div
                    initial={{transform: 'translateY(200px)'}}
                    animate={{transform: 'translateY(0px)'}}
                    exit={{transform: 'translateY(200px)', transition: { delay: 0.2 }}}
                    transition={{delay: 0.2}}
                >
                    <Button className='bg-blue-500'>ПРОДОЛЖИТЬ</Button>
                </motion.div>
            </div>
        </div>
    )
}