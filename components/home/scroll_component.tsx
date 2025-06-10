"use client"

import { useState, useEffect, useRef } from "react"
import TransactionsMap from "./transactions-map"
import WhoWeServeComponent from "./who_we_serve"

const ScrollTransitionComponents = () => {
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
    <div ref={containerRef} className="relative h-[140vh] overflow-hidden">
      <div className="sticky top-0 h-screen w-full">
        {/* First Component - Transactions Map */}
        <div
          className="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${scrollProgress > 0.5 ? "-100%" : "0%"})`,
          }}
        >
          <TransactionsMap />
        </div>

        {/* Second Component - Who We Serve */}
        <div
          className="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${scrollProgress > 0.5 ? "0%" : "100%"})`,
          }}
        >
          <WhoWeServeComponent />
        </div>
      </div>
    </div>
  )
}

export default ScrollTransitionComponents
