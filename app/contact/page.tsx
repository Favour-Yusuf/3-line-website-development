"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import ContactFaq from "@/components/contact/contact-faq"

export default function ContactUsPage() {
  const [email, setEmail] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    solution: "Gravity Lite",
    launchDate: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSolutionChange = (solution: string) => {
    setFormData((prev) => ({ ...prev, solution }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      {/* Mobile Form Section */}
      <section className="md:hidden bg-[#111B41] text-white rounded-b-3xl">
        <div className="p-6">
          <div className="text-sm uppercase mb-1">Get Started</div>
          <h2 className="text-2xl font-bold mb-2">Start Building and Growing with 3Line</h2>
          <p className="text-gray-300 text-sm mb-4">
            Tell us about your project, and we'll help you find the right solution.
          </p>
        </div>

        <div className="bg-[#EEF3FF] p-4 rounded-t-3xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="mobile-name" className="block text-sm font-medium text-gray-700 mb-1">
                What's your name?
              </label>
              <input
                type="text"
                id="mobile-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Let's keep this personal"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="mobile-email" className="block text-sm font-medium text-gray-700 mb-1">
                What's the best email to reach you at?
              </label>
              <input
                type="email"
                id="mobile-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="So we can send helpful details"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="mobile-phone" className="block text-sm font-medium text-gray-700 mb-1">
                Got a phone number?
              </label>
              <input
                type="tel"
                id="mobile-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Make it easier to connect"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Which of our solutions interests you?
              </label>
              <p className="text-xs text-gray-500 mb-2">Choose one so we can assist you better.</p>
              <div className="grid grid-cols-2 gap-2">
                <div
                  className={`border ${formData.solution === "Gravity Lite" ? "border-blue-500" : "border-gray-300"} rounded-md p-2 flex items-center cursor-pointer`}
                  onClick={() => handleSolutionChange("Gravity Lite")}
                >
                  <div
                    className={`h-4 w-4 rounded-full border ${formData.solution === "Gravity Lite" ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}
                  >
                    {formData.solution === "Gravity Lite" && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
                  </div>
                  <span className="text-xs">Gravity Lite</span>
                </div>

                <div
                  className={`border ${formData.solution === "Gravity ENT" ? "border-blue-500" : "border-gray-300"} rounded-md p-2 flex items-center cursor-pointer`}
                  onClick={() => handleSolutionChange("Gravity ENT")}
                >
                  <div
                    className={`h-4 w-4 rounded-full border ${formData.solution === "Gravity ENT" ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}
                  >
                    {formData.solution === "Gravity ENT" && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
                  </div>
                  <span className="text-xs">Gravity ENT</span>
                </div>

                <div
                  className={`border ${formData.solution === "Medusa Merchant" ? "border-blue-500" : "border-gray-300"} rounded-md p-2 flex items-center cursor-pointer`}
                  onClick={() => handleSolutionChange("Medusa Merchant")}
                >
                  <div
                    className={`h-4 w-4 rounded-full border ${formData.solution === "Medusa Merchant" ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}
                  >
                    {formData.solution === "Medusa Merchant" && (
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                  <span className="text-xs">Medusa Merchant</span>
                </div>

                <div
                  className={`border ${formData.solution === "Payment APIs" ? "border-blue-500" : "border-gray-300"} rounded-md p-2 flex items-center cursor-pointer`}
                  onClick={() => handleSolutionChange("Payment APIs")}
                >
                  <div
                    className={`h-4 w-4 rounded-full border ${formData.solution === "Payment APIs" ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}
                  >
                    {formData.solution === "Payment APIs" && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
                  </div>
                  <span className="text-xs">Payment APIs</span>
                </div>

                <div
                  className={`border ${formData.solution === "BespokeOffers" ? "border-blue-500" : "border-gray-300"} rounded-md p-2 flex items-center cursor-pointer`}
                  onClick={() => handleSolutionChange("BespokeOffers")}
                >
                  <div
                    className={`h-4 w-4 rounded-full border ${formData.solution === "BespokeOffers" ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}
                  >
                    {formData.solution === "BespokeOffers" && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
                  </div>
                  <span className="text-xs">BespokeOffers</span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="mobile-launchDate" className="block text-sm font-medium text-gray-700 mb-1">
                When do you plan to launch?
              </label>
              <input
                type="text"
                id="mobile-launchDate"
                name="launchDate"
                value={formData.launchDate}
                onChange={handleChange}
                placeholder="A rough idea is great!"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-4">
                Let's Make Payments Work for You
                <br />
                By clicking below, you agree to 3Line's Terms & Conditions and Privacy Policy.
              </p>
              <button
                type="submit"
                className="w-full bg-[#4096FB] text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Send message
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Mobile Careers Section */}
      <section className="md:hidden bg-[#111B41] text-white p-6 mt-6">
        <h2 className="text-2xl font-bold mb-2">Let's Talk</h2>
        <p className="text-sm text-gray-300 mb-4">
          We're an ambitious team shaping the future of payments in Africa. See our job openings below and join us in
          making financial access simpler for everyone.
        </p>
      </section>

      {/* Mobile Contact Information */}
      <section className="md:hidden p-4 mt-6">
        <h2 className="text-xl font-bold mb-4">Contact information</h2>

        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 6.66699L9.0755 11.0503C9.63533 11.4235 10.3647 11.4235 10.9245 11.0503L17.5 6.66699M4.16667 15.8337H15.8333C16.7538 15.8337 17.5 15.0875 17.5 14.167V5.83366C17.5 4.91318 16.7538 4.16699 15.8333 4.16699H4.16667C3.24619 4.16699 2.5 4.91318 2.5 5.83366V14.167C2.5 15.0875 3.24619 15.8337 4.16667 15.8337Z"
                  stroke="#4096FB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium">Email</h3>
              <p className="text-xs text-gray-600">inquiries@3line.com</p>
            </div>
            <Link href="mailto:inquiries@3line.com" className="ml-auto bg-blue-100 p-1 rounded-full">
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </Link>
          </div>

          {/* Phone */}
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 4.16699H6.66667C7.12691 4.16699 7.5 4.54008 7.5 5.00033V7.50033C7.5 7.96057 7.12691 8.33366 6.66667 8.33366H2.5C2.03976 8.33366 1.66667 7.96057 1.66667 7.50033V5.00033C1.66667 4.54008 2.03976 4.16699 2.5 4.16699Z"
                  stroke="#4096FB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 11.667H6.66667C7.12691 11.667 7.5 12.0401 7.5 12.5003V15.0003C7.5 15.4606 7.12691 15.8337 6.66667 15.8337H2.5C2.03976 15.8337 1.66667 15.4606 1.66667 15.0003V12.5003C1.66667 12.0401 2.03976 11.667 2.5 11.667Z"
                  stroke="#4096FB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 4.16699H17.5C17.9602 4.16699 18.3333 4.54008 18.3333 5.00033V7.50033C18.3333 7.96057 17.9602 8.33366 17.5 8.33366H13.3333C12.8731 8.33366 12.5 7.96057 12.5 7.50033V5.00033C12.5 4.54008 12.8731 4.16699 13.3333 4.16699Z"
                  stroke="#4096FB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 11.667H17.5C17.9602 11.667 18.3333 12.0401 18.3333 12.5003V15.0003C18.3333 15.4606 17.9602 15.8337 17.5 15.8337H13.3333C12.8731 15.8337 12.5 15.4606 12.5 15.0003V12.5003C12.5 12.0401 12.8731 11.667 13.3333 11.667Z"
                  stroke="#4096FB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 6.25H12.5M7.5 13.75H12.5"
                  stroke="#4096FB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium">Phone</h3>
              <p className="text-xs text-gray-600">+234 800 300 4000</p>
            </div>
            <Link href="tel:+2348003004000" className="ml-auto bg-blue-100 p-1 rounded-full">
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </Link>
          </div>

          {/* Address */}
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 10.8337C11.3807 10.8337 12.5 9.71437 12.5 8.33366C12.5 6.95295 11.3807 5.83366 10 5.83366C8.61929 5.83366 7.5 6.95295 7.5 8.33366C7.5 9.71437 8.61929 10.8337 10 10.8337Z"
                  stroke="#4096FB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 18.3337C13.3333 15.0003 16.6667 12.0156 16.6667 8.33366C16.6667 4.65176 13.6819 1.66699 10 1.66699C6.31811 1.66699 3.33334 4.65176 3.33334 8.33366C3.33334 12.0156 6.66668 15.0003 10 18.3337Z"
                  stroke="#4096FB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium">Address</h3>
              <p className="text-xs text-gray-600">7A Idejo St, Victoria Island, Lagos 101241, Lagos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Get in Touch */}
      <section className="md:hidden p-4 mt-4">
        <div className="bg-[#4096FB] rounded-xl overflow-hidden relative">
          <div className="p-6 text-white relative z-10">
            <h2 className="text-xl font-bold mb-2">Get in touch!</h2>
            <p className="text-sm mb-4">We're just a message away...</p>
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center bg-[#111B41] hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              Send us a message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile FAQ Section */}
      <section className="md:hidden mt-6">
        <ContactFaq />
      </section>

      {/* Mobile Subscribe Section */}
      <section className="md:hidden p-4 mt-6 bg-[#A7C6FF]">
        <div className="py-6">
          <div className="mb-4">
            <svg width="70" height="32" viewBox="0 0 70 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 0H21.75V32H14.5V0Z" fill="#0A1A4A" />
              <path d="M29 0H36.25V32H29V0Z" fill="#0A1A4A" />
              <path d="M0 0H7.25V32H0V0Z" fill="#0A1A4A" />
              <path d="M43.5 0H70V7.11111H43.5V0Z" fill="#0A1A4A" />
              <path d="M43.5 12.4444H70V19.5556H43.5V12.4444Z" fill="#0A1A4A" />
              <path d="M43.5 24.8889H70V32H43.5V24.8889Z" fill="#0A1A4A" />
            </svg>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
            <h3 className="text-lg font-semibold mb-2">Subscribe to get updates that matter.</h3>
            <p className="text-sm text-gray-600 mb-4">
              Stay informed on payments, business growth, and 3Line news right in your inbox!
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="What's your email?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-[#111B41] text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Mobile Footer Links */}
          <div className="grid grid-cols-3 gap-2 text-xs mb-6">
            <div>
              <h4 className="font-medium mb-2">Products</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    SMEs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Individual
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Company</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Resources</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Great Place to Work Badge */}
          <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
            <div className="flex items-start">
              <div className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">We're Great Place to Work-Certified™</h3>
                <p className="text-xs mt-1">
                  90% of our employees said that when they join the company, you are made to feel welcome.
                </p>
                <p className="text-xs mt-2 italic">Source: 2024 Great Place to Work Trust Index© survey</p>
              </div>
            </div>
          </div>

          {/* Certification and Copyright */}
          <div className="flex items-center text-xs text-gray-700 mb-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.08997 9.00001C9.32507 8.33167 9.78912 7.76811 10.3999 7.40914C11.0107 7.05016 11.7289 6.91894 12.4271 7.03872C13.1254 7.15849 13.7588 7.52153 14.215 8.06353C14.6713 8.60554 14.921 9.29153 14.92 10C14.92 12 11.92 13 11.92 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 17H12.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            3line is regulated by the Central Bank of Nigeria
          </div>

          <div className="text-xs text-gray-700 mb-4">© 2023 3line</div>

          <div className="flex gap-2">
            <div className="bg-white p-1 rounded-md">
              <Image src="/images/pci-dss.png" alt="PCI DSS" width={24} height={24} />
            </div>
            <div className="bg-white p-1 rounded-md">
              <Image src="/images/iso.png" alt="ISO" width={24} height={24} />
            </div>
            <div className="bg-white p-1 rounded-md">
              <Image src="/images/ndpr.png" alt="NDPR" width={24} height={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Hero Section - Hidden on Mobile */}
      <section className="hidden md:block relative overflow-hidden bg-[#111B41] text-white">
        <div className="container mx-auto px-4 py-8 md:py-16 relative">
          <div className="max-w-3xl py-8 md:py-12 relative z-10">
            <div className="text-sm uppercase mb-2">Contact Us</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Let's Talk</h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              Whether you have a question, need support, or want to explore our solutions, we're here to help.
            </p>
          </div>

          {/* Background decorative element */}
          <div className="absolute top-0 right-0 h-full w-1/2 opacity-30">
            <Image src="/images/contact-us-desktop-image3.png" alt="" fill className="object-contain object-right" />
          </div>
        </div>
      </section>

      {/* Desktop Contact Information - Hidden on Mobile */}
      <section className="hidden md:block py-8 md:py-12 px-4 bg-[#EEF3FF]">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 6.66699L9.0755 11.0503C9.63533 11.4235 10.3647 11.4235 10.9245 11.0503L17.5 6.66699M4.16667 15.8337H15.8333C16.7538 15.8337 17.5 15.0875 17.5 14.167V5.83366C17.5 4.91318 16.7538 4.16699 15.8333 4.16699H4.16667C3.24619 4.16699 2.5 4.91318 2.5 5.83366V14.167C2.5 15.0875 3.24619 15.8337 4.16667 15.8337Z"
                      stroke="#4096FB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">inquiries@3line.com</p>
                </div>
                <Link href="mailto:inquiries@3line.com" className="ml-auto text-blue-600">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 4.16699H6.66667C7.12691 4.16699 7.5 4.54008 7.5 5.00033V7.50033C7.5 7.96057 7.12691 8.33366 6.66667 8.33366H2.5C2.03976 8.33366 1.66667 7.96057 1.66667 7.50033V5.00033C1.66667 4.54008 2.03976 4.16699 2.5 4.16699Z"
                      stroke="#4096FB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 11.667H6.66667C7.12691 11.667 7.5 12.0401 7.5 12.5003V15.0003C7.5 15.4606 7.12691 15.8337 6.66667 15.8337H2.5C2.03976 15.8337 1.66667 15.4606 1.66667 15.0003V12.5003C1.66667 12.0401 2.03976 11.667 2.5 11.667Z"
                      stroke="#4096FB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3333 4.16699H17.5C17.9602 4.16699 18.3333 4.54008 18.3333 5.00033V7.50033C18.3333 7.96057 17.9602 8.33366 17.5 8.33366H13.3333C12.8731 8.33366 12.5 7.96057 12.5 7.50033V5.00033C12.5 4.54008 12.8731 4.16699 13.3333 4.16699Z"
                      stroke="#4096FB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3333 11.667H17.5C17.9602 11.667 18.3333 12.0401 18.3333 12.5003V15.0003C18.3333 15.4606 17.9602 15.8337 17.5 15.8337H13.3333C12.8731 15.8337 12.5 15.4606 12.5 15.0003V12.5003C12.5 12.0401 12.8731 11.667 13.3333 11.667Z"
                      stroke="#4096FB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 6.25H12.5M7.5 13.75H12.5"
                      stroke="#4096FB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+234 800 300 4000</p>
                </div>
                <Link href="tel:+2348003004000" className="ml-auto text-blue-600">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 10.8337C11.3807 10.8337 12.5 9.71437 12.5 8.33366C12.5 6.95295 11.3807 5.83366 10 5.83366C8.61929 5.83366 7.5 6.95295 7.5 8.33366C7.5 9.71437 8.61929 10.8337 10 10.8337Z"
                      stroke="#4096FB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 18.3337C13.3333 15.0003 16.6667 12.0156 16.6667 8.33366C16.6667 4.65176 13.6819 1.66699 10 1.66699C6.31811 1.66699 3.33334 4.65176 3.33334 8.33366C3.33334 12.0156 6.66668 15.0003 10 18.3337Z"
                      stroke="#4096FB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">7A Idejo St, Victoria Island, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Get in Touch - Hidden on Mobile */}
      <section className="hidden md:block py-8 md:py-12 px-4 bg-[#EEF3FF]">
        <div className="container mx-auto">
          <div className="bg-[#4096FB] rounded-xl overflow-hidden relative">
            <div className="p-6 md:p-12 text-white relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in touch!</h2>
              <p className="mb-6">We're just a message away...</p>
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#4096FB] font-medium py-3 px-6 rounded-full transition-colors"
              >
                Send us a message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 h-full w-1/2 opacity-30">
              <Image src="/images/contact-us-desktop-image1.png" alt="" fill className="object-contain object-right" />
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Start Building Form - Hidden on Mobile */}
      <section id="contact-form" className="hidden md:block py-8 md:py-12 px-4 bg-[#EEF3FF]">
        <div className="container mx-auto">
          <div className="bg-[#111B41] rounded-xl overflow-hidden relative">
            {/* Top section with heading */}
            <div className="p-6 md:p-12 text-white relative z-10">
              <div className="text-sm uppercase mb-2">Get Started</div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Start Building and Growing with 3Line</h2>
              <p className="text-gray-300 mb-4 max-w-lg">
                Tell us about your project, and we'll help you find the right solution.
              </p>
            </div>

            {/* Background decorative element */}
            <div className="absolute top-0 right-0 h-full w-1/2 opacity-30">
              <Image src="/images/contact-us-desktop-image4.png" alt="" fill className="object-contain object-right" />
            </div>

            {/* Form section with light background */}
            <div className="bg-[#EEF3FF] p-6 md:p-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Form */}
                <div className="bg-white p-6 rounded-xl shadow-sm order-2 md:order-1">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        What's your name?
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Let's keep this personal"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        What's the best email to reach you at?
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="So we can send helpful details"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Got a phone number?
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Make it easier to connect"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Which of our solutions interests you?
                      </label>
                      <p className="text-xs text-gray-500 mb-2">Choose one so we can assist you better.</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div
                          className={`border ${formData.solution === "Gravity Lite" ? "border-blue-500" : "border-gray-300"} rounded-md p-3 flex items-center cursor-pointer`}
                          onClick={() => handleSolutionChange("Gravity Lite")}
                        >
                          <div
                            className={`h-4 w-4 rounded-full border ${formData.solution === "Gravity Lite" ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}
                          >
                            {formData.solution === "Gravity Lite" && (
                              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            )}
                          </div>
                          <span className="text-sm">Gravity Lite</span>
                        </div>

                        <div
                          className={`border ${formData.solution === "Gravity ENT" ? "border-blue-500" : "border-gray-300"} rounded-md p-3 flex items-center cursor-pointer`}
                          onClick={() => handleSolutionChange("Gravity ENT")}
                        >
                          <div
                            className={`h-4 w-4 rounded-full border ${formData.solution === "Gravity ENT" ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}
                          >
                            {formData.solution === "Gravity ENT" && (
                              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            )}
                          </div>
                          <span className="text-sm">Gravity ENT</span>
                        </div>

                        <div
                          className={`border ${formData.solution === "Medusa Merchant" ? "border-blue-500" : "border-gray-300"} rounded-md p-3 flex items-center cursor-pointer`}
                          onClick={() => handleSolutionChange("Medusa Merchant")}
                        >
                          <div
                            className={`h-4 w-4 rounded-full border ${formData.solution === "Medusa Merchant" ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}
                          >
                            {formData.solution === "Medusa Merchant" && (
                              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            )}
                          </div>
                          <span className="text-sm">Medusa Merchant</span>
                        </div>

                        <div
                          className={`border ${formData.solution === "Payment APIs" ? "border-blue-500" : "border-gray-300"} rounded-md p-3 flex items-center cursor-pointer`}
                          onClick={() => handleSolutionChange("Payment APIs")}
                        >
                          <div
                            className={`h-4 w-4 rounded-full border ${formData.solution === "Payment APIs" ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}
                          >
                            {formData.solution === "Payment APIs" && (
                              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            )}
                          </div>
                          <span className="text-sm">Payment APIs</span>
                        </div>

                        <div
                          className={`border ${formData.solution === "BespokeOffers" ? "border-blue-500" : "border-gray-300"} rounded-md p-3 flex items-center cursor-pointer`}
                          onClick={() => handleSolutionChange("BespokeOffers")}
                        >
                          <div
                            className={`h-4 w-4 rounded-full border ${formData.solution === "BespokeOffers" ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}
                          >
                            {formData.solution === "BespokeOffers" && (
                              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            )}
                          </div>
                          <span className="text-sm">BespokeOffers</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="launchDate" className="block text-sm font-medium text-gray-700 mb-1">
                        When do you plan to launch?
                      </label>
                      <input
                        type="text"
                        id="launchDate"
                        name="launchDate"
                        value={formData.launchDate}
                        onChange={handleChange}
                        placeholder="A rough idea is great!"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Let's Make Payments Work for You</h3>
                      <p className="text-xs text-gray-500 mb-4">
                        By clicking below, you agree to 3Line's Terms & Conditions and Privacy Policy.
                      </p>
                      <button
                        type="submit"
                        className="w-full bg-[#4096FB] text-white py-3 px-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        Send message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </div>

                {/* Images */}
                <div className="relative order-1 md:order-2">
                  <div className="absolute top-0 right-0 w-40 h-60 rounded-tl-[50px] overflow-hidden">
                    <Image
                      src="/images/contact-us-desktop-image2.png"
                      alt="Market vendor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-1/4 w-40 h-60 rounded-tr-[50px] overflow-hidden">
                    <Image
                      src="/images/contact-us-desktop-image2.png"
                      alt="Office worker"
                      fill
                      className="object-cover object-bottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Contact Information Card - Hidden on Mobile */}
      <section className="hidden md:block py-8 md:py-12 px-4 bg-[#EEF3FF]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 10.8337C11.3807 10.8337 12.5 9.71437 12.5 8.33366C12.5 6.95295 11.3807 5.83366 10 5.83366C8.61929 5.83366 7.5 6.95295 7.5 8.33366C7.5 9.71437 8.61929 10.8337 10 10.8337Z"
                          stroke="#4096FB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 18.3337C13.3333 15.0003 16.6667 12.0156 16.6667 8.33366C16.6667 4.65176 13.6819 1.66699 10 1.66699C6.31811 1.66699 3.33334 4.65176 3.33334 8.33366C3.33334 12.0156 6.66668 15.0003 10 18.3337Z"
                          stroke="#4096FB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">7A Idejo St, Victoria Island, Lagos 101241, Lagos</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.5 4.16699H6.66667C7.12691 4.16699 7.5 4.54008 7.5 5.00033V7.50033C7.5 7.96057 7.12691 8.33366 6.66667 8.33366H2.5C2.03976 8.33366 1.66667 7.96057 1.66667 7.50033V5.00033C1.66667 4.54008 2.03976 4.16699 2.5 4.16699Z"
                          stroke="#4096FB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.5 11.667H6.66667C7.12691 11.667 7.5 12.0401 7.5 12.5003V15.0003C7.5 15.4606 7.12691 15.8337 6.66667 15.8337H2.5C2.03976 15.8337 1.66667 15.4606 1.66667 15.0003V12.5003C1.66667 12.0401 2.03976 11.667 2.5 11.667Z"
                          stroke="#4096FB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.3333 4.16699H17.5C17.9602 4.16699 18.3333 4.54008 18.3333 5.00033V7.50033C18.3333 7.96057 17.9602 8.33366 17.5 8.33366H13.3333C12.8731 8.33366 12.5 7.96057 12.5 7.50033V5.00033C12.5 4.54008 12.8731 4.16699 13.3333 4.16699Z"
                          stroke="#4096FB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.3333 11.667H17.5C17.9602 11.667 18.3333 12.0401 18.3333 12.5003V15.0003C18.3333 15.4606 17.9602 15.8337 17.5 15.8337H13.3333C12.8731 15.8337 12.5 15.4606 12.5 15.0003V12.5003C12.5 12.0401 12.8731 11.667 13.3333 11.667Z"
                          stroke="#4096FB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 6.25H12.5M7.5 13.75H12.5"
                          stroke="#4096FB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+234 800 300 4000</p>
                    </div>
                    <Link href="tel:+2348003004000" className="ml-auto text-blue-600">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.5 6.66699L9.0755 11.0503C9.63533 11.4235 10.3647 11.4235 10.9245 11.0503L17.5 6.66699M4.16667 15.8337H15.8333C16.7538 15.8337 17.5 15.0875 17.5 14.167V5.83366C17.5 4.91318 16.7538 4.16699 15.8333 4.16699H4.16667C3.24619 4.16699 2.5 4.91318 2.5 5.83366V14.167C2.5 15.0875 3.24619 15.8337 4.16667 15.8337Z"
                          stroke="#4096FB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">inquiries@3line.com</p>
                    </div>
                    <Link href="mailto:inquiries@3line.com" className="ml-auto text-blue-600">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-[#4096FB] rounded-xl overflow-hidden relative h-full">
                <div className="p-8 text-white relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Get in touch!</h2>
                    <p className="mb-6">We're just a message away.</p>
                  </div>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center justify-center bg-[#111B41] hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-full transition-colors mt-auto"
                  >
                    Send us a message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 h-full w-full">
                  <Image
                    src="/images/contact-us-mobile-image3.png"
                    alt=""
                    fill
                    className="object-contain object-right opacity-30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop FAQ Section - Hidden on Mobile */}
      <section className="hidden md:block py-8 md:py-12 px-4 bg-[#EEF3FF]">
        <div className="container mx-auto">
          <ContactFaq />
        </div>
      </section>

      {/* Desktop Subscribe Section - Hidden on Mobile */}
      <section className="hidden md:block py-8 md:py-12 px-4 bg-[#A7C6FF]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-6 md:mb-0">
              <svg width="70" height="32" viewBox="0 0 70 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 0H21.75V32H14.5V0Z" fill="#0A1A4A" />
                <path d="M29 0H36.25V32H29V0Z" fill="#0A1A4A" />
                <path d="M0 0H7.25V32H0V0Z" fill="#0A1A4A" />
                <path d="M43.5 0H70V7.11111H43.5V0Z" fill="#0A1A4A" />
                <path d="M43.5 12.4444H70V19.5556H43.5V12.4444Z" fill="#0A1A4A" />
                <path d="M43.5 24.8889H70V32H43.5V24.8889Z" fill="#0A1A4A" />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-8 hidden md:grid">
              <div>
                <h4 className="font-medium text-sm mb-3">Products</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      SMEs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Enterprise
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Individual
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-3">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-3">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-300 pt-8">
            <div className="mb-6 md:mb-0">
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-2 rounded-md">
                  <Image src="/images/pci-dss.png" alt="PCI DSS" width={40} height={40} />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <Image src="/images/iso.png" alt="ISO" width={40} height={40} />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <Image src="/images/ndpr.png" alt="NDPR" width={40} height={40} />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <Image src="/images/cbn.png" alt="CBN" width={40} height={40} />
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                © 2023 3line. 3line is regulated by the Central Bank of Nigeria.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm max-w-md">
                <h3 className="text-lg font-semibold mb-2">Subscribe to get updates that matter.</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Stay informed on payments, business growth, and more right in your inbox!
                </p>
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    placeholder="What's your email?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#111B41] text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
