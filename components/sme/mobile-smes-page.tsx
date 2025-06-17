"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"

const SMESolutions = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null)

  const toggleSolution = (index: number) => {
    setExpandedSolution(expandedSolution === index ? null : index)
  }

  const solutions = [
    {
      id: 1,
      title: "Gravity Lite",
      subtitle: "Launch your agent banking business in 24 hours",
      description:
        "Expand financial access in your community with Gravity Lite, our agency banking solution designed for small to medium-sized businesses and entrepreneurs.",
      keyFeatures: [
        {
          title: "Fast & Easy Agent Onboarding",
          description: "Set up and start transacting within 24 hours.",
        },
        {
          title: "Multi-Channel Transaction",
          description: "Accept cash, digital wallets, and card payments",
        },
        {
          title: "Real-Time Monitoring",
          description: "Track agent performance and transactions on the go.",
        },
        {
          title: "Scalable Network",
          description: "Build and manage a thriving agent network effortlessly.",
        },
      ],
      whoItsFor: [
        {
          icon: "👤",
          text: "Entrepreneurs looking to start an agent banking business.",
        },
        {
          icon: "🏢",
          text: "SMEs that want to extend banking services to underserved areas.",
        },
      ],
      ctaText: "Get started",
    },
    {
      id: 2,
      title: "Medusa Merchant",
      subtitle: "Your end-to-end business payment solution",
      description:
        "Medusa Merchant is built to simplify payments, improve business operations, and provide real-time insights that help businesses grow.",
      keyFeatures: [
        {
          title: "Omnichannel Payments",
          description: "Accept payments via cards, transfers, USSD, QR codes, and more.",
        },
        {
          title: "POS & Terminal Integration",
          description: "Enable fast and secure in-person transactions.",
        },
        {
          title: "Inventory Management",
          description: "Track and manage stock effortlessly.",
        },
        {
          title: "Customer Management Tools",
          description: "Build loyalty programs and track customer behavior.",
        },
        {
          title: "Business Insights",
          description: "Data-driven analytics for better decision-making.",
        },
      ],
      whoItsFor: [
        {
          icon: "🏢",
          text: "SMEs looking to streamline payment processes and improve efficiency.",
        },
        {
          icon: "👤",
          text: "Business owners who want real-time insights to optimize sales and operations.",
        },
      ],
      ctaText: "Explore",
    },
    {
      id: 3,
      title: "Magtipon Lite",
      subtitle: "Simplified payments for growing businesses",
      description:
        "A powerful payment gateway that allows businesses to issue virtual accounts, process bulk payments, and offer value-added services like airtime and bill payments.",
      keyFeatures: [
        {
          title: "Virtual Account Issuance",
          description: "Enable seamless fund transfers.",
        },
        {
          title: "Bulk & Individual Payments",
          description: "Pay vendors and employees with ease.",
        },
        {
          title: "Value-Added Services",
          description: "Facilitate airtime, bill payments, and more.",
        },
        {
          title: "Instant Settlements",
          description: "Receive payments without delays.",
        },
      ],
      whoItsFor: [],
      ctaText: "Get started",
    },
  ]

  return (
    <section className="py-8 bg-[#EEF3FF] relative">
      <div className="absolute inset-0 z-0">
        <Image src="/sme-background.png" alt="Background pattern" fill className="object-cover opacity-50" />
      </div>
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-6 text-[#10142C] mx-3">SMEs Solutions developed with you in mind...</h2>

        {solutions.map((solution, index) => (
          <div key={solution.id} className="bg-transparent rounded-xl overflow-hidden shadow-sm mb-6 mx-3">
            <div className="p-6">
              <div className="bg-[#10142C] text-white w-10 h-10 flex items-center justify-center rounded-lg mb-4">
                <span className="text-lg font-bold">{solution.id}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#10142C]">{solution.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">{solution.subtitle}</p>
              <p className="text-gray-600 mb-4 text-sm">{solution.description}</p>

              <button
                onClick={() => toggleSolution(index)}
                className="inline-flex items-center text-[#10142C] font-medium text-sm hover:text-blue-600 transition-colors"
              >
                Learn more
                {expandedSolution === index ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>

              {/* Expanded Content */}
              {expandedSolution === index && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  {/* Key Features */}
                  <div className="mb-8 ">
                    <h4 className="text-lg font-bold mb-4 text-[#10142C]">Key features</h4>
                    <div className="space-y-4 ">
                      {solution.keyFeatures.map((feature, featureIndex) => (
                        <div className="bg-white bg-opacity-40 py-[20px] pl-[10px] pb-[20px] rounded-[20px]" key={featureIndex}>
                          <h5 className="font-semibold text-[#10142C] mb-1 ">{feature.title}</h5>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-blue-500"></div>
                  <br />

                  {/* Who it's for */}
                  {solution.whoItsFor.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-4 text-[#10142C]">Who it's for</h4>
                      <div className="space-y-3">
                        {solution.whoItsFor.map((target, targetIndex) => (
                          <div key={targetIndex} className="flex  items-center gap-3 bg-white bg-opacity-40 py-[20px] pl-[10px] pb-[20px] rounded-[20px]">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm">{target.icon}</span>
                            </div>
                            <p className="text-gray-600 text-sm">{target.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                 <div className="w-full flex items-end justify-end">
                 <Link
                    href="#"
                    className="inline-flex items-center justify-center  text-[#000066] font-bold py-2 px-4 rounded-full transition-colors "
                  >
                   Get Started
                    <Image src="/sme_arrow.png" alt="user" width={60} height={60} />
                   
                  </Link>
                 </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SMESolutions
