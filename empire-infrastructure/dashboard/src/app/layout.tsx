import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ErrorBoundary } from "@/components/error-boundary";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EMPIRE DYNASTY - Hormozi Business Optimization Framework",
  description: "Complete Hormozi framework for business growth and optimization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <Navbar />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
