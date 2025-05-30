"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Menu } from "lucide-react"
import PartnersSection from "../home/partners-section"
import StatsSection from "../home/stats-section"



export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#EEF3FF] md:pt-[80px]">
    
      <main className="pl-[25px]">
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
          <div className="container mx-auto px-4 py-6 md:py-8 relative z-10 ">
            <div className=" bg-[#10142C] rounded-xl overflow-hidden mx-3 md:mx-4">
              <div className=" md:pl-10 flex flex-col md:flex-row items-start md:items-center md:justify-between">
                <div className="w-full md:w-3/5">
                  <div className="inline-block bg-[#00D2FF] text-[#10142C] px-3 py-1 rounded-md font-medium mb-4">
                    About us
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Driving Financial
                    <br />
                    Inclusion, One Transaction
                    <br />
                    at a Time
                  </h1>
                </div>
                <div className="w-full md:w-[25%] relative h-80 md:mt-0 mr:[5px]">
                  <Image src="/about_main_hero.png" alt="Financial Inclusion" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>
<br />
<br />
<br />
        {/* Main Content */}
        <section className="py-8 px-4 bg-[#EEF3FF]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-3 md:mx-4">
              {/* Left Column */}
              <div className="mr-[20px]">
                <h2 className="text-xl font-bold mb-4 text-[#10142C]">
                  At 3Line, we believe everyone deserves access to financial services, regardless of location or
                  background
                </h2>
                <p className="text-gray-600 mb-6">
                  Since 2017, we've been bridging financial gaps with technology, ensuring businesses, banks, and
                  individuals can move money effortlessly and access the financial tools they need to thrive.
                </p>

                <div className="relative h-[400px] mb-4 rounded-lg overflow-hidden">
                  <Image src="/about1.png" alt="Team working together" fill className="object-cover" />
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image src="/about2.png" alt="Team meeting" fill className="object-cover" />
                </div>
              </div>
            
             

              {/* Right Column */}
              <div className="mt-[250px] ml-[20px]">
                <h2 className="text-xl font-bold mb-4 text-[#10142C] ">Our story</h2>
                <p className="text-gray-600 mb-6">
                  We started with a simple mission: to make financial services more accessible for everyone. Today,
                  we're proud to be a trusted partner for banks, fintechs, and businesses across Nigeria and beyond.
                </p>

                <div className="relative h-[500px]  overflow-hidden">
                  <Image src="/about3.png" alt="Our Team" fill className="object-cover" />
                </div>

                <Link
                  href="/our-team"
                  className="text-[#4894F4] hover:text-[#4894F4]/80 flex items-center text-sm font-medium mt-4"
                >
                  See more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

<br />
<br />
        {/* Partners Section */}
           
<PartnersSection />
        {/* Stats Section */}
      <StatsSection />

        {/* Financial Access Gap */}
      
           <section className="relative bg-[#EEF3FF] overflow-hidden">
                
                  <div className="container mx-auto px-6 md:px-8 py-8 md:py-12 relative z-10">
                    <div className="bg-[#10142C] rounded-xl overflow-hidden mx-3 md:mx-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  pl-8 md:pl-12">
                        <div className="text-white pt-8">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  We Exist to bridge the Financial Access Gap
                </h2>
                <p className="text-gray-300 max-w-xl">
                  Millions of businesses and individuals remain underserved by traditional financial systems. By
                  creating simplified access to financial tools and integrated payment solutions, we share this.
                </p>
                        </div>
                        <div className="relative">
                          <div className="absolute top-0 right-0 w-[450px] h-[500px]">
                            <Image src="/about-us-hero3.png" alt="Hero decoration" fill className="object-cover" />
                          </div>
                        </div>
                      </div>
                      <div className="relative px-8 md:px-12 md:pb-12">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="relative h-40 md:h-[290px] rounded-lg overflow-hidden transform rotate-[-8deg] w-[900px] ml-[150px]">
                            <Image
                              src="/about-us-hero2.png"
                              alt="SME Solutions"
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        

        {/* Who We Serve */}
        <section className="py-8 px-4 bg-[#EEF3FF]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-3 md:mx-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-[#10142C] p-3 rounded-lg inline-flex items-center justify-center mb-4 w-12 h-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <span className="text-[#00D2FF] text-sm font-medium">For</span>
                  <h3 className="text-xl font-bold text-[#10142C]">SMEs</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  Get paid faster, access digital banking, and manage transactions in real-time.
                </p>
                <Link
                  href="/solutions/smes"
                  className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium w-12 h-12 rounded-full transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-[#10142C] p-3 rounded-lg inline-flex items-center justify-center mb-4 w-12 h-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <span className="text-[#00D2FF] text-sm font-medium">For</span>
                  <h3 className="text-xl font-bold text-[#10142C]">Enterprises</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  Optimize cash flow with secure, efficient, and scalable payment solutions.
                </p>
                <Link
                  href="/solutions/enterprise"
                  className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium w-12 h-12 rounded-full transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-[#10142C] p-3 rounded-lg inline-flex items-center justify-center mb-4 w-12 h-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 10V17C4 17.5304 4.21071 18.0391 4.58579 18.4142C4.96086 18.7893 5.46957 19 6 19H18C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17V10"
                      stroke="#00D2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 3V15M12 3L8 7M12 3L16 7"
                      stroke="#00D2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M2 10H22" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="mb-2">
                  <span className="text-[#00D2FF] text-sm font-medium">For</span>
                  <h3 className="text-xl font-bold text-[#10142C]">Financial Institutions</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  Expand banking services to the unbanked and underserved communities.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium w-12 h-12 rounded-full transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-[#10142C] p-3 rounded-lg inline-flex items-center justify-center mb-4 w-12 h-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 21H21M4 18H20M5 18V9M19 18V9M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9M10 14H14M9 9H15"
                      stroke="#00D2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mb-2">
                  <span className="text-[#00D2FF] text-sm font-medium">For</span>
                  <h3 className="text-xl font-bold text-[#10142C]">Communities & Governments</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">Create financial access points where they are needed most.</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium w-12 h-12 rounded-full transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        {/* Why Choose Us & Join Us */}
        <section className="py-8 px-4 bg-[#EEF3FF]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-3 md:mx-4">
              {/* Why Choose Us */}
              <div>
                <h2 className="text-2xl font-bold text-[#10142C] mb-5">Why Choose Us?</h2>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-[#10142C] mb-1.5">Innovation</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We're constantly pushing boundaries to deliver cutting-edge solutions.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-[#10142C] mb-1.5">Reliability</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our infrastructure ensures 99.9% uptime, so your business never stops.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-[#10142C] mb-1.5">Inclusion</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We're committed to bringing financial services to the unbanked and underserved.
                    </p>
                  </div>
                </div>
              </div>

             {/* Join Us */}
    <div className="relative bg-[#4096FB] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between w-full min-h-[320px]">
      {/* Left Content */}
      <div className="relative z-10 w-full md:w-2/3 h-full flex flex-col justify-center px-4">
        <h2 className="text-white text-lg md:text-2xl font-bold leading-tight mb-2">
          Join Us in Shaping Africa's Financial Future
        </h2>
        <p className="text-white/90 text-sm md:text-base mb-4">
          Learn more about our mission, vision, and the team behind 3Line.
        </p>
        <Link
          href="/our-team"
          className="inline-flex items-center gap-1 bg-[#0A1A4A] hover:bg-[#0A1A4ACC] text-white font-medium py-2 px-3 rounded-full text-sm w-fit"
        >
          Get started
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
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

      {/* Right Image (fills full height) */}
      <div className="relative hidden md:block w-1/3 h-full">
        <Image
          src="/about-vector.png"
          alt="vector image"
          className="object-cover w-full h-full"
          fill
          priority
        />
      </div>
    </div>
            </div>
          </div>
        </section>
      </main>

  
    </div>
  )
}
