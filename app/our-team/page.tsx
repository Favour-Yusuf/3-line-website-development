"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Linkedin,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ExecutiveTeamSection from "@/components/our-team/executive-team";
import TeamLeadsSection from "@/components/our-team/team-leads";

const OurTeamComponent = () => {
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

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
  ];

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
  ];

  // For desktop view, split into rows
  const teamLeadsRow1 = allTeamLeads.slice(0, 5);
  const teamLeadsRow2 = allTeamLeads.slice(5, 10);
  const additionalLead = allTeamLeads[10];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === allTeamLeads.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [allTeamLeads.length]);

  // Handle slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === allTeamLeads.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? allTeamLeads.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left, go to next slide
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right, go to previous slide
      prevSlide();
    }
  };

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
  ];

  return (
    <main className="min-h-screen bg-[#EEF3FF] md:px-[25px] pt-[60px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative z-10 bg-[#00002e] rounded-xl overflow-hidden h-[85vh]">
            <div className="pl-8 md:pl-12  flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 pt-12">
                <h1 className="inline-block text-[50px] bg-[#6be0f0] text-[#10142C] px-3 py- rounded-md font-bold mb-4">
                  Our Team
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Who we are
                </h1>
                <p className="text-gray-300 mb-8 max-w-lg">
                  At 3Line, we are more than a company, we are a team of
                  innovators, problem-solvers, and financial inclusion
                  specialists.
                </p>
              </div>
              <div className="w-full md:w-[70%] relative h-60 md:h-screen">
                <div className="absolute inset-0  w-full right-0">
                  <Image
                    src="/team-hero1.png"
                    alt="Our Team"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-0 right-0 -z-10  h-screen">
                  <Image
                    src="/team-hero2.png"
                    alt="Decorative element"
                    className="w-[100%] h-[100%]"
                    width={300}
                    height={300}
                  />
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
            <div className="bg-white p-6 rounded-xl shadow-sm ">
              <Image
                src="/vision.png"
                alt="vision"
                width={70}
                height={70}
                className="mb-[50px]"
              />
              <h3 className="text-4xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become Africa's leading financial services provider, powering
                the continent's payments while ensuring financial inclusion for
                businesses, banks, and communities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Image
                src="/mission.png"
                alt="mission"
                width={70}
                height={70}
                className="mb-[50px]"
              />
              <h3 className="text-4xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To build innovative and reliable payment solutions that make
                everyday transactions simple, secure, and more accessible for
                businesses, communities, and individuals worldwide.
              </p>
            </div>

            {/* Values */}
            <div className="bg-transparent py-6 rounded-xl shadow-sm ">
              <h3 className="text-4xl font-bold mb-4">Our Values</h3>
              <div className="space-y-4">
                <div className="bg-[#FFFFFF80] p-[15px] rounded-[10px]">
                  <h4 className="font-medium">Innovation</h4>
                  <p className="text-sm text-gray-600">
                    We constantly push boundaries to deliver cutting-edge
                    solutions.
                  </p>
                </div>
                <div className="bg-[#FFFFFF80] p-[15px] rounded-[10px]">
                  <h4 className="font-medium">Integrity</h4>
                  <p className="text-sm text-gray-600">
                    We operate with transparency and honesty.
                  </p>
                </div>
                <div className="bg-[#FFFFFF80] p-[15px] rounded-[10px]">
                  <h4 className="font-medium">Inclusion</h4>
                  <p className="text-sm text-gray-600">
                    We believe in financial access for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <ExecutiveTeamSection />

      {/* Team Leads */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <TeamLeadsSection />
        </div>
      </section>

      <section className=" overflow-hidden  text-white hidden md:flex w-full  justify-center items-center">
        <div className="w-[99%] py-8 md:py-12 md:px-[100px] relative bg-[#10142C] rounded-[25px]">
          <div className="max-w-3xl py-16 md:py-20 relative z-10">
            <div className="md:text-[20px] md:mb-[30px] text-gray-400 mb-[20px] text-sm">
              Careers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Join Our Team
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              We're an ambitious team shaping the future of payments in Africa.
              Join our expanding offices and join us in making financial access
              simpler for everyone.
            </p>
          </div>

          <div className="absolute top-0 right-0 h-full w-1/2">
            <Image
              src="/team-join.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-12 px-4 mt-[20px]">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            There are no current openings
          </h2>
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
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="inline-flex items-center font-medium text-[#000066] hover:underline"
                  >
                    Apply
                    <span className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-[#4894F4] text-white rounded-full">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurTeamComponent;
