import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <div className="inline-block bg-[#00D2FF] text-[#0A1A4A] px-3 py-1 rounded-md font-medium mb-4">
                Enterprise
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Scalable infrastructure
                <br />
                for large organizations
              </h1>
              <p className="text-gray-300 mb-8 max-w-lg">
                For banks, large fintechs, and enterprises, scale and reliability are everything. Our enterprise
                solutions provide robust infrastructure for financial transactions, digital banking, and agent network
                management.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              {/* Background shape */}
              <div className="absolute top-0 right-0 w-1/2 h-full z-0">
                <Image
                  src="/enterprise-hero2.png"
                  alt="Background shape"
                  fill
                  className="object-contain object-right bg-red-900"
                />
              </div>

              {/* Hero images */}
              <div className="absolute bottom-0 left-[10%] w-[200px] h-[150px] transform rotate-[-15deg] overflow-hidden rounded-lg z-10">
                <Image
                  src="/enterprise-hero1.png"
                  alt="HSBC Building"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-[30%] left-[35%] w-[120px] h-[180px] transform rotate-[15deg] overflow-hidden rounded-lg z-20">
                <Image
                  src="/enterprise-hero1.png"
                  alt="Payment Terminal"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="absolute top-[10%] right-[20%] w-[120px] h-[180px] transform rotate-[15deg] overflow-hidden rounded-lg z-30">
                <Image
                  src="/enterprise-hero1.png"
                  alt="Woman Smiling"
                  fill
                  className="object-cover object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Powering the Future of Digital Banking</h2>

          {/* Gravity Enterprise */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 border-r border-gray-100">
                <div className="bg-[#0A1A4A] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Gravity Enterprise</h3>
                <p className="text-gray-600 mb-4">Build & scale a nationwide agent network</p>
                <p className="text-gray-600 mb-6">
                  A fully scalable agency banking solution for financial institutions and large-scale fintechs looking
                  to expand their reach.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="p-8 border-r border-gray-100">
                <h3 className="font-semibold mb-4">Key features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Enterprise-Grade Network Management</h4>
                    <p className="text-sm text-gray-600">Efficiently onboard and manage thousands of agents.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Real-Time Transaction Processing</h4>
                    <p className="text-sm text-gray-600">Ensure smooth, uninterrupted services.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Customizable Integrations</h4>
                    <p className="text-sm text-gray-600">Seamlessly connect with your banking infrastructure.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Fraud Prevention & Security</h4>
                    <p className="text-sm text-gray-600">Advanced monitoring to prevent fraudulent activities.</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-semibold mb-4">Who it's for</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 21H21M4 18H20M5 18V9M19 18V9M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9M10 14H14M9 9H15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">
                        Financial institutions and organisations aiming to extend financial services nationwide.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 21H21M4 18H20M5 18V9M19 18V9M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9M10 14H14M9 9H15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">Financial institutions looking to manage large-scale agent networks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Magtipon Enterprise */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 border-r border-gray-100">
                <div className="bg-[#0A1A4A] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Magtipon Enterprise</h3>
                <p className="text-gray-600 mb-4">The infrastructure for digital banking</p>
                <p className="text-gray-600 mb-6">
                  A full-scale platform designed to help banks and fintechs build and manage digital banking services
                  efficiently.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="p-8 border-r border-gray-100">
                <h3 className="font-semibold mb-4">Key features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">End-to-End Digital Banking Solutions</h4>
                    <p className="text-sm text-gray-600">From customer onboarding to transactions.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Swift, Secure Payments</h4>
                    <p className="text-sm text-gray-600">Process transactions seamlessly across all channels</p>
                  </div>
                  <div>
                    <h4 className="font-medium">High Uptime & Reliability</h4>
                    <p className="text-sm text-gray-600">Ensure smooth banking operations without disruptions.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Scalable to Millions of Users</h4>
                    <p className="text-sm text-gray-600">Built for institutions handling high transaction volumes.</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-semibold mb-4">Who it's for</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 21H21M4 18H20M5 18V9M19 18V9M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9M10 14H14M9 9H15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">
                        Banks and financial institutions looking to offer digital banking services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 21H21M4 18H20M5 18V9M19 18V9M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9M10 14H14M9 9H15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">Large fintechs processing high volumes of transactions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
