'use client';

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            { children }
        </QueryClientProvider>
    )
}
