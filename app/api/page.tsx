import React from "react";
import Image from "next/image";
import PaymentFeatures from "@/components/PaymentFeatures";

const Apipage = () => {
  return (
    <main className="min-h-screen pb-4 bg-[#EEF3FF]">
      {/* Hero */}
      <section className="relative overflow-hidden text-white md:pt-[105px] rounded-[15px] md:mt-0 mt-[70px] md:flex w-full  justify-center items-center">
        <div className="h-[455px] px-[20px]  mt-[30px] w-[93%] mx-auto ml-[20px] md:h-[400px] lg:mt-0 md:px-[70px] md:ml-[50px] py-2 md:py-6 relative  md:bg-[#111B41] bg-[#000066] rounded-[15px] ">
          <div className="max-w-full md:max-w-3xl py-12 md:py-20 relative z-10 pr-4">
            <div className="md:text-[25px] md:mb-2 text-gray-400 mb-[20px] text-[18px]">
              Payment API's
            </div>
            <h1 className=" w-[240px] md:leading-none md:w-[80%] text-4xl leading-tight md:text-6xl font-bold mb-[20px]">
              Build, Customize, and Scale
            </h1>
            <p className="text-gray-300 md:text-gray-300 mb-8 md:w-[380px] text-[16px] md:text-base">
              Power your business with our developer-friendly APIs, designed for
              secure, seamless, and scalable financial services.
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
      <PaymentFeatures />
      {/* Desktop View: visible on md and up */}
      <section className=" overflow-hidden  text-white hidden md:flex w-full  justify-center items-center">
        <div className="w-[93%] py-8 md:py-12 md:px-[100px] relative bg-[#10142C] rounded-[25px]">
          <div className="max-w-3xl py-16 md:py-12 relative z-10">
            {/* <div className="md:text-[25px] md:mb-[30px] text-gray-400 mb-[20px] text-sm">
              Contact Us
            </div> */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                          Find the Right Solution <br /> for Your Business

            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
          Whether you’re an SME, an enterprise, or a fintech innovator, we
            have the tools to help you scale, optimize, and grow. Let’s build
            the future of payments together.
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
          {/* <div className="text-[16px] text-gray-400 mb-4 mt-[20px]">Careers</div> */}
          <h2 className="text-4xl font-bold mb-5">
            Find the Right Solution for Your Business
          </h2>
          <p className="text-[16px] text-gray-300 leading-relaxed">
            Whether you’re an SME, an enterprise, or a fintech innovator, we
            have the tools to help you scale, optimize, and grow. Let’s build
            the future of payments together.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Apipage;
