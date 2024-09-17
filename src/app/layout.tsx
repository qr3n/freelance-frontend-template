import { Providers } from "@/providers";
import { PropsWithChildren } from "react";
import { font, metadata } from "@/app/meta";
export { metadata }
import "./globals.css";
import "./application.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster/>
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  );
}
