// components/our-team/teams-mobiles-slider.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

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

export default function TeamLeadsSliderSection({ teamLeads }: { teamLeads: any[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-rotate slides
  useEffect(() => {
    if (teamLeads.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === teamLeads.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [teamLeads.length]);

  // Slide navigation
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === teamLeads.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? teamLeads.length - 1 : prev - 1));
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    else if (touchEndX.current - touchStartX.current > 50) prevSlide();
  };

  if (!teamLeads.length) return null;

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
              <div
                className="h-full flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredCard(currentSlide)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-[350px] overflow-hidden">
                  {teamLeads[currentSlide]?.image && (
                    <Image
                      src={urlFor(teamLeads[currentSlide].image).url()}
                      alt={teamLeads[currentSlide].name}
                      fill
                      className={`object-cover object-center transition-transform duration-300 ${
                        hoveredCard === currentSlide ? "scale-110" : "scale-100"
                      }`}
                    />
                  )}
                </div>
                <div className="flex-grow flex flex-col justify-start items-start text-left ml-[20px] mt-[20px]">
                  <h3 className="text-lg font-semibold text-left mb-2">
                    {teamLeads[currentSlide]?.name}
                  </h3>
                  <p className="text-sm text-left mb-4">
                    {teamLeads[currentSlide]?.role}
                  </p>
                  {teamLeads[currentSlide]?.linkedin && (
                    <Link
                      href={teamLeads[currentSlide].linkedin}
                      className={`inline-flex items-center gap-2 transition-all duration-300 ${
                        hoveredCard === currentSlide
                          ? "text-white opacity-100 transform scale-110"
                          : "text-blue-400 opacity-80"
                      }`}
                    >
                      {hoveredCard === currentSlide && (
                        <span className="text-sm font-medium bg-blue-600 px-2 py-1 rounded">
                          See LinkedIn profile
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {teamLeads.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 w-3 rounded-full ${
                  currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}