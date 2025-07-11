"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactUsForm from "@/components/contact_us_page/contact-us-form";

export default function ContactUsPage() {
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    solution: "Gravity Lite",
    launchDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSolutionChange = (solution: string) => {
    setFormData((prev) => ({ ...prev, solution }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      {/* Hero Section */}
      
      <section className="relative overflow-hidden text-white md:pt-[105px] rounded-[15px] md:mt-0 mt-[70px] md:flex w-full  justify-center items-center">
        <div className="h-[455px] px-[20px]  mt-[30px] w-[93%] mx-auto ml-[20px] md:h-[400px] lg:mt-0 md:px-[70px] md:ml-[50px] py-2 md:py-6 relative  md:bg-[#111B41] bg-[#000066] rounded-[15px] ">
          <div className="max-w-full md:max-w-3xl py-12 md:py-20 relative z-10 pr-4">
            <div className="md:text-[25px] md:mb-2 text-gray-400 mb-[20px] text-[18px]">
              Get Started
            </div>
            <h1 className=" w-[240px] md:w-[80%] text-4xl leading-tight md:text-6xl font-bold mb-[20px] md:leading-tight">
              Start Building and Growing with 3Line
            </h1>
            <p className="text-gray-300 md:text-gray-300 mb-8 md:max-w-lg text-[16px] md:text-base">
              Tell us about your project, and we’ll help  you find the
              right solution.
            </p>
          </div>

          {/* Desktop image */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-1/2 ">
            <Image
              src="/contact-us-image3.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Mobile image */}
          <div className="block md:hidden absolute right-0 top-0 h-full w-[320px]">
            <Image
              src="/contactus_mobile_image.png"
              alt="Mobile Decoration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
      {/* form */}
      <ContactUsForm />

      {/* Desktop View: visible on md and up */}
      <section className=" overflow-hidden  text-white hidden md:flex w-full  justify-center items-center">
     
       <div className="w-[93%] py-8 md:py-12 md:px-[100px] relative bg-[#10142C] rounded-[25px]">
          <div className="max-w-3xl py-16 md:py-12 relative z-10">
            <div className="md:text-[25px] md:mb-[30px] text-gray-400 mb-[20px] text-sm">Contact Us</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Let's Talk
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              Whether you have a question, need support, or want to explore our
              solutions, we’re here to help.
            </p>
          </div>

          <div className="absolute top-0 right-0 h-full w-1/2">
            <Image
              src="/contact-us-image3.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </section>

      {/* Mobile View: visible on small screens only */}
      <section className="relative w-[93%] mt-[50px] h-[350px] bg-[#10142C] text-white rounded-2xl overflow-hidden p-6 max-w-sm mx-auto block md:hidden">
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
        <div className="relative z-10 ">
          <div className="text-[16px] text-gray-400 mb-4 mt-[20px]">Careers</div>
          <h2 className="text-4xl font-bold mb-5">Let’s Talk</h2>
          <p className="text-[16px] text-gray-300 leading-relaxed">
            We’re an ambitious team shaping the future of payments in Africa.
            See our job openings below and join us in making financial access
            simpler for everyone.
          </p>
        </div>
      </section>


      {/* Contact Information Card */}
<section className="py-12 px-10 bg-[#EEF3FF]">
  
  <div className="container  md:max-w-8xl">
  <h1 className="font-bold text-[40px] mt-[50px]">Contact Infomation</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

      {/* Contact Information (Left 2/3) */}
      <div className="lg:col-span-1 space-y-4">
        {/* Email */}
        <div className="bg-white/70 px-6 py-5 rounded-2xl shadow-sm flex items-center justify-between">
          <div className=" ">
            <div className=" mb-2">
              <Image alt="email" src="/email.png" width={24} height={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[18px]  mb-2">Email</h3>
              <p className="text-gray-600 text-[18px]">inquiries@3lineeng.com</p>
            </div>
          </div>
          <Link href="mailto:inquiries@3lineeng.com">
            <Image className="mt-[50px]" alt="arrow" src="/arrow_right.png" width={40} height={40} />
          </Link>
        </div>

        {/* Phone */}
        <div className="bg-white/70 px-6 py-5 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="">
            <div className=" mb-2">
              <Image alt="phone" src="/phone.png" width={24} height={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[18px] mb-2">Phone</h3>
              <p className="text-gray-600 text-[18px]">+234 800 300 4000</p>
            </div>
          </div>
          <Link href="tel:+2348003004000">
            <Image className="mt-[50px]" alt="arrow" src="/arrow_right.png" width={40} height={40} />
          </Link>
        </div>

        {/* Address */}
        <div className="bg-white/70 px-6 py-5 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="">
            <div className=" mb-2">
              <Image alt="location" src="/address.png" width={24} height={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[18px]  mb-2">Address</h3>
              <p className="text-gray-600 text-[18px] leading-snug">
                7A Idejo St, Victoria Island, Lagos 101241, Lagos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Card (Right 1/3) */}
      <div className=" bg-[#4096FB] rounded-2xl relative overflow-hidden text-white flex flex-col justify-between p-8">
        <div className="p-6">
          <h2 className="text-5xl font-bold mb-2">Get in touch!</h2>
          <p className="text-2xl">We’re just a message away.</p>
        </div>

      <div  className=" w-full flex justify-end items-end">
      <Link
          href="#contact-form"
          className="text-[20px] inline-flex items-center  text-white font-medium z-10"
        >
          Send us a message
          <Image src="/arrow_up.png" alt="arrow up" width={60} height={60} />
        </Link>
      </div>

        <div className="absolute inset-0 opacity-80">
          <Image
            src="/get_in_touch.png"
            alt="decor"
            fill
            className="object-contain object-right"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
