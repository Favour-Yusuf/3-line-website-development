'use client'; // ✅ Must be first line

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactUsForm from "@/components/contact_us_page/contact-us-form";

// ✅ Import ContactInfoSection as a client-side dynamic component
const ContactInfoSection = dynamic(
  () => import("@/components/contact_us_page/contact-info-section"),
  { ssr: false } // 👈 Important: make it a client component
);

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
              Tell us about your project, and we’ll help you find the right
              solution.
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

      {/* Form */}
      <ContactUsForm />

      {/* Desktop View */}
      <section className="overflow-hidden text-white hidden md:flex w-full justify-center items-center">
        <div className="w-[93%] py-8 md:py-12 md:px-[100px] relative bg-[#10142C] rounded-[25px]">
          <div className="max-w-3xl py-16 md:py-12 relative z-10">
            <div className="md:text-[25px] md:mb-[30px] text-gray-400 mb-[20px] text-sm">
              Contact Us
            </div>
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

      {/* Mobile View */}
      <section className="relative w-[93%] mt-[50px] h-[350px] bg-[#10142C] text-white rounded-2xl overflow-hidden p-6 max-w-sm mx-auto block md:hidden">
        <div className="absolute top-0 right-0 h-full w-full z-0">
          <Image
            src="/lets_talk.png"
            alt="Decorative background"
            fill
            className="object-cover object-right"
          />
        </div>
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

      {/* Contact Info Section */}
      <ContactInfoSection />
    </main>
  );
}
