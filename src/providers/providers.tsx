'use client';

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api";
import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                { children }
            </RecoilRoot>
        </QueryClientProvider>
    )
}
