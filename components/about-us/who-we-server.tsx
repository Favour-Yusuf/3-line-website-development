"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

const SolutionsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const solutions = [
    {
      id: "smes",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            stroke="#00D2FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
            stroke="#00D2FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "SMEs",
      description: "Get paid faster, access digital banking, and manage transactions in real-time.",
      href: "/solutions/smes",
    },
    {
      id: "enterprise",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
            stroke="#00D2FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
            stroke="#00D2FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Enterprise",
      description: "Optimize cash flow with secure, efficient, and scalable payment solutions.",
      href: "/solutions/enterprise",
    },
    {
      id: "individual",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke="#00D2FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="7" r="4" stroke="#00D2FF" strokeWidth="2" />
        </svg>
      ),
      title: "Individual",
      description: "Experience fast, easy, and convenient payment options for personal transactions.",
      href: "/solutions/individual",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solutions.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth
      sliderRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: "smooth",
      })
    }
  }, [currentSlide])

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 bg-[#EEF3FF]">
      <div className="relative">
        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 gap-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {solutions.map((solution, index) => (
            <div key={solution.id} className="flex-shrink-0 w-[calc(100vw-2rem)] max-w-sm snap-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col">
                {/* Icon */}
                <div className="bg-[#10142C] p-3 rounded-xl inline-flex items-center justify-center mb-4 w-12 h-12">
                  {solution.icon}
                </div>

                {/* Title Section */}
                <div className="mb-2">
                <span className="text-black text-[15px] inline-block bg-[#00D2FF] px-3 md:py-1 rounded-md font-bold rotate-[-15deg]">For</span>
                  <h3 className="text-xl font-bold text-[#10142C]">{solution.title} </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">{solution.description}</p>

                {/* CTA Button */}
                <div className="flex justify-end">
                  <Link
                    href={solution.href}
                    className="inline-flex items-center justify-end    hover:bg-[#4894F4]/90 text-[#000006] font-semibold px-8 py-3 rounded-full transition-colors text-base"
                  >
                    Get started
                    <Image className="bg-[#4894F4] rounded-full ml-[5px]" src="/sme_arrow.png" alt="user" width={60} height={60} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {solutions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#4894F4]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSlider
