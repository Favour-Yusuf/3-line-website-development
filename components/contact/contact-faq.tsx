"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FaqCategory = "all" | "general" | "getting-started"
type FaqItem = {
  question: string
  answer: string
  category: string
}

const ContactFaq = () => {
  const [activeTab, setActiveTab] = useState<FaqCategory>("all")
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const faqItems: FaqItem[] = [
    {
      question: "What is 3Line, and what do you do?",
      answer:
        "3Line is a financial technology company that provides payment infrastructure and solutions for businesses, financial institutions, and individuals across Africa. We offer a range of products including agency banking solutions, merchant payment systems, and payment APIs.",
      category: "general",
    },
    {
      question: "Who are your primary clients?",
      answer:
        "Our primary clients include banks, financial institutions, small and medium enterprises (SMEs), large corporations, and individuals looking for reliable payment solutions.",
      category: "general",
    },
    {
      question: "How does 3Line ensure the security of transactions?",
      answer:
        "We implement multiple layers of security including end-to-end encryption, PCI DSS compliance, fraud detection systems, and regular security audits to ensure all transactions are secure and protected.",
      category: "general",
    },
    {
      question: "Can Gravity work with my existing banking systems?",
      answer:
        "Yes, Gravity is designed to integrate seamlessly with existing banking systems through our comprehensive API infrastructure, making implementation quick and straightforward.",
      category: "gravity",
    },
    {
      question: "What is agency banking, and how does Gravity work?",
      answer:
        "Agency banking allows banks to extend their services through third-party agents. Gravity provides the technology infrastructure that enables these agents to offer banking services like deposits, withdrawals, and bill payments on behalf of banks.",
      category: "gravity",
    },
    {
      question: "How does Gravity help with fraud prevention?",
      answer:
        "Gravity includes real-time transaction monitoring, multi-factor authentication, geolocation verification, and transaction limits to prevent fraud and ensure secure operations for all agents.",
      category: "gravity",
    },
    {
      question: "What is Medusa, and who is it for?",
      answer:
        "Medusa is our merchant banking solution designed for businesses of all sizes. It enables merchants to accept various payment methods, manage transactions, and gain insights into their business performance.",
      category: "medusa",
    },
    {
      question: "Can Medusa handle both online and offline payments?",
      answer:
        "Yes, Medusa supports both online payments (web, mobile apps) and offline payments (POS terminals, QR codes) to provide a comprehensive payment solution for all business types.",
      category: "medusa",
    },
    {
      question: "How does Medusa help businesses grow?",
      answer:
        "Medusa provides detailed analytics, customer insights, inventory management, and loyalty program features that help businesses understand their customers better and make data-driven decisions for growth.",
      category: "medusa",
    },
    {
      question: "What can I build with your APIs?",
      answer:
        "Our APIs enable you to build custom payment solutions, integrate payment processing into your applications, create custom financial services, and develop innovative fintech products.",
      category: "api",
    },
    {
      question: "Are your APIs scalable?",
      answer:
        "Yes, our APIs are built to handle high transaction volumes and can scale with your business needs, from startups to enterprise-level operations.",
      category: "api",
    },
    {
      question: "How easy is it to integrate your APIs into my existing systems?",
      answer:
        "We provide comprehensive documentation, SDKs for popular programming languages, and dedicated support to make integration as smooth as possible. Most clients can complete integration within days.",
      category: "api",
    },
    {
      question: "Is 3Line regulated?",
      answer:
        "Yes, 3Line is regulated by the Central Bank of Nigeria and complies with all relevant financial regulations and standards in the countries where we operate.",
      category: "compliance",
    },
    {
      question: "How does 3Line protect my data?",
      answer:
        "We implement strict data protection measures including encryption, access controls, regular security audits, and compliance with data protection regulations like NDPR to ensure your data is always secure.",
      category: "compliance",
    },
    {
      question: "What happens if there's a system outage?",
      answer:
        "We have robust disaster recovery and business continuity plans in place, including redundant systems and backup infrastructure, to minimize downtime and ensure service availability.",
      category: "compliance",
    },
    {
      question: "How do I get started with 3Line?",
      answer:
        "You can get started by contacting our sales team through the contact form on this page, and we'll guide you through the onboarding process based on your specific needs.",
      category: "getting-started",
    },
    {
      question: "Do you offer support during onboarding?",
      answer:
        "Yes, we provide dedicated support throughout the onboarding process, including technical assistance, training, and documentation to ensure a smooth implementation.",
      category: "getting-started",
    },
    {
      question: "How long does it take to set up your solutions?",
      answer:
        "Setup time varies depending on the solution and your specific requirements. Simple integrations can be completed in days, while more complex implementations may take a few weeks.",
      category: "getting-started",
    },
  ]

  const toggleQuestion = (question: string) => {
    if (openQuestion === question) {
      setOpenQuestion(null)
    } else {
      setOpenQuestion(question)
    }
  }

  const filteredFaqs = faqItems.filter((item) => {
    if (activeTab === "all") return true
    if (activeTab === "general" && item.category === "general") return true
    if (activeTab === "getting-started" && item.category === "getting-started") return true
    return false
  })

  // Group FAQs by category for display
  const groupedFaqs: Record<string, FaqItem[]> = {}
  filteredFaqs.forEach((item) => {
    if (!groupedFaqs[item.category]) {
      groupedFaqs[item.category] = []
    }
    groupedFaqs[item.category].push(item)
  })

  // Category titles mapping
  const categoryTitles: Record<string, string> = {
    general: "General questions",
    gravity: "Gravity : Agency Banking",
    medusa: "Medusa : Merchant Banking",
    api: "Payment Infrastructure & APIs",
    compliance: "Compliance & Security",
    "getting-started": "Getting Started",
  }

  return (
    <div className="bg-[#EEF3FF] p-4 rounded-xl">
      {/* Tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        <button
          className={`px-4 py-2 rounded-full text-sm ${activeTab === "all" ? "bg-blue-200 text-blue-800" : "bg-white text-gray-700"}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm ${activeTab === "general" ? "bg-blue-200 text-blue-800" : "bg-white text-gray-700"}`}
          onClick={() => setActiveTab("general")}
        >
          General Questions
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm ${activeTab === "getting-started" ? "bg-blue-200 text-blue-800" : "bg-white text-gray-700"}`}
          onClick={() => setActiveTab("getting-started")}
        >
          Getting Started
        </button>
      </div>

      {/* FAQ Items */}
      <div className="space-y-6">
        {Object.keys(groupedFaqs).map((category) => (
          <div key={category}>
            <h3 className="text-xl font-bold mb-4">{categoryTitles[category]}</h3>
            <div className="space-y-2">
              {groupedFaqs[category].map((item) => (
                <div
                  key={item.question}
                  className="bg-white rounded-lg overflow-hidden"
                  onClick={() => toggleQuestion(item.question)}
                >
                  <div className="p-4 flex justify-between items-center cursor-pointer">
                    <h4 className="font-medium">{item.question}</h4>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${openQuestion === item.question ? "transform rotate-180" : ""}`}
                    />
                  </div>
                  {openQuestion === item.question && (
                    <div className="p-4 pt-0 text-gray-600 text-sm">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactFaq
