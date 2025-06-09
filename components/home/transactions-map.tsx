"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const TransactionsMap = () => {
  return (
   <div className="w-full flex justify-center items-center py-[30px]">
     <section className=" relative overflow-hidden w-[95%] ">
      <div className="container mx-auto">
        <div className="bg-[#0c152e] rounded-xl overflow-hidden p-6 md:p-12 relative">
          {/* Content */}
          <div className="relative z-10 max-w-xl mb-8">
            <h2 style={{
              lineHeight: "0.96"
            }} className=" font-grotesk text-headline md:text-4xl lg:text-[55px] font-bold text-white mb-6">
              Transactions from Africa to the last mile
            </h2>
            <p className="text-gray-300 text-lg font-grotesk text-headline">
              We provide the technology and infrastructure that powers agency banking, merchant payments, and seamless
              financial transactions. Whether you&apos;re a bank, a fintech, or a business, we&apos;re here to simplify
              your financial journey.
            </p>
          </div>

          {/* Map visualization */}
          <div className=" h-[100%] md:h-[400px] w-full  ">
            {/* Africa Map */}
            <div className="absolute left-0 bottom-0 w-[60%] h-[50%]">
              <Image
                src="/map-people.png"
                alt="Africa Map"
                fill
                className="object-contain"
              />

              {/* User avatars in West Africa */}
              {/* <div className="absolute top-[60%] left-[20%] flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-yellow-500 border-2 border-white overflow-hidden z-30">
                  <div className="w-full h-full bg-yellow-500"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-white overflow-hidden z-20">
                  <div className="w-full h-full bg-purple-500"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-green-500 border-2 border-white overflow-hidden z-10">
                  <div className="w-full h-full bg-green-500"></div>
                </div>
              </div> */}
            </div>

            {/* North America Map */}
            <div className="absolute right-0 top-0 w-[20%] h-[50%]  ">
              <Image
                src="/map.png"
                alt="North America Map"
                fill
                className="object-contain"
              />

              {/* Transaction point */}
              <div className="absolute bottom-[30%] right-[40%]">
                <div className="h-3 w-3 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 left-[30%] ">
              <Image
                src="/map-connect.png"
                alt="Connection Lines"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Background decorative elements */}
          {/* <div className="absolute bottom-0 right-0 opacity-10">
            <Image
              src="/Decorative-Shape"
              alt="Decorative Shape"
              width={300}
              height={300}
              className="transform translate-x-32 translate-y-32"
            />
          </div> */}
        </div>
      </div>
    </section>
   </div>
  )
}

export default TransactionsMap




