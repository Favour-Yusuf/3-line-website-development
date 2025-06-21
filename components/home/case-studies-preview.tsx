"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const CaseStudiesPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSliderMode, setIsSliderMode] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const caseStudies = [
    {
      id: 1,
      image: "/unity.png",
      logo: "/unity_logo.png",
      logoAlt: "Unity Bank Logo",
      title: "How Unity Bank Expanded to Rural Areas with Gravity",
      date: "Jan 31, 2025",
      imageAlt: "Market in Africa",
    },
    {
      id: 2,
      image: "/standard.png",
      logo: "/standard_chartered_bank.png",
      logoAlt: "Standard Chartered Logo",
      title: "Medusa in Action: How a Retail Chain Cut Cash Handling by 70%",
      date: "Jan 31, 2025",
      imageAlt: "Venice Canal",
    },
    {
      id: 3,
      image: "/inter.png",
      logo: "/interswitch.png",
      logoAlt: "Interswitch Logo",
      title: "Medusa in Action: How a Retail Chain Cut Cash Handling by 70%",
      date: "Jan 31, 2025",
      imageAlt: "Venice Canal",
    },
  ]

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSliderMode(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (sliderRef.current && isSliderMode) {
      const slideWidth = sliderRef.current.offsetWidth
      sliderRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: "smooth",
      })
    }
  }, [currentSlide, isSliderMode])

  useEffect(() => {
    if (!isSliderMode) return
  
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
    }, 2000) // every 2 seconds
  
    return () => clearInterval(interval)
  }, [isSliderMode, caseStudies.length])
  

  return (
    <section className="relative w-full overflow-hidden bg-[#EEF3FF] py-16 md:px-[30px]">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#D2E1FF] rounded-full opacity-30 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#D2E1FF] opacity-20 -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1A4A] font-grotesk text-headline">
            Case studies
          </h2>
          <Link href="#" className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium">
            <span className=" text-[#000066]">See more</span>
            <span className="bg-transparent rounded-full p-1">
              <ArrowRight className="h-4 w-4 text-[#000066]" />
            </span>
          </Link>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* Tablet and Mobile Slider Layout */}
        <div className="lg:hidden relative">
          {/* Slider Navigation Buttons */}
         

          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0 px-2">
                  <CaseStudyCard study={study} />
                </div>
              ))}
            </div>
          </div>

         
        </div>

        {/* Touch/Swipe Support for Mobile */}
        <div className="lg:hidden">
          <div
            className="touch-pan-x"
            onTouchStart={(e) => {
              const touch = e.touches[0]
              const startX = touch.clientX

              const handleTouchMove = (e: TouchEvent) => {
                const touch = e.touches[0]
                const diffX = startX - touch.clientX

                if (Math.abs(diffX) > 50) {
                  if (diffX > 0 && currentSlide < caseStudies.length - 1) {
                    nextSlide()
                  } else if (diffX < 0 && currentSlide > 0) {
                    prevSlide()
                  }
                  document.removeEventListener("touchmove", handleTouchMove)
                }
              }

              document.addEventListener("touchmove", handleTouchMove)

              const handleTouchEnd = () => {
                document.removeEventListener("touchmove", handleTouchMove)
                document.removeEventListener("touchend", handleTouchEnd)
              }

              document.addEventListener("touchend", handleTouchEnd)
            }}
          />
        </div>
      </div>
    </section>
  )
}

// Case Study Card Component
const CaseStudyCard = ({ study }: { study: any }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image src={study.image || "/placeholder.svg"} alt={study.imageAlt} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="h-8 w-20 relative">
            <Image src={study.logo || "/placeholder.svg"} alt={study.logoAlt} fill className="object-contain" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#0A1A4A]">{study.title}</h3>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500 text-sm">{study.date}</p>
          <Link href="#" className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium">
            <span className="mr-2">Read case study</span>
            <span className="bg-blue-500 rounded-full p-1">
              <ArrowRight className="h-4 w-4 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesPreview
