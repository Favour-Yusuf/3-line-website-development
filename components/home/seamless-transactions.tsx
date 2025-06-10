"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useHasMounted } from "@/hooks/useHasMounted"

// Define the slide data
const slides = [
  {
    id: "seamless",
    title: "Seamless Transactions, Every Time!",
   
    bgColor: "#0A1A4A",
    image: "/slider1.png",
    imageAlt: "Seamless Transactions",
  },
  {
    id: "card",
    title: "Card Payments",
   
    bgColor: "#0A1A4A",
    image: "/slider2.png",
    imageAlt: "Card Payments",
  },
  {
    id: "qr",
    title: "QR Codes",

    bgColor: "#0A1A4A",
    image: "/slider3.png",
    imageAlt: "QR Codes",
  },
  {
    id: "ussd",
    title: "USSD",
 
    bgColor: "#0A1A4A",
    image: "/slider5.png",
    imageAlt: "USSD",
  },
  {
    id: "bank",
    title: "Bank Transfers",
   
    bgColor: "#4195FF",
    image: "/slider1.png",
    imageAlt: "Bank Transfers",
  },
]

const SeamlessTransactions = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  // Handle scroll-based progression
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const containerHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate scroll progress when container is in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
        const progress = Math.max(0, Math.min(1, visibleHeight / windowHeight))
        setScrollProgress(progress)

        // Calculate which card should be active based on scroll progress
        const cardIndex = Math.floor(progress * slides.length)
        const clampedIndex = Math.min(cardIndex, slides.length - 1)

        if (clampedIndex !== activeIndex) {
          setActiveIndex(clampedIndex)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeIndex])

  // Handle click on the stack (fallback interaction)
  const handleClick = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1)
    } else {
      setActiveIndex(0)
    }
  }

  // Update container height on window resize
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight)
      }
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)
    return () => window.removeEventListener("resize", updateHeight)
  }, [activeIndex])

  // Calculate the offset for each card in the stack with scroll-based animation
  const getCardStyle = (index: number) => {
    const offset = 12 // Offset in pixels between cards
    const scale = 0.96 // Scale factor for each card in the stack

    if (index < activeIndex) {
      // Cards that have been viewed slide up and fade out
      return {
        zIndex: 0,
        opacity: 0,
        y: -100 - (activeIndex - index) * 20,
        scale: 0.9,
      }
    } else if (index === activeIndex) {
      // Active card
      return {
        zIndex: slides.length,
        opacity: 1,
        y: 0,
        scale: 1,
      }
    } else {
      // Future cards stack behind with offset
      const stackPosition = index - activeIndex
      return {
        zIndex: slides.length - stackPosition,
        opacity: Math.max(0.3, 1 - stackPosition * 0.2),
        y: stackPosition * offset,
        scale: Math.pow(scale, stackPosition),
      }
    }
  }

  const hasMounted = useHasMounted()

  if (!hasMounted) return null

  return (
    <div className="relative w-full max-w-[95%] mx-auto px-4 md:py-8 lg:mb-[400px]">
      {/* Extended height container for scroll-based interaction */}
      <div className="h-[50vh]">
        <div className="sticky top-[20vh]">
          <div
            ref={containerRef}
            className="relative cursor-pointer"
            style={{ minHeight: "400px" }}
            onClick={handleClick}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {slides.map((slide, index) => (
                <motion.div
                  key={slide.id}
                  className="absolute top-0 left-0 w-full rounded-2xl overflow-hidden shadow-lg"
                  style={{
                    backgroundColor: slide.bgColor,
                    display: index < activeIndex - 2 ? "none" : "block", // Hide cards that are far out of view
                  }}
                  initial={{ y: 100, opacity: 0, scale: 0.9 }}
                  animate={getCardStyle(index)}
                  exit={{ y: -100, opacity: 0, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.6,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.imageAlt}
                      className="w-full h-auto"
                      width={1200}
                      height={400}
                      priority={index === activeIndex}
                    />

                    {/* Optional: Add text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                     
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-blue-500 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeamlessTransactions
