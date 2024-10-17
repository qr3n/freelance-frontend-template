'use client';

import { Button } from "@/shared/shadcn/ui/button";
import Image from "next/image";
import { addAudio, addPause, playAudio } from "./assets";
import { DraggableList } from "@/shared/ui/draggable-list/ui/DraggableList";

interface IAudio {
    id: string,
    content: string
}

const initial = Array.from({ length: 5 }, (_, k) => ({
    id: `id-${k}`,
    content: `Quote ${k}`
}));


const Audio = ({ audio }: { audio: IAudio }) => {
    return (
        <div className='items-center flex gap-3 select-none w-full p-4 bg-white rounded-xl shadow-xl'>
            <h1>{audio.content}</h1>
            <Button className='p-1.5' variant='ghost'>
                <Image src={playAudio} alt='play-audio' width={26}/>
            </Button>
        </div>
    )
}

export const CreateTrainAudio = () => {
    return (
        <>
            <div className='flex flex-col gap-2'>
                <Button className='flex gap-2 justify-start text-[#777] pl-0' variant='ghost'>
                    <Image src={addAudio} alt='add-audio' width={32}/>
                    Добавить аудио
                </Button>

                <Button className='flex gap-2 justify-start text-[#777] pl-1' variant='ghost'>
                    <Image src={addPause} alt='add-pause' width={26}/>
                    Добавить паузу
                </Button>
            </div>

            <div className='flex flex-col lg:px-8'>
                <div className='flex flex-wrap gap-8 items-center justify-between'>
                    <Button variant='ghost' className='text-[#777] gap-2 flex'>
                        <Image src={playAudio} alt='play-audio' width={26}/>
                        Воспроизвести полностью
                    </Button>
                    <div className='text-[#777] flex items-center gap-2 text-sm'>
                        <h1>Суммарное время</h1>
                        <div className='py-2 px-3 border-blue-500 text-blue-500 rounded-xl border-2 font-semibold'>
                            1200
                        </div>
                        <p>сек </p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-6'>
                    <DraggableList
                        items={initial}
                        renderItem={(audio) => <Audio audio={audio} />}
                    />
                </div>
            </div>

            <div className='flex flex-col lg:mt-2.5 text-[#777]'>
                <h1 className='text-sm'>Громкость</h1>
                <div className='flex mt-4 gap-6 flex-wrap'>
                    <div>
                        <div className='w-12 h-12 text-white bg-blue-500 text-center flex items-center justify-center font-semibold rounded-xl'>3</div>
                        <p className='text-sm mt-1'>Диктор</p>
                    </div>
                    <div>
                        <div className='w-12 h-12 text-white bg-blue-500 text-center flex items-center justify-center font-semibold rounded-xl'>0,7</div>
                        <p className='text-sm mt-1'>Музыка</p>
                    </div>
                </div>
            </div>
        </>
    )
}