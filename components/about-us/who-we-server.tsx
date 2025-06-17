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
    <Image src="/for_sme.png" alt="sme" width={50} height={50} />
      ),
      title: "SMEs",
      description: "Get paid faster, access digital banking, and manage transactions in real-time.",
      href: "/solutions/smes",
    },
    {
      id: "enterprise",
      icon: (
      <Image src="/for_enterprise.png" alt="sme" width={50} height={50} />
      ),
      title: "Enterprise",
      description: "Optimize cash flow with secure, efficient, and scalable payment solutions.",
      href: "/solutions/enterprise",
    },
    {
      id: "individual",
      icon: (
      <Image src="/for_institution.png" alt="sme" width={50} height={50} />
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
    }, 2000) // Change slide every 5 seconds

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
                <div className="mb-1">
                  {solution.icon}
                </div>

                {/* Title Section */}
                <div className="mb-2">
                <span className="text-black text-[18px] inline-block bg-[#00D2FF] px-4 py-1 rounded-md font-bold rotate-[-15deg]">For</span>
                  <h3 className="text-xl font-bold text-[#10142C]">{solution.title} </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">{solution.description}</p>

                {/* CTA Button */}
                <div className="flex justify-end">
                  <Link
                    href={solution.href}
                    className="inline-flex items-center justify-end    hover:bg-[#4894F4]/90 text-[#000066] font-semibold px-8 py-3 rounded-full transition-colors text-base"
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
        {/* <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button> */}

        {/* <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button> */}

        {/* Slide Indicators */}
        {/* <div className="flex justify-center mt-6 space-x-2">
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
        </div> */}
      </div>
    </section>
  )
}

export default SolutionsSlider
