'use client';

import { Button } from "@/shared/shadcn/ui/button";
import { CiSettings } from "react-icons/ci";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shared/shadcn/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shared/shadcn/ui/dialog"
import { useFormContext } from "react-hook-form";
import { ICreateTrainFormValues } from "../model";

export const CreateTrainHeader = () => {
    const {register} = useFormContext<ICreateTrainFormValues>()

    return (
        <>
            <div className='flex items-center text-white gap-3 lg:gap-8'>
                {/* Mobile */}
                <Dialog>
                    <DialogTrigger className='block lg:hidden p-1.5 bg-primary rounded-lg'>
                        <CiSettings className='w-7 h-7'/>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Параметры</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

                <div className="relative">
                    <input
                        type="text"
                        className="text-white font-semibold text-3xl border rounded-md p-2 w-full h-12 placeholder-blue-300 outline-none bg-transparent border-none"
                        placeholder="Название"
                        {...register('title')}
                    />
                    <div
                        className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-blue-500 to-transparent pointer-events-none"/>
                </div>

                {/* Desktop */}
                <div className='gap-6 hidden lg:flex select-none'>
                    <p className='text-lg'>Базис здоровья</p>
                    <DropdownMenu>
                        <DropdownMenuTrigger>День 1</DropdownMenuTrigger>
                        <DropdownMenuContent className='hidden lg:block'>
                            <DropdownMenuLabel>Выбрать день</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>Тренировка</DropdownMenuTrigger>
                        <DropdownMenuContent className='hidden lg:block'>
                            <DropdownMenuLabel>Выбрать день</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>Муж</DropdownMenuTrigger>
                        <DropdownMenuContent className='hidden lg:block'>
                            <DropdownMenuLabel>Выбрать пол</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Муж</DropdownMenuItem>
                            <DropdownMenuItem>Жен</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <Button className='rounded-xl'>Сохранить</Button>
        </>
    )
}
