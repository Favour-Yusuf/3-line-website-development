"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const AboutUsComponent = () => {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-3/5">
                <div className="inline-block bg-[#00D2FF] text-[#0A1A4A] px-3 py-1 rounded-md font-medium mb-4">
                  About us
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Driving Financial
                  <br />
                  Inclusion, One Transaction
                  <br />
                  at a Time
                </h1>
              </div>
              <div className="w-full md:w-2/5 relative h-40 md:h-60 mt-6 md:mt-0">
                <Image src="/about-us-hero.png" alt="Financial Inclusion" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h2 className="text-xl font-bold mb-4">
                At 3Line, we believe everyone deserves access to financial services, regardless of location or
                background
              </h2>
              <p className="text-gray-600 mb-6">
                Since 2017, we've been bridging financial gaps with technology, ensuring businesses, banks, and
                individuals can move money effortlessly and access the financial tools they need to thrive.
              </p>

              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image src="/about-us-image1.png" alt="Team working together" fill className="object-cover" />
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/about-us-image2.png" alt="Team meeting" fill className="object-cover" />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-xl font-bold mb-4">Our story</h2>
              <p className="text-gray-600 mb-6">
                We started with a simple mission: to make financial services more accessible for everyone. Today, we're
                proud to be a trusted partner for banks, fintechs, and businesses across Nigeria and beyond.
              </p>

              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="/about-us-image3.png" alt="Our Team" fill className="object-cover" />
              </div>

              <Link
                href="/our-team"
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium mt-4"
              >
                See more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/interswitch.png"
                alt="Interswitch"
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/access.png"
                alt="Access Bank"
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/tajbank.png"
                alt="Taj Bank"
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image src="/uba.png" alt="UBA" width={100} height={40} className="h-8 md:h-10 w-auto" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/alerzo.png"
                alt="Alerzo"
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/nibss.png"
                alt="NIBSS"
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/fidelity.png"
                alt="Fidelity"
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">$7 Billion</h3>
              <p className="text-sm text-gray-600">Transaction volume</p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">100,000+ SMEs</h3>
              <p className="text-sm text-gray-600">Supported across Africa</p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">20,000+</h3>
              <p className="text-sm text-gray-600">Financial institutions and payment partners</p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">300+</h3>
              <p className="text-sm text-gray-600">Experienced team members throughout our network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Access Gap */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-[#0A1A4A] rounded-xl overflow-hidden p-6 md:p-12 relative">
            {/* Dark blue curved shape decorative element */}
            <div className="absolute bottom-0 right-0 z-0">
              <Image
                src="/about-us-hero3.png"
                alt="Decorative element"
                width={300}
                height={300}
                className="object-contain opacity-70"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-xl mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                We Exist to bridge the Financial Access Gap
              </h2>
              <p className="text-gray-300 max-w-xl">
                Millions of businesses and individuals remain underserved by traditional financial systems. By creating
                simplified access to financial tools and integrated payment solutions, we share this.
              </p>
            </div>

            {/* */}
            <div className="relative h-60 md:h-80">
              <div className="absolute top-0 right-0 w-full md:w-3/4 h-full">
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
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-[#00D2FF] p-3 rounded-lg inline-flex items-center justify-center mb-4 w-10 h-10">
                <span className="text-[#0A1A4A] font-bold">S</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">SMEs</h3>
              <p className="text-gray-600 mb-4">
                Get paid faster, access digital banking, and manage transactions in real-time.
              </p>
              <Link
                href="/solutions/smes"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-[#00D2FF] p-3 rounded-lg inline-flex items-center justify-center mb-4 w-10 h-10">
                <span className="text-[#0A1A4A] font-bold">E</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enterprises</h3>
              <p className="text-gray-600 mb-4">Optimize cash flow with enterprise-grade payment solutions.</p>
              <Link
                href="/solutions/enterprise"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-[#00D2FF] p-3 rounded-lg inline-flex items-center justify-center mb-4 w-10 h-10">
                <span className="text-[#0A1A4A] font-bold">F</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Financial Institutions</h3>
              <p className="text-gray-600 mb-4">Extend banking services to the unbanked and underserved communities.</p>
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-[#00D2FF] p-3 rounded-lg inline-flex items-center justify-center mb-4 w-10 h-10">
                <span className="text-[#0A1A4A] font-bold">C</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Communities & Governments</h3>
              <p className="text-gray-600 mb-4">Unlock financial access in areas where they are needed most.</p>
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We're constantly pushing boundaries to deliver cutting-edge solutions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">Our infrastructure ensures 99.9% uptime, so your business never stops.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Inclusion</h3>
              <p className="text-gray-600">We're committed to bringing financial services to the unbanked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-blue-500 rounded-xl overflow-hidden p-6 md:p-12 relative">
            {/* Light blue curved shape decorative element */}
            <div className="absolute top-0 right-0 z-0">
              <Image
                src="/about-us.png"
                alt="Decorative element"
                width={300}
                height={300}
                className="object-contain opacity-70"
              />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="max-w-lg mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join Us in Shaping Africa's Financial Future
                </h2>
                <p className="text-blue-100 mb-6">Learn more about our mission, vision, and the team behind 3Line.</p>
              </div>
              <Link
                href="/our-team"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-full transition-colors"
              >
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
   
    </main>
  )
}

export default AboutUsComponent
