"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const OurSolutions = () => {
  return (
    <section className="py-16 px-[40px] relative overflow-hidden bg-[#EEF3FF]">
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">Our solutions</h2>
          <p className="text-gray-600 text-lg">
            Ready to Transform Your Payments? Join the hundreds of financial institutions and businesses already growing
            with 3Line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* SMEs Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 relative">
              <Image
                  src="/sme_icon.png"
                  alt="Arrow Hero"
                  width={50}   // example width
                  height={30}  // example height
                  className="mt-[15px]"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">SMEs</h3>
            <p className="text-gray-600 mb-8">
              Get paid faster, access digital banking, and manage transactions in realtime.
            </p>
            <div className="flex justify-end">
              <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors group">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
            <div className="w-16 h-16 relative">
              <Image
                  src="/bank_icon.png"
                  alt="Arrow Hero"
                  width={50}   // example width
                  height={30}  // example height
                  className="mt-[15px]"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Enterprise</h3>
            <p className="text-gray-600 mb-8">
              Optimize cash flow with secure, efficient, and scalable payment solutions.
            </p>
            <div className="flex justify-end">
              <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors group">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Individual Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
            <div className="w-16 h-16 relative">
              <Image
                  src="/profile_icon.png"
                  alt="Arrow Hero"
                  width={50}   // example width
                  height={30}  // example height
                  className="mt-[15px]"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Individual</h3>
            <p className="text-gray-600 mb-8">
              Experience fast, easy, and convenient payment options for your personal and everyday transactions.
            </p>
            <div className="flex justify-end">
              <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors group">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-100 rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-blue-100 rounded-full opacity-50 blur-3xl translate-y-1/4 translate-x-1/4"></div>
    </section>
  )
}

export default OurSolutions
