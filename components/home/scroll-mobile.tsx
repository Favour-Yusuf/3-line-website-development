"use client"

import { useState, useEffect, useRef } from "react"

import TransactionsPage from "./TransactionsPage_mobile"
import WhoWeServePageMobile from "./WhoWeServePageMobile"

const ScrollMobile = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const containerHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate scroll progress when container is in view
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const progress = Math.max(0, Math.min(1, -rect.top / (containerHeight - windowHeight)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative h-[110vh] overflow-hidden my-[20px]">
      <div className="sticky top-0 h-screen w-full">
        {/* First Component - Transactions Map */}
        <div
          className="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${scrollProgress > 0.5 ? "-100%" : "0%"})`,
          }}
        >
          <TransactionsPage />
        </div>

        {/* Second Component - Who We Serve */}
        <div
          className="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${scrollProgress > 0.5 ? "0%" : "100%"})`,
          }}
        >
          <WhoWeServePageMobile />
        </div>
      </div>
    </div>
  )
}

export default ScrollMobile
