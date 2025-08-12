// components/our-team/team-leads.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TeamLeadsSliderSection from "./teams-mobiles-slider";
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

export default function TeamLeadsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [teamLeads, setTeamLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "teamMember" && memberType == "lead"] | order(order asc)`);
        setTeamLeads(data);
      } catch (error) {
        console.error("Error fetching team leads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="py-12 px-4">Loading team leads...</div>;
  if (!teamLeads.length) return null;

  return (
    <section className="md:py-12 md:px-4">
      <div className="container mx-auto">
        {/* Mobile slider */}
        <div className="flex flex-col md:hidden">
          <TeamLeadsSliderSection teamLeads={teamLeads} />
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
          {teamLeads.map((member, index) => (
            <div
              key={member._id}
              className="relative bg-gradient-to-b from-amber-900 to-amber-800 rounded-xl overflow-hidden shadow-sm group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {member.image && (
                <div className="relative h-[320px] rounded-t-xl overflow-hidden">
                  <Image
                    src={urlFor(member.image).url()}
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
                      {member.linkedin && (
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
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}