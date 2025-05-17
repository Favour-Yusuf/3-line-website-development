import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Load Inter (only regular 400)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
});

// Load Space Grotesk (400 for subheadline, 700 or 800 for headline)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "3line - Your Preferred Payment Partner",
  description:
    "We are transforming how financial institutions and businesses process payments with our secure, fast, and more accessible solutions for everyone.",
    icons: {
      icon: "/logo.png",
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
