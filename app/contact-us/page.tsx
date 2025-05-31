"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import ContactUsForm from "@/components/contact_us_page/contact-us-form"

export default function ContactUsPage() {
  const [email, setEmail] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    solution: "Gravity Lite",
    launchDate: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      <section className="relative overflow-hidden text-white  md:pt-[85px] md:bg-[#111B41] bg-[#000066] rounded-[15px] md:mt-0 mt-[70px]">
  <div className="container mx-auto ml-[20px] md:ml-[70px] py-8 md:py-12 relative">
    <div className="max-w-full md:max-w-3xl py-12 md:py-20 relative z-10 pr-4">
      <div className="text-sm md:mb-2 text-white mb-[20px] ">Get Started</div>
      <h1 className="text-4xl leading-tight md:text-5xl font-bold mb-[20px] md:leading-tight">
        Start Building <br /> and Growing <br />with 3Line
      </h1>
      <p className="text-gray-300 md:text-gray-300 mb-8 md:max-w-lg text-sm md:text-base">
        Tell us about your project, and we’ll help <br /> you find the right solution.
      </p>
    </div>

    {/* Desktop image */}
    <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
      <Image src="/contact-us-image3.png" alt="" fill className="object-contain object-right" />
    </div>

    {/* Mobile image */}
    <div className="block md:hidden absolute right-0 top-0 h-full w-[340px]">
      <Image src="/contactus_mobile_image.png" alt="Mobile Decoration" fill className="object-contain" />
    </div>
  </div>
</section>
{/* form */}
<ContactUsForm />


{/* Desktop View: visible on md and up */}
<section className="relative overflow-hidden bg-[#111B41] text-white h-[50vh] hidden md:block">
  <div className="container mx-auto ml-[70px] py-8 md:py-12 relative">
    <div className="max-w-3xl py-16 md:py-20 relative z-10">
      <div className="text-sm mb-2">Contact Us</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Let's Talk</h1>
      <p className="text-gray-300 mb-8 max-w-lg">
        Whether you have a question, need support, or want to explore our solutions, we’re here to help.
      </p>
    </div>

    <div className="absolute top-0 right-0 h-full w-1/2">
      <Image src="/contact-us-image3.png" alt="" fill className="object-contain object-right" />
    </div>
  </div>
</section>

{/* Mobile View: visible on small screens only */}
<section className="relative bg-[#111B41] text-white rounded-2xl overflow-hidden p-6 max-w-sm mx-auto block md:hidden">
  {/* Background Image */}
  <div className="absolute top-0 right-0 h-full w-full z-0">
    <Image
      src="/lets_talk.png" // Ensure this path is correct
      alt="Decorative background"
      fill
      className="object-cover object-right"
    />
  </div>

  {/* Content */}
  <div className="relative z-10">
    <div className="text-sm text-gray-400 mb-2">Careers</div>
    <h2 className="text-2xl font-bold mb-3">Let’s Talk</h2>
    <p className="text-sm text-gray-300 leading-relaxed">
      We’re an ambitious team shaping the future of payments in Africa. See our job openings below and join us in
      making financial access simpler for everyone.
    </p>
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
