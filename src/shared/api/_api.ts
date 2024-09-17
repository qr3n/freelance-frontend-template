'use client';

import axios from 'axios'

import { QueryClient } from "@tanstack/react-query";
import { errorInterceptor } from "./interceptors";

export const api = axios.create({
    baseURL: process.env.API_URL,
    timeout: 10000,
})

api.interceptors.response.use(
    response => response,
        error => errorInterceptor(error)
)

export const queryClient = new QueryClient()
