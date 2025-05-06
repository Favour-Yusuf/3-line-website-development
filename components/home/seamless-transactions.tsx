"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useHasMounted } from "@/hooks/useHasMounted";




// Define the slide data
const slides = [
  {
    id: "seamless",
    title: "Seamless Transactions, Every Time!",
    description:
      "At 3Line, we understand that customers want flexibility when it comes to payments. That's why we provide multiple channels to ensure that your customers can pay in the way that's most convenient for them.",
    bgColor: "#0A1A4A",
    image: "/slider1.png",
    imageAlt: "Seamless Transactions",
  },
  {
    id: "card",
    title: "Card Payments",
    description:
      "Whether it's debit, credit, or prepaid cards, we make it easy for your customers to pay securely and efficiently.",
    bgColor: "#0A1A4A",
    image: "/slider2.png",
    imageAlt: "Card Payments",
  },
  {
    id: "qr",
    title: "QR Codes",
    description:
      "For customers without smartphones or internet access, USSD provides a simple and secure way to make payments.",
    bgColor: "#0A1A4A",
    image: "/slider3.png",
    imageAlt: "QR Codes",
  },
  {
    id: "ussd",
    title: "USSD",
    description: "Provides a simple and secure way to make payments.",
    bgColor: "#0A1A4A",
    image: "/slider5.png",
    imageAlt: "USSD",
  },
  {
    id: "bank",
    title: "Bank Transfers",
    description: "Fast, reliable transfers that ensure your customers can pay directly from their bank accounts.",
    bgColor: "#4195FF",
    image: "/slider1.png",
    imageAlt: "Bank Transfers",
  },
]

const SeamlessTransactions = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  // Handle click on the stack
  const handleClick = () => {
    if (activeIndex < slides.length - 1) {
      setDirection(1)
      setActiveIndex(activeIndex + 1)
    } else {
      // Reset to first slide when reaching the end
      setDirection(-1)
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

  // Calculate the offset for each card in the stack
  const getCardStyle = (index: number) => {
    const isActive = index === activeIndex
    const offset = 8 // Offset in pixels between cards
    const scale = 0.98 // Scale factor for each card in the stack

    if (index < activeIndex) {
      // Cards that have been viewed are hidden
      return {
        zIndex: 0,
        opacity: 0,
        y: "-100%",
      }
    } else {
      // Current and upcoming cards
      return {
        zIndex: slides.length - (index - activeIndex),
        opacity: 1,
        y: (index - activeIndex) * offset,
        scale: Math.pow(scale, index - activeIndex),
      }
    }
  }
  const hasMounted = useHasMounted();

if (!hasMounted) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
      <div
        ref={containerRef}
        className="relative cursor-pointer"
        style={{ height: `${containerHeight}px`, minHeight: "300px" }}
        onClick={handleClick}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="absolute top-0 left-0 w-full rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundColor: slide.bgColor,
                display: index < activeIndex - 1 ? "none" : "block", // Hide cards that are far out of view
              }}
              initial={{ y: "100%", opacity: 0 }}
              animate={getCardStyle(index)}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
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
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-8 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={(e) => {
              e.stopPropagation()
              setDirection(index > activeIndex ? 1 : -1)
              setActiveIndex(index)
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <br />
      <br />
      <br />

     
    </div>
  )
}

export default SeamlessTransactions
