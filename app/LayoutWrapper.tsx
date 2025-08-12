// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // You can adjust this to match other routes you want to exclude
  const hideLayout = pathname.startsWith("/studio");

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
