import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/main/Navbar";
import Starfield from "react-starfield";

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
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />

        {children}
      </body>
    </html>
  );
}
