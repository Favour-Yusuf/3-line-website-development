"use client";

import { useState } from "react";

const faqData = [
  {
    section: "General Questions",
    items: [
      { question: "What is 3Line, and what do you do?", answer: "We’re a B2B fintech company that provides payment infrastructure, agency banking, and merchant banking solutions to financial institutions. Our goal is to make payments faster, safer, and more accessible for everyone." },
      { question: "Who are your primary clients?", answer: "Our primary clients are banks, fintechs, and financial institutions. Through them, we empower businesses and individuals with seamless payment solutions." },
      { question: "How does 3Line ensure the security of transactions?", answer: "We take all security seriously. Our solutions are PCI DSS compliant, regulated by the Central Bank of Nigeria (CBN), and feature end-to-end encryption and advanced fraud prevention tools." },
    ],
  },
  {
    section: "Gravity : Agency Banking",
    items: [
      { question: "Can Gravity work with my existing banking systems?", answer: "Absolutely! Gravity is designed to integrate seamlessly with your existing systems, so you don’t have to overhaul your infrastructure." },
      { question: "What is agency banking, and how does Gravity work?", answer: "Agency banking allows financial institutions to expand their reach through a network of agents who offer services like cash deposits, withdrawals, and bill payments. Gravity is our solution that helps banks and fintechs build, manage, and scale these agent networks." },
      { question: "How does Gravity help with fraud prevention?", answer: "Gravity includes advanced monitoring tools that detect and stop fraudulent activities in real-time, ensuring the safety of your transactions." },
    ],
  },
  {
    section: "Medusa : Merchant Banking",
    items: [
      { question: "What is Medusa, and who is it for?", answer: "Medusa is our merchant banking platform designed to help financial institutions offer seamless payment solutions to businesses. It’s perfect for banks and fintechs looking to provide their business customers with tools to manage payments, inventory, and customer engagement." },
      { question: "Can Medusa handle both online and offline payments?", answer: "Yes! Medusa supports omnichannel payments, including cards, transfers, USSD, and QR codes, so businesses can accept payments both online and offline." },
      { question: "How does Medusa help businesses grow?", answer: "Medusa provides actionable business insights and analytics, helping businesses make data-driven decisions about growth strategies." },
    ],
  },
  {
    section: "Payment Infrastructure & APIs",
    items: [
      { question: "What can I build with your APIs?", answer: "Our APIs are highly customizable, so you can build everything from mobile payment apps to digital banking platforms. The possibilities are endless!" },
      { question: "Are your APIs scalable?", answer: "Yes, our APIs are designed to grow with your business, whether you’re a startup or an enterprise." },
      { question: "How easy is it to integrate your APIs into my existing systems?", answer: "Very easy! We provide developer-friendly documentation and support to ensure a smooth integration process." },
    ],
  },
  {
    section: "Compliance & Security",
    items: [
      { question: "Is 3Line regulated?", answer: "Yes, we’re regulated by the Central Bank of Nigeria (CBN) and comply with PCI DSS, NDPR, and ISO 9001 standards." },
      { question: "How does 3Line protect my data?", answer: "We use end-to-end encryption and advanced fraud prevention tools to ensure your data stays private and secure." },
      { question: "What happens if there's a system outage?", answer: "Our infrastructure ensures 99.9% uptime, so your business never stops. We also have redundancy measures in place to handle any unexpected issues." },
    ],
  },
  {
    section: "Getting Started",
    items: [
      { question: "How do I get started with 3Line?", answer: "It’s simple! Just fill out the form on our “Get Started” page, and one of our experts will reach out to guide you through the process." },
      { question: "Do you offer support during onboarding?", answer: "Absolutely! We provide dedicated support to ensure a smooth onboarding experience for all our clients." },
      { question: "How long does it take to set up your solutions?", answer: "The setup time depends on the complexity of your needs, but our team works efficiently to get you up and running as quickly as possible." },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("All");

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredData =
    activeTab === "All"
      ? faqData
      : faqData.filter((section) => section.section === activeTab);

  return (
    <section className="w-full md:ml-8 px-4 py-8 max-w-7xl mx-auto">
      {/* Tabs Section */}
      <div className="flex flex-wrap gap-3 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab("All")}
          className={`px-4 py-2 text-sm bg-white font-semibold rounded-md ${
            activeTab === "All"
              ? " bg-blue-300"
              : "hover:bg-blue-100"
          }`}
        >
          All
        </button>
        {faqData.map((section) => (
          <button
            key={section.section}
            onClick={() => setActiveTab(section.section)}
            className={`px-4 py-2 text-sm bg-white font-semibold rounded-md ${
              activeTab === section.section
                 ? " bg-blue-300"
              : "hover:bg-blue-100"
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
            {section.items.map((item, idx) => {
              const index = parseInt(`${sectionIdx}${idx}`); // unique index
              const isOpen = openIndex === index;

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
                        <span className="italic text-gray-400">Add your answer here...</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
