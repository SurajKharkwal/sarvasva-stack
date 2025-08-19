import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={` ${geistSans.variable} ${geistMono.variable} relative flex flex-col items-center w-full min-h-screen  text-neutral-900 dark:text-neutral-100 dark:bg-neutral-950`}
    >
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
