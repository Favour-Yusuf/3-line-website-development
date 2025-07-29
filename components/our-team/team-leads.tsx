"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { useState } from "react";
import TeamLeadsSliderSection from "./teams-mobiles-slider";

export default function TeamLeadsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Team leads data with individual images
  const teamLeadsRow1 = [
    {
      name: "Stephanie Okpaka",
      role: "Administrative Lead",
      image: "/stephanie.png",
      linkedin: "https://www.linkedin.com/in/stephanie-odomero-okpaka?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Nneoma Udegbe",
      role: "Head, Product Management Officer",
      image: "/Nneoma.png",
      linkedin: "https://www.linkedin.com/in/nneoma-udegbe-951a7425?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Temitope Ogundare",
      role: "Legal & Regulatory Compliance Officer",
      image: "/temitope.png",
      linkedin: "https://www.linkedin.com/in/temitope-ogundare-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Tobiloba Animasaun",
      role: "Human Resource Lead",
      image: "/tobiloba.png",
      linkedin: "https://www.linkedin.com/in/tobiloba-animasaun-3a0256108?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Harrif Saliu",
      role: "Lead, Channel Engineering",
      image: "/Hariff.png",
      linkedin: "https://www.linkedin.com/in/harrif-saliu-6731b981?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Titilope Bankole-Oki",
      role: "Service Delivery Manager",
      image: "/Titilope.png",
      linkedin: "https://www.linkedin.com/in/titilope-bankole-oki?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Idris Apatira",
      role: "Lead, Network, System Admin & Support",
      image: "/idris.png",
      linkedin: "https://www.linkedin.com/in/idris-apatira?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Bolaji Oyewumi",
      role: "Lead, Backend Engineer",
      image: "/Bolaji.png",
      linkedin: "https://www.linkedin.com/in/oyewumi-bolaji-muftau-8850b0153?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ayotunde Ogundipe",
      role: "Lead, QA Engineer",
      image: "/Ayotunde.png",
      linkedin: "https://www.linkedin.com/in/ayotunde-ogundipe-a02170183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "David Ayoola",
      role: "Lead, Frontend Engineer",
      image: "/david.png",
      linkedin: "https://www.linkedin.com/in/ayodejidavidayoola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "John Dahunsi",
      role: "Sales & Partnership Manager",
      image: "/john.png",
      linkedin: "https://linkedin.com/in/harrif-saliu",
    },
  ];

  return (
    <section className="md:py-12 md:px-4">
      <div className="container mx-auto">
        {/* Mobile layout (stacked cards) */}
        <div className="flex flex-col md:hidden">
          <TeamLeadsSliderSection />
        </div>

     
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

             
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent">
                  {/* Top-left: Name and role */}
                  <div className="absolute top-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-2xl mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
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
                                      <Image
                                        src={
                                          hoveredCard === index
                                            ? "/LinkedIn_dark.png"
                                            : "/LinkedIn_light.png"
                                        }
                                        alt="LinkedIn"
                                        width={70}
                                        height={70}
                                        className={`transition-all duration-300 h-10 w-10 p-1 rounded-sm ${
                                          hoveredCard === index ? "" : ""
                                        }`}
                                      />
                    
                                      {hoveredCard === index && (
                                        <span className="text-xs p-1  bg-white hover:text-[#000066] text-[#000066] font-bold">
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
  );
}
