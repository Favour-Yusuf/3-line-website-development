"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const PartnersSection = () => {
  const partners = [
    { name: "Interswitch", logo: "/interswitch.png", width: 120, height: 40 },
    { name: "Union Bank", logo: "/union_bank.png", width: 120, height: 40 },
    { name: "Access Bank", logo: "/access_bank.png", width: 120, height: 40 },
    { name: "TAJ Bank", logo: "/taj.png", width: 120, height: 40 },
    { name: "UBA", logo: "/uba.png", width: 120, height: 40 },
    { name: "Zenith", logo: "/zenith.png", width: 80, height: 40 },
    { name: "Alerzo", logo: "/alerzo_main.png", width: 100, height: 40 },
    { name: "NIBSS", logo: "/nibss.png", width: 120, height: 40 },
    { name: "Fidelity", logo: "/fidelity.png", width: 120, height: 40 },
    { name: "providus_bank", logo: "/providus_bank.png", width: 120, height: 40 },
    { name: "parralex_logo", logo: "/parralex_logo.png", width: 120, height: 40 },
    { name: "sterling_bank", logo: "/sterling_bank.png", width: 120, height: 40 },
    { name: "optimusbank", logo: "/optimusbank.png", width: 120, height: 40 },
    { name: "nownow", logo: "/nownow.JPG", width: 120, height: 40 },
    { name: "palmpay", logo: "/palmpay.png", width: 120, height: 40 },
    // { name: "palmpay", logo: "/fidelity_bank.JPG", width: 120, height: 40 },
   
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visiblePartners, setVisiblePartners] = useState(9)
  const [autoplay, setAutoplay] = useState(true)
  const [shouldSlide, setShouldSlide] = useState(partners.length > visiblePartners)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Determine how many partners to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      let newVisibleCount = 10

      if (window.innerWidth < 640) {
        newVisibleCount = 3
      } else if (window.innerWidth < 768) {
        newVisibleCount = 4
      } else if (window.innerWidth < 1024) {
        newVisibleCount = 9
      } else if (window.innerWidth < 1280) {
        newVisibleCount = 10
      } else {
        newVisibleCount = 10
      }

      setVisiblePartners(newVisibleCount)
      setShouldSlide(partners.length > newVisibleCount)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Autoplay functionality - only if sliding is needed
  useEffect(() => {
    if (autoplay && shouldSlide) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 5000) // Increased to 5 seconds for a more subtle transition
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, currentIndex, visiblePartners, shouldSlide])

  // Pause autoplay on hover
  const pauseAutoplay = () => setAutoplay(false)
  const resumeAutoplay = () => setAutoplay(true)

  const nextSlide = () => {
    if (!shouldSlide) return

    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      return nextIndex >= partners.length ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    if (!shouldSlide) return

    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1
      return nextIndex < 0 ? partners.length - 1 : nextIndex
    })
  }

  const goToSlide = (index: number) => {
    if (!shouldSlide) return
    setCurrentIndex(index)
  }

  // Create a circular array of partners for infinite scrolling effect
  const getVisiblePartners = () => {
    if (!shouldSlide) return partners

    const result = []
    for (let i = 0; i < visiblePartners; i++) {
      const index = (currentIndex + i) % partners.length
      result.push(partners[index])
    }
    return result
  }

  return (
    <div
      className="relative w-full py-8 bg-white  rounded-xl shadow-sm"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
     
      {/* Navigation Arrows - only shown when sliding is needed */}
      {shouldSlide && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 z-10 bg-white/80 rounded-full p-1 shadow-sm hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 text-gray-500" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 z-10 bg-white/80 rounded-full p-1 shadow-sm hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </button>
        </>
      )}

      {/* Slider Container */}
      <div className="overflow-hidden mx-6">
        <div
          ref={sliderRef}
          className="flex items-center justify-center gap-4 md:gap-12 transition-transform duration-500 ease-in-out "
          style={{ transform: `translateX(0)` }}
        >
          {getVisiblePartners().map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex-shrink-0 flex items-center justify-center h-16">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={partner.width}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicator Dots - only shown when sliding is needed */}
      {/* {shouldSlide && (
        <div className="flex justify-center mt-4 gap-1">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 w-3" : "bg-gray-300 w-1.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )} */}
    </div>
  )
}

export default PartnersSection
