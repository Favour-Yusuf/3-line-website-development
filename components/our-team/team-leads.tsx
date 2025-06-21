"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import { useState } from "react"
import TeamLeadsSliderSection from "./teams-mobiles-slider"

export default function TeamLeadsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
      linkedin: "https://linkedin.com/in/harrif-saliu",
    },
    {
      name: "Idris Apatira",
      role: "Lead, Network, System Admin & Support",
      image: "/idris.png",
      linkedin: "https://linkedin.com/in/harrif-saliu",
    },
    {
      name: "Bolaji Oyewumi",
      role: "Lead, Backend Engineer",
      image: "/Bolaji.png",
      linkedin: "https://linkedin.com/in/harrif-saliu",
    },
    {
      name: "Ayotunde Ogundipe",
      role: "Lead, QA Engineer",
      image: "/Ayotunde.png",
      linkedin: "https://linkedin.com/in/harrif-saliu",
    },
    {
      name: "David Ayoola",
      role: "Lead, Frontend Engineer",
      image: "/david.png",
      linkedin: "https://linkedin.com/in/harrif-saliu",
    },
    {
      name: "John Dahunsi",
      role: "Sales & Partnership Manager",
      image: "/john.png",
      linkedin: "https://linkedin.com/in/harrif-saliu",
    },
  ]

  return (
    <section className="md:py-12 md:px-4">
      <div className="container mx-auto">

        {/* Mobile layout (stacked cards) */}
        <div className="flex flex-col md:hidden">
      <TeamLeadsSliderSection />
        </div>

        {/* Desktop layout - First row */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
          {teamLeadsRow1.map((member, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-amber-900 to-amber-800 rounded-xl overflow-hidden shadow-sm group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-[320px] rounded-t-xl overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className={`object-cover object-center transition-transform duration-300 ${
                    hoveredCard === index ? "scale-110" : "scale-100"
                  }`}
                />

{/* Overlay with name/role at the top and LinkedIn at the bottom */}
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent">

  {/* Top-left: Name and role */}
  <div className="absolute top-4 left-4 right-4">
    <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
    <p className="text-white/90 text-sm">{member.role}</p>
  </div>

  {/* Bottom-left: LinkedIn Icon */}
  <div className="absolute bottom-4 left-4 right-4">
    <Link
      href={member.linkedin}
      className={`inline-flex items-center gap-2 transition-all duration-300 ${
        hoveredCard === index
          ? "text-white opacity-100 transform scale-110"
          : "text-blue-400 opacity-80"
      }`}
    >
      <div className="bg-blue-600 p-2 rounded-md">
        <Linkedin className="h-4 w-4 text-white" />
      </div>
      {hoveredCard === index && (
        <span className="text-sm font-medium bg-blue-600 px-2 py-1 rounded">
          See LinkedIn profile
        </span>
      )}
    </Link>
  </div>

</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
