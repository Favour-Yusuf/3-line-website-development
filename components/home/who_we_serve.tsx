
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const WhoWeServeComponent = () => {





    return (
      <section className="  min-h-screen overflow-hidden w-full flex justify-center items-center mt-[50px]">
       <div className="relative w-[95%] bg-[#0c152e] rounded-[20px]">
         {/* Background geometric shapes - positioned on the right */}
         <div className="absolute top-0 right-0 w-[40%] h-full">
          <Image
            src="/second_component7.png"
            alt="Background geometric shapes"
            fill
            className="object-cover object-right"
          />
        </div>
  
        {/* Main content container */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16  min-h-[80vh]">
            {/* Left side - Text content */}
            <div className="space-y-8 lg:space-y-12">
              <div className="max-w-2xl">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.1] mb-6 lg:mb-8">
                  Who we serve
                </h1>
                <p className="text-gray-300 text-lg md:text-xl lg:text-[1.375rem] leading-relaxed">
                  We help financial institutions, businesses, and organizations deliver seamless payment and banking
                  services.
                </p>
              </div>
            </div>
  
            {/* Right side - Images with connecting lines */}
            <div className="relative flex justify-end">
              {/* Images with connecting lines container */}
              <div className=" absolute top-[0%] right-[75%] w-full lg:w-[140%] h-screen lg:ml-[10%]">
                <Image
                  src="/second_component6.png"
                  alt="Connected images showing our diverse clientele"
                  fill
                  className="object-contain object-right"
                />
              </div>
  
              {/* Bottom text content */}
              <div className=" absolute bottom-0 right-0 lg:right-[10%] lg:mt-12 space-y-4 lg:space-y-6 max-w-lg">
                <p className="text-gray-300 text-base md:text-lg lg:text-[1.125rem] leading-relaxed">
                  Whether it's making payments easier, reaching more people, or managing transactions smoothly,
                </p>
                <p className="text-white text-lg md:text-xl lg:text-[1.375rem] font-semibold leading-relaxed">
                  our solutions ensure you serve your customers and communities efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
  
       </div>
        {/* Responsive adjustments */}
        <style jsx>{`
          @media (max-width: 1024px) {
            .container {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            }
          }
          @media (max-width: 768px) {
            .container {
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }
        `}</style>
      </section>
    )
  
  
  
  
  }
  
  export default WhoWeServeComponent
  