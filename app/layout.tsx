import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoinQuest",
  description:
    "CoinQuest is a WebApp which provide financial education game-course-based learning for kids",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <Navbar />

        {/* Background */}
        <img
            src="/assets/background.png"
            alt="background image"
            className="fixed top-0 left-0 w-screen h-screen"
            draggable='false'
        />
        {children}
      </body>
    </html>
  );
}
