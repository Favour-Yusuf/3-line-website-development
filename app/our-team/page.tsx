"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Clock, MapPin } from "lucide-react"
import { useState } from "react"

const OurTeamComponent = () => {
  const [email, setEmail] = useState("")

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
      image: "/team-exce.png",
      imagePosition: "0% 0%",
    },
    {
      name: "Chibuzor Sibigem",
      role: "Executive Director, Business",
      image: "/team-exce.png",
      imagePosition: "33.33% 0%",
    },
    {
      name: "Donald Owonikin",
      role: "Head of Finance",
      image: "/team-exce.png",
      imagePosition: "66.66% 0%",
    },
    {
      name: "Kolawole Omirin",
      role: "Chief Technology Officer",
      image: "/team-exce.png",
      imagePosition: "100% 0%",
    },
  ]

  // Team leads data - first row
  const teamLeadsRow1 = [
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
  ]

  // Team leads data - second row
  const teamLeadsRow2 = [
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
  ]

  // Additional team lead
  const additionalLead = {
    name: "John Dahunsi",
    role: "Sales & Partnership Manager",
    image: "/team-leads.png",
    imagePosition: "0% 100%",
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
    <main className="min-h-screen bg-[#EEF3FF]">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {executiveTeam.map((member, index) => (
              <div key={index} className="bg-transparent rounded-xl overflow-hidden">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundPosition: member.imagePosition,
                      backgroundSize: "400%",
                    }}
                  ></div>
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

          {/* First row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {teamLeadsRow1.map((member, index) => (
              <div key={index} className="bg-transparent rounded-xl overflow-hidden">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundPosition: member.imagePosition,
                      backgroundSize: "500% 300%",
                    }}
                  ></div>
                </div>
               
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {teamLeadsRow2.map((member, index) => (
              <div key={index} className="bg-transparent rounded-xl overflow-hidden">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundPosition: member.imagePosition,
                      backgroundSize: "500% 300%",
                    }}
                  ></div>
                </div>
            
              </div>
            ))}
          </div>

          {/* Additional lead */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-transparent rounded-xl overflow-hidden">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${additionalLead.image})`,
                    backgroundPosition: additionalLead.imagePosition,
                    backgroundSize: "500% 300%",
                  }}
                ></div>
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

      {/* Subscribe Section */}
      <section className="py-12 px-4 bg-[#EEF3FF]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-200 pt-8">
            <div className="mb-6 md:mb-0">
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-2 rounded-md">
                  <Image src="/certifications/pci-dss.png" alt="PCI DSS" width={40} height={40} />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <Image src="/certifications/iso.png" alt="ISO" width={40} height={40} />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <Image src="/certifications/ndpr.png" alt="NDPR" width={40} height={40} />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <Image src="/certifications/cbn.png" alt="CBN" width={40} height={40} />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                © 2023 3line. 3line is regulated by the Central Bank of Nigeria.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm max-w-md">
                <h3 className="text-lg font-semibold mb-2">Subscribe to get updates that matter.</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Stay informed on payments, business growth, and more right in your inbox!
                </p>
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    placeholder="What's your email?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OurTeamComponent
