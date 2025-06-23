"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Menu } from "lucide-react"
import PartnersSection from "../home/partners-section"
import StatsSection from "../home/stats-section"



export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#EEF3FF] md:pt-[80px] pb-[30px]">
    
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
            <div className=" bg-[#10142C] rounded-xl overflow-hidden mx-3 md:mx-4 ">
              <div className=" md:pl-10 flex flex-col md:flex-row items-start md:items-center md:justify-between">
                <div className="w-full md:w-3/5">
                  <div className="inline-block bg-[#6be0f0] text-[#10142C] font-bold mb-[30px] px-3 py-1 rounded-md text-[50px] ">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-3 md:mx-4 md:mb-[200px]">
              {/* Left Column */}
              <div className="mr-[20px] border-r border-blue-500 h-[300px]">
                <h2 className="text-[28px] leading-tight font-bold mb-4 text-[#10142C]">
                  At 3Line, <br /> we believe everyone deserves access to <br /> financial services, regardless of location or
                  background
                </h2>
                <p className="text-gray-800 text-[22px]  mb-11">
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
            
             {/* <div className="w-[1px] h-[30px] border-r border-blue-500"></div> */}

              {/* Right Column */}
              <div className="mt-[200px] ml-[20px]">
                <h2 className="text-[40px] font-bold mb-4 text-[#10142C] ">Our story</h2>
                <p className="text-black text-[22px] mb-6">
                 <span className="font-bold ">We started with a simple mission:</span> to make financial services more accessible for everyone. Today,
                  we're proud to be a trusted partner for banks, fintechs, and businesses across Nigeria and beyond.
                </p>

                <div className="relative h-[500px]  overflow-hidden">
                  <Image src="/about3.png" alt="Our Team" fill className="object-cover" />
                </div>

<div className="w-full  flex justify-end items-end mt-[40px]">
<Link
                  href="/our-team"
                  className="text-[#000066] hover:text-[#4894F4]/80 flex items-center text-[20px] font-medium mt-4"
                >
                  See more
<Image src="/arrow_right.png" alt="arrow right" width={40} height={40}/>
                </Link>
</div>
             
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
                        <h2 className="text-2xl md:text-3xl lg:text-[55px]  lg:w-[700px]  lg:leading-none font-bold text-white mb-4">
                  We Exist to bridge the Financial Access Gap
                </h2>
                <p className="text-gray-300 lg:text-[22px] max-w-xl">
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
              <div className="bg-white p-6 rounded-xl shadow-sm relative h-[350px]">
                <div className=" p-3 rounded-lg inline-flex items-center justify-center mb-4">
                 <Image src="/for_sme.png" alt="sme" width={70} height={70} />
                </div>
                <div className="mb-2">
                <span className="text-black text-[20px] inline-block bg-[#00D2FF] md:px-3 md:py-1 rounded-md font-bold rotate-[-15deg]">For</span>
                  <h3 className="text-[28px] font-bold text-[#10142C]">SMEs</h3>
                </div>
                <p className="text-gray-600 mb-6 text-[15px]">
                  Get paid faster, access digital banking, and manage transactions in real-time.
                </p>
                <div className="w-[95%] flex justify-end items-end absolute top-[80%]">
              <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium w-12 h-12 rounded-full transition-colors"
                >
                <Image src="/sme_arrow.png" alt="user" width={60} height={60} />
                </Link>
              </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm relative h-[350px]">
                <div className=" p-3 rounded-lg inline-flex items-center justify-center mb-4">
                <Image src="/for_enterprise.png" alt="sme" width={70} height={70} />
                </div>
                <div className="mb-2">
                <span className="text-black text-[20px] inline-block bg-[#00D2FF] md:px-3 md:py-1 rounded-md font-bold rotate-[-15deg]">For</span>
                  <h3 className="text-[28px] font-bold text-[#10142C]">Enterprises</h3>
                </div>
                <p className="text-gray-600 mb-6 text-[15px]">
                  Optimize cash flow with secure, efficient, and scalable payment solutions.
                </p>
                <div className="w-[95%] flex justify-end items-end absolute top-[80%]">
              <Link
                  href="#"
                  className="inline-flex items-center  justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium w-12 h-12 rounded-full transition-colors"
                >
                <Image src="/sme_arrow.png" alt="user" width={60} height={60} />
                </Link>
              </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm relative h-[350px]">
                <div className=" p-3 rounded-lg inline-flex items-center justify-center mb-4 ">
                <Image src="/for_institution.png" alt="sme" width={70} height={70} />
                </div>
                <div className="mb-2">
                <span className="text-black text-[20px] inline-block bg-[#00D2FF] md:px-3 md:py-1 rounded-md font-bold rotate-[-15deg]">For</span>
                  <h3 className="text-[28px] font-bold text-[#10142C]">Financial Institutions</h3>
                </div>
                <p className="text-gray-600 mb-6 text-[15px]">
                  Expand banking services to the unbanked and underserved communities.
                </p>
                <div className="w-[95%] flex justify-end items-end absolute top-[80%]">
              <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium w-12 h-12 rounded-full transition-colors"
                >
                <Image src="/sme_arrow.png" alt="user" width={60} height={60} />
                </Link>
              </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm relative h-[350px]">
                <div className=" p-3 rounded-lg inline-flex items-center justify-center mb-4 ">
                <Image src="/for_community.png" alt="sme" width={70} height={70} />
                </div>
                <div className="mb-2">
                  <span className="text-black text-[20px] inline-block bg-[#00D2FF] md:px-3 md:py-1 rounded-md font-bold rotate-[-15deg]">For</span>
                  <h3 className="text-[28px] font-bold text-[#10142C]">Communities & Governments</h3>
                </div>
                <p className="text-gray-600 mb-6 text-[15px]">Create financial access points where they are needed most.</p>
              <div className="w-[95%] flex justify-end items-end absolute top-[80%]">
              <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium w-12 h-12 rounded-full transition-colors"
                >
                <Image src="/sme_arrow.png" alt="user" width={60} height={60} />
                </Link>
              </div>
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
                  <div className="bg-white p-5 rounded-xl shadow-sm ">
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
        <h2 className="md:ml-[30px] md:mb-6 text-white text-lg md:text-4xl font-bold leading-tight mb-2">
          Join Us in Shaping Africa's Financial Future
        </h2>
        <p className="md:ml-[30px] text-white/70 text-sm md:text-base mb-4">
          Learn more about our mission, vision, and the team behind 3Line.
        </p>
      <div className="w-[65%] absolute top-[70%] left-[90%] flex items-center justify-center">
      <Link
          href="/our-team"
          className="inline-flex items-center bg-transparent  text-white font-medium py-2 px-3 rounded-full text-2xl w-fit"
        >
         <p className="">
         Get started
         </p>
         <Image className="mt-[10px]" src="/arrow_footer.png" alt="arrow" width={80} height={80}/>
        </Link>
      </div>
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