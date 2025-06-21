"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function TeamLeadsSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Team leads data with individual images
  const teamLeadsRow1 = [
    {
      name: "Stephanie Okpaka",
      role: "Administrative Lead",
      image: "/stephanie.png",
      linkedin: "https://linkedin.com/in/stephanie-okpaka",
    },
    {
      name: "Nneoma Udegbe",
      role: "Head, Product Management Officer",
      image: "/Nneoma.png",
      linkedin: "https://linkedin.com/in/nneoma-udegbe",
    },
    {
      name: "Temitope Ogundare",
      role: "Legal & Regulatory Compliance Officer",
      image: "/temitope.png",
      linkedin: "https://linkedin.com/in/temitope-ogundare",
    },
    {
      name: "Tobiloba Animasaun",
      role: "Human Resource Lead",
      image: "/tobiloba.png",
      linkedin: "https://linkedin.com/in/tobiloba-animasaun",
    },
    {
      name: "Harrif Saliu",
      role: "Lead, Channel Engineering",
      image: "/Hariff.png",
      linkedin: "https://linkedin.com/in/harrif-saliu",
    },
    {
      name: "Titilope Bankole-Oki",
      role: "Service Delivery Manager",
      image: "/Titilope.png",
      linkedin: "https://linkedin.com/in/titilope-bankole",
    },
    {
      name: "Idris Apatira",
      role: "Lead, Network, System Admin & Support",
      image: "/idris.png",
      linkedin: "https://linkedin.com/in/idris-apatira",
    },
    {
      name: "Bolaji Oyewumi",
      role: "Lead, Backend Engineer",
      image: "/Bolaji.png",
      linkedin: "https://linkedin.com/in/bolaji-oyewumi",
    },
    {
      name: "Ayotunde Ogundipe",
      role: "Lead, QA Engineer",
      image: "/Ayotunde.png",
      linkedin: "https://linkedin.com/in/ayotunde-ogundipe",
    },
    {
      name: "David Ayoola",
      role: "Lead, Frontend Engineer",
      image: "/david.png",
      linkedin: "https://linkedin.com/in/david-ayoola",
    },
    {
      name: "John Dahunsi",
      role: "Sales & Partnership Manager",
      image: "/john.png",
      linkedin: "https://linkedin.com/in/john-dahunsi",
    },
  ]

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === teamLeadsRow1.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [teamLeadsRow1.length])

  // Handle slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamLeadsRow1.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamLeadsRow1.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left, go to next slide
      nextSlide()
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right, go to previous slide
      prevSlide()
    }
  }

  return (
    <section className="">
      <div className="container mx-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our leads</h2>

        {/* Mobile Slider */}
        <div
          className="relative md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden rounded-xl">
            <div className="relative h-[450px] text-black bg-white shadow-sm">
              {/* Current slide */}
              <div
                className="h-full flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredCard(currentSlide)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src={teamLeadsRow1[currentSlide].image || "/placeholder.svg"}
                    alt={teamLeadsRow1[currentSlide].name}
                    fill
                    className={`object-cover object-center transition-transform duration-300 ${
                      hoveredCard === currentSlide ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>
                <div className="flex-grow flex flex-col justify-start items-start text-left ml-[20px] mt-[20px]">
                  <h3 className="text-lg font-semibold text-left  mb-2">{teamLeadsRow1[currentSlide].name}</h3>
                  <p className="text-sm text-left  mb-4">{teamLeadsRow1[currentSlide].role}</p>
                  <Link
                    href={teamLeadsRow1[currentSlide].linkedin}
                    className={`inline-flex items-center gap-2 transition-all duration-300 ${
                      hoveredCard === currentSlide
                        ? "text-white opacity-100 transform scale-110"
                        : "text-blue-400 opacity-80"
                    }`}
                  >
                 
                    {hoveredCard === currentSlide && (
                      <span className="text-sm font-medium bg-blue-600 px-2 py-1 rounded">See LinkedIn profile</span>
                    )}
                  </Link>
                </div>
              </div>

            
            </div>
          </div>

        </div>

       
      </div>
    </section>
  )
}
