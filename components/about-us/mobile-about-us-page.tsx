"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import StatsSection from "../home/stats-section"
import PartnersSection from "../home/partners-section"
import SolutionsSlider from "./who-we-server"

export default function MobileAboutUsPage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-[#EEF3FF] mt-[90px]">
     

      <main>
      <div className="min-h-screen w-full flex flex-col bg-[#EEF3FF]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#000066] rounded-xl mx-4 mt-6 overflow-hidden min-h-[500px]">
          <div className="p-6 pb-0 flex flex-col h-full">
            <div className="inline-block bg-[#00D2FF] text-4xl text-[#10142C] px-4 py-2 rounded-md font-bold mb-4  w-fit">
              About us
            </div>
            <h1 className="text-4xl font-bold text-white leading-tight mb-8">
              Driving Financial
              <br />
              Inclusion, One
              <br />
              Transaction
              <br />
              at a Time
            </h1>
          </div>

          {/* Geometric Image Section */}
          <div className="absolute bottom-0 left-0 right-0 h-[300px] overflow-hidden ">
            <div className="relative w-full h-full">
              {/* Diamond shape 1 - Top Left */}
             
                  <Image src="/aboutus_mobile.png" alt="Mobile payment" fill className="object-contain" />
               

            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 bg-[#EEF3FF]">
          <div className="mx-4">
            <h2 className="text-xl font-bold mb-4 text-[#10142C] leading-tight">
              At 3Line,
              <br />
              we believe everyone deserves
              <br />
              access to financial services,
              <br />
              regardless of location or
              <br />
              background
            </h2>
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              Since 2007, we've been bridging financial gaps with technology, ensuring businesses, banks, and
              individuals can move money effortlessly and access the financial tools they need to thrive.
            </p>

            {/* Our Story Section */}
            <div className="mb-8">
              <div className="border-l-2 border-blue-500 pl-4 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-[#10142C]">Our story</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  <span className="font-semibold">We started with a simple mission:</span> to make financial services
                  accessible to everyone, everywhere. Today, we're proud to be a trusted partner for banks, fintechs,
                  and businesses across Nigeria and beyond.
                </p>
              </div>
            </div>

            {/* Team Images */}
            <div className="space-y-4 mb-6">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image src="/about1.png" alt="Professional team meeting" fill className="object-cover" />
              </div>

              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image src="/about3.png" alt="3Line team group photo" fill className="object-cover" />
              </div>
            </div>

            <Link
              href="/our-team"
              className="text-[#4894F4] hover:text-[#4894F4]/80 flex items-center text-base font-medium"
            >
              See more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>

        {/* Partners Section */}
        <PartnersSection />

        {/* Stats Section */}
  <StatsSection />
        {/* Financial Access Gap */}
        <section className="py-6 px-2 bg-[#EEF3FF]">
          <div className="mx-3">
            <div className="bg-[#10142C] rounded-xl overflow-hidden  relative">
              {/* Content */}
              <div className="relative z-10 px-3 py-3">
                <h2 className="text-3xl font-bold text-white mb-5">We Exist to bridge the Financial Access Gap</h2>
                <p className="text-gray-300 text-sm mb-4">
                  Millions of businesses and individuals remain underserved by traditional financial systems. By
                  creating simplified access to financial tools and integrated payment solutions, we share this.
                </p>
              </div>

              {/* */}
              <div className="relative h-40  w-full">
                <div className="absolute bottom-0 right-0 w-full h-full">
                  <Image
                    src="/sme_main.png"
                    alt="Financial Access"
                    fill
                    className="object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
 <SolutionsSlider />

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
