"use client"


import AboutUsPage from "@/components/about-us/about-us-page"
import MobileAboutUsPage from "@/components/about-us/mobile-about-us-page"
import { useMobile } from "@/hooks/useMobile"


export default function Home() {
  const isMobile = useMobile()

  return isMobile ? <MobileAboutUsPage /> : <AboutUsPage />
}
