'use client';

import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const errorInterceptor = (error: AxiosError) => {
    switch (error.code) {
        case '500':
            toast.error('Упс! Мы уже разбираемся...')
            break
    }
}
