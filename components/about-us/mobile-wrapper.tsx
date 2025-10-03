// components/about-us/mobile-wrapper.tsx
"use client"

import { useMobile } from "@/hooks/useMobile"

export default function MobileWrapper({
  desktop,
  mobile,
}: {
  desktop: React.ReactNode
  mobile: React.ReactNode
}) {
  const isMobile = useMobile()
  return isMobile ? mobile : desktop
}
