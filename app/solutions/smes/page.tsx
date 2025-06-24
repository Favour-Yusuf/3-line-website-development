
"use client"

import MobileSmesPage from "@/components/sme/mobile-smes-page"
import SmesPage from "@/components/sme/smes-page"
import { useMobile } from "@/hooks/useMobile"


export default function Home() {
  const isMobile = useMobile()

  return isMobile ? <MobileSmesPage /> : <SmesPage />
}

