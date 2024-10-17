import {
    CreateTrainContext,
    CreateTrainHeader,
    CreateTrainEquipment,
    CreateTrainAudio
} from "@/features/training/create";
import Image from "next/image";
import { audio, equipment } from './assets'

export default function AdminCreateTrainPage() {
    return (
        <CreateTrainContext>
            <div className='w-full p-4 bg-blue-500 flex justify-between items-center sticky top-0'>
                <CreateTrainHeader/>
            </div>

            <section className='py-8 bg-[#f7f6f8]'>
                <section className='px-8'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>Параметры всей тренировки</h1>

                    <div className='mt-8 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8'>
                        <div className='flex items-center gap-3'>
                            <Image src={equipment} alt={'equipment'} width={38} height={38}/>
                            <h1 className='text-xl font-semibold'>Оборудование</h1>
                        </div>
                        <div className='flex flex-wrap gap-3 lg:gap-6'>
                            <CreateTrainEquipment/>
                        </div>
                    </div>

                    <div className='mt-12'>
                        <div className='flex items-center gap-3'>
                            <Image src={audio} alt={'equipment'} width={38} height={38}/>
                            <h1 className='text-xl font-semibold'>Аудио</h1>
                        </div>
                        <div className='flex gap-8 mt-6 flex-col lg:flex-row'>
                            <CreateTrainAudio/>
                        </div>
                    </div>
                </section>

                <div className='px-8 w-full mt-16 bg-[#f7f6f8] p-4 flex justify-between items-center sticky top-[72px]'>
                    Test
                </div>

                <section className='px-8'>
                    <div className='bg-white p-4 rounded-2xl shadow-2xl'>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                        <h1 className='text-xl font-semibold'>Аудио</h1>
                    </div>

                </section>
            </section>
        </CreateTrainContext>
    )
}
