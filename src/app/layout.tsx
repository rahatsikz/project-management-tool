import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { ThemeProviders } from "@/lib/ThemeProvider";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "TaskHacks",
  description: "Made by Dev-Hacks Team",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <Providers>
      <html lang='en'>
        <body className={`${poppins.className} bg-main-background `}>
          <ThemeProviders>
            {/* Navbar will be here  */}
            <Toaster />
            <div>{children}</div>
          </ThemeProviders>
        </body>
      </html>
    </Providers>
  );
}
