"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MobileAboutUsPage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-[#EEF3FF]">
     

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#EEF3FF]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-us-background.png"
              alt="Background pattern"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="px-4 py-6 relative z-10">
            <div className="bg-[#10142C] rounded-xl overflow-hidden mx-3">
              <div className="p-6">
                <div className="inline-block bg-[#00D2FF] text-[#10142C] px-3 py-1 rounded-md font-medium mb-4">
                  About us
                </div>
                <h1 className="text-2xl font-bold text-white mb-4 leading-tight">
                  Driving Financial
                  <br />
                  Inclusion, One
                  <br />
                  Transaction at a Time
                </h1>
                <div className="relative h-40 mt-4">
                  <Image src="/about-hero.png" alt="Financial Inclusion" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6 px-4 bg-[#EEF3FF]">
          <div className="mx-3">
            <h2 className="text-lg font-bold mb-3 text-[#10142C]">
              At 3Line, we believe everyone deserves access to financial services, regardless of location or background
            </h2>
            <p className="text-gray-600 mb-5 text-sm">
              Since 2017, we've been bridging financial gaps with technology, ensuring businesses, banks, and
              individuals can move money effortlessly and access the financial tools they need to thrive.
            </p>

            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image src="/about1.png" alt="Team working together" fill className="object-cover" />
            </div>

            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image src="/about2.png" alt="Team meeting" fill className="object-cover" />
            </div>

            <h2 className="text-lg font-bold mb-3 text-[#10142C]">Our story</h2>
            <p className="text-gray-600 mb-5 text-sm">
              We started with a simple mission: to make financial services more accessible for everyone. Today, we're
              proud to be a trusted partner for banks, fintechs, and businesses across Nigeria and beyond.
            </p>

            <div className="relative h-56 rounded-lg overflow-hidden mb-3">
              <Image src="/about3.png" alt="Our Team" fill className="object-cover" />
            </div>

            <Link
              href="/our-team"
              className="text-[#4894F4] hover:text-[#4894F4]/80 flex items-center text-sm font-medium mb-6"
            >
              See more
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-6 px-4 bg-[#EEF3FF]">
          <div className="mx-3">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="transition-all duration-300">
                <Image
                  src="/placeholder.svg?height=30&width=80"
                  alt="Interswitch"
                  width={80}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
              <div className="transition-all duration-300">
                <Image
                  src="/placeholder.svg?height=30&width=80"
                  alt="Access Bank"
                  width={80}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
              <div className="transition-all duration-300">
                <Image
                  src="/placeholder.svg?height=30&width=80"
                  alt="Taj Bank"
                  width={80}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
              <div className="transition-all duration-300">
                <Image
                  src="/placeholder.svg?height=30&width=80"
                  alt="UBA"
                  width={80}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
              <div className="transition-all duration-300">
                <Image
                  src="/placeholder.svg?height=30&width=80"
                  alt="Alerzo"
                  width={80}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
              <div className="transition-all duration-300">
                <Image
                  src="/placeholder.svg?height=30&width=80"
                  alt="NIBSS"
                  width={80}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
              <div className="transition-all duration-300">
                <Image
                  src="/placeholder.svg?height=30&width=80"
                  alt="Fidelity"
                  width={80}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-6 px-4 bg-[#EEF3FF]">
          <div className="mx-3">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <div className="space-y-5">
                {/* $7 Billion */}
                <div className="pb-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-[#10142C]">$7 Billion</h3>
                  <p className="text-xs text-gray-600">processed Daily</p>
                </div>

                {/* 180,000+ SMEs */}
                <div className="pb-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-[#10142C]">180,000+ SMEs</h3>
                  <p className="text-xs text-gray-600">empowered through our partners</p>
                </div>

                {/* 20,000+ */}
                <div className="pb-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-[#10142C]">20,000+</h3>
                  <p className="text-xs text-gray-600">active terminals empowered through our partners</p>
                </div>

                {/* 300+ */}
                <div className="pb-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-[#10142C]">300+</h3>
                  <p className="text-xs text-gray-600">financial institutions empowered through our partners</p>
                </div>

                {/* 99.9% uptime */}
                <div>
                  <h3 className="text-xl font-bold text-[#10142C]">99.9% uptime,</h3>
                  <p className="text-xs text-[#4894F4]">so your business never stops!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Access Gap */}
        <section className="py-6 px-4 bg-[#EEF3FF]">
          <div className="mx-3">
            <div className="bg-[#10142C] rounded-xl overflow-hidden p-5 relative">
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-white mb-3">We Exist to bridge the Financial Access Gap</h2>
                <p className="text-gray-300 text-sm mb-4">
                  Millions of businesses and individuals remain underserved by traditional financial systems. By
                  creating simplified access to financial tools and integrated payment solutions, we share this.
                </p>
              </div>

              {/* */}
              <div className="relative h-40">
                <div className="absolute bottom-0 right-0 w-full h-full">
                  <Image
                    src="/about-us-hero2.png"
                    alt="Financial Access"
                    fill
                    className="object-contain object-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-6 px-4 bg-[#EEF3FF]">
          <div className="mx-3">
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="bg-[#10142C] p-2 rounded-lg inline-flex items-center justify-center mb-3 w-10 h-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                      stroke="#00D2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                      stroke="#00D2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mb-2">
                  <span className="text-[#00D2FF] text-xs font-medium">For</span>
                  <h3 className="text-lg font-bold text-[#10142C]">SMEs</h3>
                </div>
                <p className="text-gray-600 mb-4 text-xs">
                  Get paid faster, access digital banking, and manage transactions in real-time.
                </p>
                <Link
                  href="/solutions/smes"
                  className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium w-10 h-10 rounded-full transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333"
                      stroke="white"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="bg-[#10142C] p-2 rounded-lg inline-flex items-center justify-center mb-3 w-10 h-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                      stroke="#00D2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                      stroke="#00D2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mb-2">
                  <span className="text-[#00D2FF] text-xs font-medium">For</span>
                  <h3 className="text-lg font-bold text-[#10142C]">Enterprises</h3>
                </div>
                <p className="text-gray-600 mb-4 text-xs">
                  Optimize cash flow with secure, efficient, and scalable payment solutions.
                </p>
                <Link
                  href="/solutions/enterprise"
                  className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium w-10 h-10 rounded-full transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333"
                      stroke="white"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-6 px-4 bg-[#EEF3FF]">
          <div className="mx-3">
            <h2 className="text-lg font-bold text-[#10142C] mb-4">Why Choose Us?</h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-base font-semibold text-[#10142C] mb-1">Innovation</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  We're constantly pushing boundaries to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-base font-semibold text-[#10142C] mb-1">Reliability</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Our infrastructure ensures 99.9% uptime, so your business never stops.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-base font-semibold text-[#10142C] mb-1">Inclusion</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  We're committed to bringing financial services to the unbanked and underserved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-6 px-4 bg-[#EEF3FF]">
          <div className="mx-3">
            <div className="bg-[#4894F4] rounded-xl overflow-hidden p-5">
              <h2 className="text-white text-lg font-bold leading-tight mb-2">
                Join Us in Shaping Africa's Financial Future
              </h2>
              <p className="text-white/90 text-xs mb-4">
                Learn more about our mission, vision, and the team behind 3Line.
              </p>
              <Button className="bg-[#10142C] hover:bg-[#10142C]/90 text-white rounded-full w-full">
                Get started
                <svg
                  className="ml-2 h-4 w-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </section>
      </main>

    
    </div>
  )
}
