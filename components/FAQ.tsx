"use client"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  section: string
  items: FAQItem[]
}

export default function FAQ({ faqData }: { faqData: FAQSection[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("All")

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredData =
    activeTab === "All"
      ? faqData
      : faqData.filter((section) => section.section === activeTab)

  return (
    <section className="w-full md:ml-8 px-4 py-8 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab("All")}
          className={`px-4 py-2 text-sm bg-white font-semibold rounded-md ${
            activeTab === "All" ? "bg-blue-300" : "hover:bg-blue-100"
          }`}
        >
          All
        </button>
        {faqData.map((section) => (
          <button
            key={section.section}
            onClick={() => setActiveTab(section.section)}
            className={`px-4 py-2 text-sm bg-white font-semibold rounded-md ${
              activeTab === section.section ? "bg-blue-300" : "hover:bg-blue-100"
            }`}
          >
            {section.section}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      {filteredData.map((section, sectionIdx) => (
        <div key={section.section} className="mb-12">
          <h2 className="text-xl font-bold mb-4">{section.section}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.items?.map((item, idx) => {
              const index = parseInt(`${sectionIdx}${idx}`)
              const isOpen = openIndex === index

              return (
                <div
                  key={item.question}
                  className="border bg-gray-50 border-gray-200 md:w-[550px] rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center p-4 font-semibold text-left"
                  >
                    {item.question}
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-gray-600">
                      {item.answer || (
                        <span className="italic text-gray-400">
                          Add your answer here...
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
