import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function EnterprisePage() {
  return (
    <div className="min-h-screen flex flex-col md:pt-[50px]">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#EEF3FF] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sme-background.png"
              alt="Background pattern"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="container mx-auto px-6 md:px-8 py-8 md:py-12 relative z-10">
            <div className="bg-[#10142C] rounded-xl overflow-hidden mx-3 md:mx-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6  pl-8 md:pl-12">
                <div className="text-white pt-8">
                  <div  className="inline-block bg-[#00D2FF] text-[#10142C]  px-3 py-1 rounded-md font-medium text-[30px] ">
                  Enterprise
                  </div>
                  <div  style={{
    
    textShadow:
      '0px 10px 20px rgba(0,0,0,0.5), 0px 5px 10px rgba(0,0,0,0.3)',
  }} className="text-5xl text-headline md:text-6xl lg:text-[50px] font-bold text-white mb-6 leading-none mt-[10px]">
                  Scalable infrastructure <br />
                  for large organizations
                  </div>
                  <p className="text-gray-300 mb-4 max-w-lg">
                  For banks, large fintechs, and enterprises, scale and reliability are everything. Our enterprise solutions provide
                  </p>
                  <p className="text-gray-300 mb-8 max-w-lg">
                  robust infrastructure for financial transactions, digital banking, and agent network management.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute top-0 right-0 w-[400px] h-[750px] ">
                    <Image src="/sme-hero-image2.png" alt="Hero decoration" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div className="relative px-8 pb-8 md:px-12 md:pb-12">
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative h-40 md:h-[310px] rounded-lg overflow-hidden transform rotate-[-8deg] w-[900px] ml-[150px] ">
                    <Image
                      src="/enterprise_main_hero.png"
                      alt="SME Solutions"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-12 px-6 md:px-8 bg-[#EEF3FF] relative">
          <div className="absolute inset-0 z-0">
            <Image src="/sme-background.png" alt="Background pattern" fill className="object-cover opacity-50" />
          </div>
          <div className="container mx-auto relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#10142C] mx-3 md:mx-4">
            Powering the Future of <br /> Digital Banking
            </h2>

            {/* Gravity Lite */}
            <div className=" rounded-xl overflow-hidden shadow-sm mb-8 mx-3 md:mx-4">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 border-r border-gray-100 bg-white">
                  <div className="bg-[#10142C] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#10142C]">Gravity Enterprise</h3>
                  <p className="text-gray-600 mb-4">Build & scale a nationwide agent network</p>
                  <p className="text-gray-600 mb-6">
                  A fully scalable agency banking solution for financial institutions and large-scale fintechs looking
                  to expand their reach.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium py-2 px-4 rounded-full transition-colors mt-[100px]"
                  >
                    Get Started
                    <svg
                      className="ml-2 h-4 w-4"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="p-8 border-r border-gray-100 bg-transparent">
                  <h3 className="font-semibold mb-4 text-[#10142C]">Key features</h3>
                  <div className="space-y-4">
                    <div className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Enterprise-Grade Network Management</h4>
                      <p className="text-sm text-gray-600">Efficiently onboard and manage thousands of agents.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Real-Time Transaction Processing</h4>
                      <p className="text-sm text-gray-600">Ensure smooth, uninterrupted services.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Customizable Integrations</h4>
                      <p className="text-sm text-gray-600">Seamlessly connect with your banking infrastructure.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Fraud Prevention & Security</h4>
                      <p className="text-sm text-gray-600">Advanced monitoring to prevent fraudulent activities.</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-transparent">
                  <h3 className="font-semibold mb-4 text-[#10142C]">Who it's for</h3>
                  <div className="space-y-6">
                    <div className=" bg-[#FFFFFF80] p-[20px] rounded-[15px]">
                    <Image src="/bank.png" alt="user" width={40} height={40} />
                      <br />
                      <div>
                        <p className="text-sm text-gray-600">
                        Financial institutions and organisations aiming to extend financial services nationwide.
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#FFFFFF80] p-[20px] rounded-[15px]">
                    <Image src="/buliding.png" alt="user" width={40} height={40} />
                    <br />
                      <div>
                        <p className="text-sm text-gray-600">
                        Financial institutions looking to manage large-scale agent networks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Magtipon Lite */}
            <div className=" rounded-xl overflow-hidden shadow-sm mx-3 md:mx-4">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 border-r border-gray-100 bg-white">
                  <div className="bg-[#10142C] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#10142C]">Magtipon Enterprise</h3>
                  <p className="text-gray-600 mb-4">The infrastructure for digital banking</p>
                  <p className="text-gray-600 mb-6">
                  A full-scale platform designed to help banks and fintechs build and manage digital banking services
                  efficiently.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center bg-[#4894F4] hover:bg-[#4894F4]/90 text-white font-medium py-2 px-4 rounded-full transition-colors  mt-[100px]"
                  >
                    Get Started
                    <svg
                      className="ml-2 h-4 w-4"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="p-8 border-r border-gray-100 bg-transparent  md:col-span-2">
                  <h3 className="font-semibold mb-4 text-[#10142C]">Key features</h3>
                  <div className="space-y-4">
                    <div className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">End-to-End Digital Banking Solutions</h4>
                      <p className="text-sm text-gray-600">From customer onboarding to transactions.</p>
                    </div>
                    <div className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Swift, Secure Payments</h4>
                      <p className="text-sm text-gray-600">Process transactions seamlessly across all channels</p>
                    </div>
                    <div className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">High Uptime & Reliability</h4>
                      <p className="text-sm text-gray-600">Ensure smooth banking operations without disruptions.</p>
                    </div>
                    <div className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Scalable to Millions of Users</h4>
                      <p className="text-sm text-gray-600">Built for institutions handling high transaction volumes.</p>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </section>
      </main>

 
    </div>
  )
}
