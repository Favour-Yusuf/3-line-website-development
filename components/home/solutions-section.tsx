"use client"

import { ArrowUpRight } from "lucide-react"

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
                <div className="absolute inset-0 bg-[#0A1A4A] rounded-lg rotate-3"></div>
                <div className="absolute inset-0 bg-[#0A1A4A] rounded-lg -rotate-3"></div>
                <div className="absolute inset-0 bg-[#0A1A4A] rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17 18C17 16.3431 14.7614 15 12 15C9.23858 15 7 16.3431 7 18"
                      stroke="#4CC9F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                      stroke="#4CC9F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19 8C19 7.44772 18.5523 7 18 7C17.4477 7 17 7.44772 17 8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8Z"
                      fill="#4CC9F0"
                    />
                    <path
                      d="M7 8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8Z"
                      fill="#4CC9F0"
                    />
                    <path
                      d="M14 14C14 13.4477 13.5523 13 13 13C12.4477 13 12 13.4477 12 14C12 14.5523 12.4477 15 13 15C13.5523 15 14 14.5523 14 14Z"
                      fill="#4CC9F0"
                    />
                  </svg>
                </div>
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
                <div className="absolute inset-0 bg-[#0A1A4A] rounded-lg rotate-3"></div>
                <div className="absolute inset-0 bg-[#0A1A4A] rounded-lg -rotate-3"></div>
                <div className="absolute inset-0 bg-[#0A1A4A] rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21H21" stroke="#4CC9F0" strokeWidth="2" strokeLinecap="round" />
                    <path
                      d="M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21"
                      stroke="#4CC9F0"
                      strokeWidth="2"
                    />
                    <path d="M9 8H15" stroke="#4CC9F0" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 12H15" stroke="#4CC9F0" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 16H13" stroke="#4CC9F0" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
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
                <div className="absolute inset-0 bg-[#0A1A4A] rounded-lg rotate-3"></div>
                <div className="absolute inset-0 bg-[#0A1A4A] rounded-lg -rotate-3"></div>
                <div className="absolute inset-0 bg-[#0A1A4A] rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="5" stroke="#4CC9F0" strokeWidth="2" />
                    <path
                      d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                      stroke="#4CC9F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
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
