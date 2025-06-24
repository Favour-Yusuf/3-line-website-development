"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { useState } from "react";

export default function ExecutiveTeamSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Executive team data with individual images
  const executiveTeam = [
    {
      name: "Femi Omogbenigun",
      role: "Managing Director/CEO",
      image: "/Femi.png",
      linkedin: "https://linkedin.com/in/femi-omogbenigun",
    },
    {
      name: "Chibuzor Sibigem",
      role: "Executive Director, Business",
      image: "/Chibuzor.png",
      linkedin: "https://linkedin.com/in/chibuzor-sibigem",
    },
    {
      name: "Donald Owonikin",
      role: "Head of Finance",
      image: "/Donald.png",
      linkedin: "https://linkedin.com/in/donald-owonikin",
    },
    {
      name: "Kolawole Omirin",
      role: "Chief Technology Officer",
      image: "/KolaWole.png",
      linkedin: "https://linkedin.com/in/kolawole-omirin",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Meet our executive team
        </h2>

        {/* Mobile layout (stacked cards) */}
        <div className="flex flex-col space-y-4 md:hidden ">
          {executiveTeam.map((member, index) => (
            <div
              key={index}
              className="flex bg-white rounded-xl overflow-hidden shadow-sm relative h-[200px]"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-1/2 relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div
                className={`w-3/5 p-4 flex flex-col justify-center transition-all duration-300 ${
                  hoveredCard === index
                    ? "bg-[#000066] text-white"
                    : "bg-white text-black"
                }`}
              >
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p
                  className={`text-sm ${hoveredCard === index ? "text-gray-200" : "text-gray-600"}`}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout (grid) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {executiveTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64 rounded-t-xl overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className={`object-cover object-center transition-transform duration-500 ${
                    hoveredCard === index ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
              <div
                className={`p-4 transition-all duration-300 ${
                  hoveredCard === index
                    ? "bg-[#000066] text-white"
                    : "bg-white text-black"
                }`}
              >
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p
                  className={`text-sm mb-3 ${hoveredCard === index ? "text-gray-200" : "text-gray-600"}`}
                >
                  {member.role}
                </p>
                <Link
                  href={member.linkedin}
                  className={`absolute top-[55%] inline-flex items-center transition-all duration-300 ${
                    hoveredCard === index ? "transform scale-110" : ""
                  }`}
                >
                  <div
                    className={`flex items-center transition-transform duration-300 ${
                      hoveredCard === index ? "scale-110" : "scale-100"
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
                      className="h-10 w-10 p-1 rounded-sm transition-transform duration-300"
                    />
                    {hoveredCard === index && (
                      <span className="text-sm bg-white text-[#000066] font-bold px-2 h-10 flex items-center">
                        See LinkedIn profile
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
