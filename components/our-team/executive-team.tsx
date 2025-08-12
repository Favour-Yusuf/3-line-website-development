// components/our-team/executive-team.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function ExecutiveTeamSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [executiveTeam, setExecutiveTeam] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "teamMember" && memberType == "executive"] | order(order asc)`);
        setExecutiveTeam(data);
      } catch (error) {
        console.error("Error fetching executive team:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="py-12 px-4">Loading executives...</div>;
  if (!executiveTeam.length) return null;

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Meet our executive team
        </h2>

        {/* Mobile layout */}
        <div className="flex flex-col space-y-4 md:hidden">
          {executiveTeam.map((member, index) => (
            <div
              key={member._id}
              className="flex bg-white rounded-xl overflow-hidden shadow-sm relative h-[200px]"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-1/2 relative">
                {member.image && (
                  <Image
                    src={urlFor(member.image).url()}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                )}
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

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {executiveTeam.map((member, index) => (
            <div
              key={member._id}
              className="bg-white rounded-xl overflow-hidden shadow-sm relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {member.image && (
                <div className="relative h-64 rounded-t-xl overflow-hidden">
                  <Image
                    src={urlFor(member.image).url()}
                    alt={member.name}
                    fill
                    className={`object-cover object-center transition-transform duration-500 ${
                      hoveredCard === index ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>
              )}
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
                {member.linkedin && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}