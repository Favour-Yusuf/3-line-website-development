"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import TransactionsMap from "./transactions-map"
import WhoWeServeComponent from "./who_we_serve"

const ScrollTransitionComponents = () => {
  const [currentComponent, setCurrentComponent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const containerHeight = rect.height
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (containerHeight - window.innerHeight)))

      // Switch component when scroll progress reaches 50%
      if (scrollProgress > 0.5) {
        setCurrentComponent(1)
      } else {
        setCurrentComponent(0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* First Component - Transactions Map */}
      <div
        className={`fixed top-0 left-0 w-full h-screen transition-all duration-1000 ease-in-out ${
          currentComponent === 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <TransactionsMap />
      </div>

      {/* Second Component - Who We Serve */}
      <div
        className={`fixed top-0 left-0 w-full h-screen transition-all duration-1000 ease-in-out ${
          currentComponent === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <WhoWeServeComponent />
      </div>
    </div>
  )
}

export default ScrollTransitionComponents