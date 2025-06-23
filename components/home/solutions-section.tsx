"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const OurSolutions = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const solutions = [
    {
      icon: "/sme_icon.png",
      title: "SMEs",
      text: "Get paid faster, access digital banking, and manage transactions in realtime.",
    },
    {
      icon: "/bank_icon.png",
      title: "Enterprise",
      text: "Optimize cash flow with secure, efficient, and scalable payment solutions.",
    },
    {
      icon: "/profile_icon.png",
      title: "Individual",
      text: "Experience fast, easy, and convenient payment options for your personal and everyday transactions.",
    },
  ]

  return (
    <div className="w-full relative flex justify-center items-center py-16  overflow-hidden bg-[#E8F0FF]">
      {/* Background Image for all screens */}
      <Image
        src="/solutions_bg.png"
        alt="Background logo"
        fill
        className="absolute z-10 opacity-50 md:opacity-10 object-cover left-[80%] top-0 w-[100%] h-full "
      />

      {/* Mobile View */}
      <section className="sm:hidden w-[90%] max-w-md  rounded-xl z-10 p-4 shadow-lg">
        <div className="w-full mb-[20px]">
          <h2 className="text-xl font-bold text-black mb-6 text-left">Our solutions</h2>
          <p>
            Ready to Transform Your Payments? Join the hundreds of financial institutions and businesses already growing
            with 3Line.
          </p>
        </div>

        {solutions.map((item, index) => (
          <div
            key={index}
            className=" rounded-xl p-4 mb-4 shadow flex flex-col gap-3 relative"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start gap-3">
              <Image src={item.icon || "/placeholder.svg"} alt={`${item.title} Icon`} width={40} height={40} />
              <div>
                <h3 className="text-md font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </div>
            <button
              className={`absolute bottom-0 right-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-300 ${
                hoveredCard === index ? "bg-[#0A1A4A]" : "bg-blue-500"
              }`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </section>

      {/* Desktop View */}
      <section className="hidden sm:grid w-[95%] mx-auto z-10">
        <div className="w-full mb-[25px]">
          <h2 className="text-[50px] font-bold text-black mb-6 text-left">Our solutions</h2>
          <p className="text-[23px] text-gray-700">
            Ready to Transform Your Payments? Join the hundreds of <br />
            financial institutions and businesses already growing with 3Line.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`relative cursor-pointer transition-all duration-700 bg-white rounded-2xl shadow-xl py-20 flex flex-col gap-4 ${
                hoveredCard === index ? "px-12 scale-105" : hoveredCard !== null ? "px-6 scale-95 opacity-80" : "px-6"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Image src={item.icon || "/placeholder.svg"} alt={`${item.title} Icon`} width={50} height={50} />
              <h3 className="text-[30px] font-bold">{item.title}</h3>
              <p className="text-gray-600 text-[20px]">{item.text}</p>

              <div className="absolute bottom-6 right-6 flex items-center gap-4">
                <div
                  className={`transition-all duration-500 ${
                    hoveredCard === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                  }`}
                >
                  <span className="text-[#0A1A4A] font-semibold text-[18px] whitespace-nowrap">Learn more</span>
                </div>

                <button
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    hoveredCard === index ? "bg-[#0A1A4A]" : "bg-blue-500"
                  }`}
                >
                  <ArrowUpRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurSolutions
