

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"



export default function MobileEnterprisePage() {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null)

  const toggleSolution = (index: number) => {
    setExpandedSolution(expandedSolution === index ? null : index)
  }

  const solutions = [
    {
      id: 1,
      title: "Gravity Enterprise",
      subtitle: "Build & scale a nationwide agent network",
      description:
        "A fully scalable agency banking solution for financial institutions and large-scale fintechs looking to expand their reach.",
      keyFeatures: [
        {
          title: "Enterprise-Grade Network Management",
          description: "Efficiently onboard and manage thousands of agents.",
        },
        {
          title: "Real-Time Transaction Processing",
          description: "Ensure smooth, uninterrupted services.",
        },
        {
          title: "Customizable Integrations",
          description: "Seamlessly connect with your banking infrastructure.",
        },
        {
          title: "Fraud Prevention & Security",
          description: "Advanced monitoring to prevent fraudulent activities.",
        },
      ],
      whoItsFor: [
        {
          icon: "🏦",
          text: "Financial institutions and organisations aiming to extend financial services nationwide.",
        },
        {
          icon: "🏢",
          text: "Financial institutions looking to manage large-scale agent networks.",
        },
      ],
      ctaText: "Get started",
    },
    {
      id: 2,
      title: "Magtipon Enterprise",
      subtitle: "The infrastructure for digital banking",
      description:
        "A full-suite platform designed to help banks and fintechs build and manage digital banking services efficiently.",
      keyFeatures: [
        {
          title: "End-to-End Digital Banking Solutions",
          description: "From customer onboarding to transactions.",
        },
        {
          title: "Swift, Secure Payments",
          description: "Process transactions seamlessly across all channels.",
        },
        {
          title: "High Uptime & Reliability",
          description: "Ensure smooth banking operations without disruptions.",
        },
        {
          title: "Scalable to Millions of Users",
          description: "Built for institutions handling high transaction volumes.",
        },
      ],
      whoItsFor: [],
      ctaText: "Get started",
    },
  ]
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF3FF] mt-[55px]">
   

      <main className="flex-1">
       <section className="relative bg-[#EEF3FF] overflow-hidden">
                <div className="absolute inset-0 z-0 ">
                  <Image
                    src="/sme-background.png"
                    alt="Background pattern"
                    fill
                    className="object-cover opacity-50"
                    priority
                  />
                </div>
                <div className=" py-6 relative z-10">
                  <div className="bg-[#000066] rounded-xl overflow-hidden mx-3">
                    <div className="">
                      <div className="ml-4 mt-4 inline-block bg-[#00D2FF] text-[35px] text-[#10142C] px-3 py-1 rounded-md font-bold mb-4 ">
                          Enterprise
                      </div>
                      <h1 className="ml-4 text-5xl font-bold mb-4 leading-tight text-white">
                      Scalable infrastructure
for large organizations
                      </h1>
                      
                      <p className="ml-4 text-white opacity-60 font-light mb-6 text-sm">
                      For banks, large fintechs, and enterprises, scale and reliability are everything. Our enterprise solutions provide robust infrastructure for financial transactions, digital banking, and agent network management.
                      </p>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className=" relative h-[200px] w-[350px] rounded-lg overflow-hidden">
                          <Image src="/sme_main.png" alt="SME Solutions" fill className="object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

        {/* Solutions Section */}
        <section className="py-8 bg-[#EEF3FF] relative">
      <div className="absolute inset-0 z-0">
        <Image src="/sme-background.png" alt="Background pattern" fill className="object-cover opacity-50" />
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-[#10142C] mx-5">Powering the Future of Digital Banking</h2>

        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className={` rounded-xl overflow-hidden shadow-sm mx-3 ${index === 0 ? "mt-6 " : "mt-6 bg-transparent"} `} 
          >
            <div className="p-6">
              <div className="bg-[#10142C] text-white w-10 h-10 flex items-center justify-center rounded-lg mb-4">
                <span className="text-lg font-bold">{solution.id}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#10142C]">{solution.title}</h3>
              <p className="text-black mb-3 text-sm font-bold">{solution.subtitle}</p>
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
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-4 text-[#10142C]">Key features</h4>
                    <div className="space-y-4">
                      {solution.keyFeatures.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="bg-white bg-opacity-40 py-[20px] pl-[10px] pb-[20px] rounded-[20px]"
                        >
                          <h5 className="font-semibold text-[#10142C] mb-1">{feature.title}</h5>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-blue-500"></div>
                  <br />

                  {/* Who it's for */}
                  {solution.whoItsFor.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-4 text-[#10142C]">Who it's for</h4>
                      <div className="space-y-3">
                        {solution.whoItsFor.map((target, targetIndex) => (
                          <div
                            key={targetIndex}
                            className="flex items-center gap-3 bg-white bg-opacity-40 py-[20px] pl-[10px] pb-[20px] rounded-[20px]"
                          >
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
                      className="inline-flex items-center justify-center text-[#000066] font-bold py-2 px-4 rounded-full transition-colors"
                    >
                      {solution.ctaText}
                      <Image src="/sme_arrow.png" alt="arrow" width={60} height={60} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
      </main>

 
    </div>
  )
}
