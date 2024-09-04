import { Providers } from "@/providers";
import { PropsWithChildren } from "react";
import { font, metadata } from "@/app/meta";
export { metadata }
import "./globals.css";
import "./application.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  );
}
