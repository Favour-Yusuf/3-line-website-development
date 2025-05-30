"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#111B41] text-white md:pt-[85px]">
        <div className="container mx-auto ml-[70px] py-8 md:py-12 relative">
          <div className="max-w-3xl py-16 md:py-20 relative z-10">
            <div className="text-sm  mb-2">Get Started</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Start Building and Growing with 3Line</h1>
            <p className="text-gray-300 mb-8 max-w-lg">
            Tell us about your project, and we’ll help you find the right solution.
            </p>
          </div>

          <div className="absolute top-0 right-0 h-full w-1/2">
            <Image src="/contact-us-image3.png" alt="" fill className="object-contain object-right " />
          </div>
        </div>
      </section>

        {/* Start Building Form */}
        <section id="contact-form" className="py-12 px-4 bg-[#EEF3FF]">
        <div className="container mx-auto">
          <div className="bg-[#111B41] rounded-xl overflow-hidden relative">
          

            {/* Background decorative element */}
            <div className="absolute top-0 right-0 h-full w-1/2">
              <Image
                src="/contact-us-image4.png"
                alt=""
                fill
                className="object-contain object-right opacity-30"
              />
            </div>

            {/* Form section with light background */}
            <div className=" bg-[#EEF3FF] pl-8 md:pl-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
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
                          className="border border-gray-300 rounded-md p-3 flex items-center cursor-pointer"
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
                          className="border border-gray-300 rounded-md p-3 flex items-center cursor-pointer"
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
                          className="border border-gray-300 rounded-md p-3 flex items-center cursor-pointer"
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
                          className="border border-gray-300 rounded-md p-3 flex items-center cursor-pointer"
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
                          className="border border-gray-300 rounded-md p-3 flex items-center cursor-pointer"
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

                {/* */}
                <div className="relative order-1 md:order-2">
                  <div className="absolute top-0 right-0 w-[70%] h-[90%] rounded-tl-[50px] overflow-hidden ">
                    <Image src="/contact_us_form.png" alt="Market vendor" fill className="object-cover" />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111B41] text-white h-[50vh]">
        <div className="container mx-auto ml-[70px] py-8 md:py-12 relative">
          <div className="max-w-3xl py-16 md:py-20 relative z-10">
            <div className="text-sm  mb-2">Contact Us</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Let's Talk</h1>
            <p className="text-gray-300 mb-8 max-w-lg">
            Whether you have a question, need support, or want to explore our solutions, we’re here to help.
            </p>
          </div>

          <div className="absolute top-0 right-0 h-full w-1/2">
            <Image src="/contact-us-image3.png" alt="" fill className="object-contain object-right " />
          </div>
        </div>
      </section>
    

    
      {/* Contact Information Card */}
      <section className="py-12 px-4 bg-[#EEF3FF]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-1 gap-4">
  {/* Address */}
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
      <div className="bg-blue-100 p-3 rounded-full h-12 w-12 place-self-start">
        {/* Location Icon */}
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

       {/* Phone */}
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-start">
      <div className="bg-blue-100 p-3 rounded-full h-12 w-12 place-self-start">
        {/* Phone Icon */}
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
                    <div className="">
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+234 800 300 4000</p>
                    </div>
                    <Link href="tel:+2348003004000" className="ml-auto text-blue-600">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

         {/* Email */}
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-start">
      <div className="bg-blue-100 p-3 rounded-full h-12 w-12 place-self-start">
        {/* Email Icon */}
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
                    <div className="">
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
               
                <div className="absolute top-0 right-0 h-full w-full">
                  <Image
                    src="/contact-us-image1.png"
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


    </main>
  )
}
