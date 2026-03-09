import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khaled | Epic AI Bewerbung",
  description: "Interaktive Bewerbung von Khaled für Epic AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-accent selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
