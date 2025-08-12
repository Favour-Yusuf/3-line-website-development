// app/layout.tsx or app/globals.tsx (wherever you placed your layout)

import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper"; // <-- Import the wrapper

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "3line - Your Preferred Payment Partner",
  description:
    "We are transforming how financial institutions and businesses process payments with our secure, fast, and more accessible solutions for everyone.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
