import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Starfield from "@/components/main/Starfield";
// import Starfield from "react-starfield";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syahban Portfolio",
  description: "This is Syahban'S portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014]`}>
        <Navbar />
        <Starfield />
        {children}
      </body>
    </html>
  );
}
