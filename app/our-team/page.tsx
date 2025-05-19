"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const OurTeamComponent = () => {
  const [email, setEmail] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    setEmail("")
  }

  // Executive team data
  const executiveTeam = [
    {
      name: "Femi Omogbenigun",
      role: "Managing Director/CEO",
      image: "/exec1.png",
    },
    {
      name: "Chibuzor Sibigem",
      role: "Executive Director, Business",
      image: "/exec2.png",
    },
    {
      name: "Donald Owonikin",
      role: "Head of Finance",
      image: "/exec3.png",
    },
    {
      name: "Kolawole Omirin",
      role: "Chief Technology Officer",
      image: "/exec4.png",
    },
  ]

  // Combine all team leads into a single array for the slider
  const allTeamLeads = [
    // First row
    {
      name: "Stephanie Okpaka",
      role: "Administrative Lead",
      image: "/team-leads.png",
      imagePosition: "0% 0%",
    },
    {
      name: "Nneoma Udegbe",
      role: "Head, Product Management Officer",
      image: "/team-leads.png",
      imagePosition: "25% 0%",
    },
    {
      name: "Temitope Ogundare",
      role: "Legal & Regulatory Compliance Officer",
      image: "/team-leads.png",
      imagePosition: "50% 0%",
    },
    {
      name: "Tobiloba Animasaun",
      role: "Human Resource Lead",
      image: "/team-leads.png",
      imagePosition: "75% 0%",
    },
    {
      name: "Harrif Saliu",
      role: "Lead, Channel Engineering",
      image: "/team-leads.png",
      imagePosition: "100% 0%",
    },
    // Second row
    {
      name: "Titilope Bankole-Oki",
      role: "Service Delivery Manager",
      image: "/team-leads.png",
      imagePosition: "0% 50%",
    },
    {
      name: "Idris Apatira",
      role: "Lead, Network, System Admin & Support",
      image: "/team-leads.png",
      imagePosition: "25% 50%",
    },
    {
      name: "Bolaji Oyewumi",
      role: "Lead, Backend Engineer",
      image: "/team-leads.png",
      imagePosition: "50% 50%",
    },
    {
      name: "Ayotunde Ogundipe",
      role: "Lead, QA Engineer",
      image: "/team-leads.png",
      imagePosition: "75% 50%",
    },
    {
      name: "David Ayoola",
      role: "Lead, Frontend Engineer",
      image: "/team-leads.png",
      imagePosition: "100% 50%",
    },
    // Additional lead
    {
      name: "John Dahunsi",
      role: "Sales & Partnership Manager",
      image: "/team-leads.png",
      imagePosition: "0% 100%",
    },
  ]

  // For desktop view, split into rows
  const teamLeadsRow1 = allTeamLeads.slice(0, 5)
  const teamLeadsRow2 = allTeamLeads.slice(5, 10)
  const additionalLead = allTeamLeads[10]

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === allTeamLeads.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [allTeamLeads.length])

  // Handle slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === allTeamLeads.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? allTeamLeads.length - 1 : prev - 1))
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

  // Job openings
  const jobOpenings = [
    {
      title: "Engineering Manager",
      type: "Full-time",
      location: "Lagos",
    },
    {
      title: "Customer Care Agent",
      type: "Full-time",
      location: "Remote",
    },
    {
      title: "Customer Care Agent",
      type: "Part-time",
      location: "Hybrid",
    },
  ]

  return (
    <main className="min-h-screen bg-[#EEF3FF] md:px-[25px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="inline-block bg-[#00D2FF] text-[#0A1A4A] px-3 py-1 rounded-md font-medium mb-4">
                  Our Team
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Who we are</h1>
                <p className="text-gray-300 mb-8 max-w-lg">
                  At 3Line, we are more than a company, we are a team of innovators, problem-solvers, and financial
                  inclusion specialists.
                </p>
              </div>
              <div className="w-full md:w-1/2 relative h-60 md:h-80">
                <div className="absolute inset-0">
                  <Image src="/team-hero1.png" alt="Our Team" fill className="object-contain" />
                </div>
                <div className="absolute top-0 right-0 -z-10">
                  <Image src="/team-hero2.png" alt="Decorative element" width={300} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-[#0A1A4A] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 9V15M9 12H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To become Africa's leading financial services provider, powering the continent's payments while ensuring
                financial inclusion for businesses, banks, and communities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-[#0A1A4A] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 9V15M9 12H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To build innovative and reliable payment solutions that make everyday transactions simple, secure, and
                more accessible for businesses, communities, and individuals worldwide.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Innovation</h4>
                  <p className="text-sm text-gray-600">
                    We constantly push boundaries to deliver cutting-edge solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Integrity</h4>
                  <p className="text-sm text-gray-600">We operate with transparency and honesty.</p>
                </div>
                <div>
                  <h4 className="font-medium">Inclusion</h4>
                  <p className="text-sm text-gray-600">We believe in financial access for all.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Meet our executive team</h2>

          {/* Mobile layout (stacked cards) */}
          <div className="flex flex-col space-y-4 md:hidden">
            {executiveTeam.map((member, index) => (
              <div key={index} className="flex bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="w-2/5 relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="w-3/5 p-4 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop layout (grid) */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {executiveTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-64 rounded-t-xl overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <Link href="https://linkedin.com" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leads */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our leads</h2>

          {/* Mobile Slider */}
          <div
            className="relative md:hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-xl">
              <div className="relative h-[350px] bg-white shadow-sm">
                {/* Current slide */}
                <div className="h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(${allTeamLeads[currentSlide].image})`,
                        backgroundPosition: allTeamLeads[currentSlide].imagePosition,
                        backgroundSize: "500% 300%",
                      }}
                    ></div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-center items-center text-center">
                    <h3 className="text-lg font-semibold">{allTeamLeads[currentSlide].name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{allTeamLeads[currentSlide].role}</p>
                    <Link href="https://linkedin.com" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                {/* Navigation buttons */}
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {allTeamLeads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop layout - First row */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {teamLeadsRow1.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48 rounded-t-xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundPosition: member.imagePosition,
                      backgroundSize: "500% 300%",
                    }}
                  ></div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold">{member.name}</h3>
                  <p className="text-xs text-gray-600">{member.role}</p>
                  <Link href="https://linkedin.com" className="text-blue-600 hover:text-blue-800 mt-1 inline-block">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop layout - Second row */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {teamLeadsRow2.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48 rounded-t-xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundPosition: member.imagePosition,
                      backgroundSize: "500% 300%",
                    }}
                  ></div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold">{member.name}</h3>
                  <p className="text-xs text-gray-600">{member.role}</p>
                  <Link href="https://linkedin.com" className="text-blue-600 hover:text-blue-800 mt-1 inline-block">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop layout - Additional lead */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-48 rounded-t-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${additionalLead.image})`,
                    backgroundPosition: additionalLead.imagePosition,
                    backgroundSize: "500% 300%",
                  }}
                ></div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold">{additionalLead.name}</h3>
                <p className="text-xs text-gray-600">{additionalLead.role}</p>
                <Link href="https://linkedin.com" className="text-blue-600 hover:text-blue-800 mt-1 inline-block">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-[#0A1A4A] rounded-xl overflow-hidden p-6 md:p-12 relative">
            {/* Background decorative element */}
            <div className="absolute bottom-0 right-0 z-0">
              <Image src="/team-join.png" alt="Decorative element" width={300} height={300} />
            </div>

            <div className="relative z-10 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Team</h2>
              <p className="text-gray-300 mb-6">
                We're an ambitious team shaping the future of payments in Africa. Join our expanding offices and join us
                in making financial access simpler for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Current openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
                >
                  Apply
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default OurTeamComponent
