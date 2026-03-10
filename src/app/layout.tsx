import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cogniversity | AI-Powered Learning Platform",
  description: "Create personalized course videos with the power of artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.variable} font-sans antialiased text-navy`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
