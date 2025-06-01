"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const OurSolutions = () => {
  return (
    <div className="w-full relative flex justify-center items-center py-16 bg-white overflow-hidden bg-[#E8F0FF]">
      {/* Background logo (mobile only) */}
      <Image
        src="/solution_side_image.png"
        alt="Background logo"
        width={600}
        height={600}
        className="absolute z-0 opacity-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:hidden"
      />

      {/* Mobile View */}
      <section className="sm:hidden w-[90%] max-w-md bg-white/70 backdrop-blur-xl rounded-xl z-10 p-4 shadow-lg">
      <div className=" w-full mb-[20px]">
      <h2 className="text-xl font-bold text-black mb-6 text-left">Our solutions</h2>
        <p>Ready to Transform Your Payments? Join the hundreds of financial institutions and businesses already growing with 3Line.</p>
      </div>


        {/* Card */}
        {[
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
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 mb-4 shadow flex flex-col gap-3 relative"
          >
            <div className="flex items-start gap-3">
              <Image src={item.icon} alt={`${item.title} Icon`} width={40} height={40} />
              <div>
                <h3 className="text-md font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </div>
            <button className="absolute  bottom-4 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </section>

      {/* Desktop View */}
      <section className="hidden sm:grid w-[95%] mx-auto z-10">
      <div className="w-full mb-[25px]">
      <h2 className="text-4xl font-bold text-black mb-6 text-left">Our solutions</h2>
        <p>Ready to Transform Your Payments? Join the hundreds of <br />financial institutions and businesses already growing with 3Line.</p>
      </div>

        <div className="grid grid-cols-3 gap-8">
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl py-20 px-6 flex flex-col gap-4"
            >
              <Image src={item.icon} alt={`${item.title} Icon`} width={50} height={50} />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
              <button className="absolute mb-[30px] bottom-0 right-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mt-auto ml-auto">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurSolutions
