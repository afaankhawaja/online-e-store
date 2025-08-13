import type { Metadata } from "next";
import { Lato, Abril_Fatface } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril-fatface",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Aura & Co",
  description: "we sell everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${lato.variable} ${abrilFatface.variable} antialiased`}
      >
        <div className="sticky top-0">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
