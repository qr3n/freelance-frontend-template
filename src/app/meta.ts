import { Inter } from "next/font/google";
import type { Metadata } from "next";

export const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: process.env.METADATA_TITLE,
    description: process.env.METADATA_DESCRIPTION,
};
