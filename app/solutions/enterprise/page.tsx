"use client"

import EnterprisePage from "@/components/enterprises/enterprise-page"
import MobileEnterprisePage from "@/components/enterprises/mobile-enterprise-page"

import { useMobile } from "@/hooks/useMobile"


export default function Home() {
  const isMobile = useMobile()

  return isMobile ? <MobileEnterprisePage /> : <EnterprisePage />
}
