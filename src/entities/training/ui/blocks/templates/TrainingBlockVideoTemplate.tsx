import { motion } from "framer-motion";

export const TrainingBlockVideoTemplate = () => {
    return (
        <div className='relative w-[100dvw] h-[100dvh] flex items-center justify-center'>
            <motion.div
                initial={{height: 0}}
                animate={{height: '50%'}}
                exit={{height: 0, transition: {delay: 0}}}
                transition={{delay: 0.1}}
                className='transform-gpu w-full bg-blue-500 rounded-b-full top-0 left-0 absolute -z-50'
            />
            <motion.video
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                onEnded={() => alert('end')}
                autoPlay
                width={900}
                className='will-change-transform transform-gpu'
            >
                <source src='http://localhost:8000/content/streaming/video'/>
            </motion.video>
        </div>
    )
}