import Image from "next/image"
import Link from "next/link"

export default function SmesPage() {
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
                  <div className="inline-block bg-[#00D2FF] text-[#10142C] font-bold mb-[30px]  px-3 py-1 rounded-md text-[30px] ">
                    SMEs
                  </div>
                  <div  style={{
    
      textShadow:
        '0px 10px 20px rgba(0,0,0,0.5), 0px 5px 10px rgba(0,0,0,0.3)',
    }} className="text-5xl text-headline md:text-6xl lg:text-[70px] font-bold text-white mb-6 leading-none mt-[10px]">
                    Empowering small &<br />
                    growing businesses
                  </div>
                  <p className="text-gray-300 mb-4 max-w-lg font-bold">
                    Running a business is no small feat, and managing payments should not add to the stress.
                  </p>
                  <p className="text-gray-400 mb-8 max-w-lg">
                    Our SME solutions help you simplify payments, streamline operations, and unlock new opportunities
                    for growth.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute top-0 right-0 w-[400px] h-[700px]">
                    <Image src="/sme-hero-image2.png" alt="Hero decoration" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div className="relative px-8 pb-8 md:px-12 md:pb-12">
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative h-40 md:h-[310px] rounded-lg overflow-hidden transform rotate-[-8deg] w-[900px] ml-[150px]">
                    <Image
                      src="/sme_main_hero.png"
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
            <h2 className="text-2xl md:text-5xl font-bold mb-8 text-[#10142C] mx-3 md:mx-4">
              SMEs Solutions developed <br /> with you in mind...
            </h2>

            {/* Gravity Lite */}
            <div className=" rounded-xl overflow-hidden shadow-sm mb-8 mx-3 md:mx-4">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 border-r border-blue-500 bg-white">
                  <div className="bg-[#10142C] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#10142C]">Gravity Lite</h3>
                  <p className="text-black mb-4 font-bold">Launch your agent banking business in 24 hours</p>
                  <p className="text-gray-600 mb-6">
                  Expand financial access in your community with Gravity Lite, our agency banking solution designed for small to medium-sized businesses and entrepreneurs.
                  </p>
                  <div className="w-[32%]  absolute flex justify-end items-end">
                 <Link
                    href="#"
                    className="inline-flex items-center justify-center  text-[#000066] font-medium py-2 px-4 rounded-full transition-colors  mt-[100px]"
                  >
                   Get Started
                    <Image src="/sme_arrow.png" alt="user" width={60} height={60} />
                   
                  </Link>
                 </div>
                </div>
                <div className="p-8 border-r border-blue-500 bg-transparent">
                  <h3 className="font-semibold mb-4 text-[#10142C]">Key features</h3>
                  <div className="space-y-4">
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Omnichannel Payments</h4>
                      <p className="text-sm text-gray-600">Accept payments via cards, transfers, USSD, QR</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">POS & Terminal Integration</h4>
                      <p className="text-sm text-gray-600">Enable fast and secure in-person transactions.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Inventory Management</h4>
                      <p className="text-sm text-gray-600">Track and manage stock effortlessly.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Customer Management Tools</h4>
                      <p className="text-sm text-gray-600">Build loyalty programs and track customer behavior.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Business Insights</h4>
                      <p className="text-sm text-gray-600">Data-driven analytics for better decision-making.</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-transparent">
                  <h3 className="font-semibold mb-4 text-[#10142C]">Who it's for</h3>
                  <div className="space-y-6">
                    <div className="bg-[#FFFFFF80] p-[20px] rounded-[15px]">
                    <Image src="/shop.png" alt="user" width={60} height={60} />
                      <div>
                        <p className="text-sm text-gray-600">
                          SMEs looking to streamline payment processes and improve efficiency.
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#FFFFFF80] p-[20px] rounded-[15px]">
                    <Image src="/user.png" alt="user" width={60} height={60} />
                      <div>
                        <p className="text-sm text-gray-600">
                          Business owners who want real-time insights to optimize sales and operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Medusa Merchant */}
            <div className=" rounded-xl overflow-hidden shadow-sm mb-8 mx-3 md:mx-4">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 border-r border-blue-500 bg-white">
                  <div className="bg-[#10142C] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#10142C]">Medusa Merchant</h3>
                  <p className="text-gray-600 mb-4">Your end-to-end business payment solution</p>
                  <p className="text-gray-600 mb-6">
                    Medusa Merchant is built to simplify payments, streamline business operations, and provide real-time
                    insights that help businesses grow.
                  </p>
                  <div className="w-[32%]  absolute flex justify-end items-end">
                 <Link
                    href="#"
                    className="inline-flex items-center justify-center  text-[#000066] font-medium py-2 px-4 rounded-full transition-colors  mt-[100px]"
                  >
                   Explore
                    <Image src="/sme_arrow.png" alt="user" width={60} height={60} />
                   
                  </Link>
                 </div>
                </div>
                <div className="p-8 border-r border-blue-500 bg-transparent">
                  <h3 className="font-semibold mb-4 text-[#10142C]">Key features</h3>
                  <div className="space-y-4">
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Omnichannel Payments</h4>
                      <p className="text-sm text-gray-600">Accept payments via cards, transfers, USSD, QR</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">POS & Terminal Integration</h4>
                      <p className="text-sm text-gray-600">Enable fast and secure in-person transactions.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Inventory Management</h4>
                      <p className="text-sm text-gray-600">Track and manage stock effortlessly.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Customer Management Tools</h4>
                      <p className="text-sm text-gray-600">Build loyalty programs and track customer behavior.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Business Insights</h4>
                      <p className="text-sm text-gray-600">Data-driven analytics for better decision-making.</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-transparent">
                  <h3 className="font-semibold mb-4 text-[#10142C]">Who it's for</h3>
                  <div className="space-y-6">
                    <div className="bg-[#FFFFFF80] p-[20px] rounded-[15px]">
                    <Image src="/shop.png" alt="user" width={60} height={60} />
                      <div>
                        <p className="text-sm text-gray-600">
                          SMEs looking to streamline payment processes and improve efficiency.
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#FFFFFF80] p-[20px] rounded-[15px]">
                    <Image src="/user.png" alt="user" width={60} height={60} />
                      <div>
                        <p className="text-sm text-gray-600">
                          Business owners who want real-time insights to optimize sales and operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Magtipon Lite */}
            <div className=" rounded-xl overflow-hidden shadow-sm mb-8 mx-3 md:mx-4">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 border-r border-blue-500 bg-white">
                  <div className="bg-[#10142C] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#10142C]">Magtipon Lite</h3>
                  <p className="text-black mb-4 font-bold">Simplified payments for
                  growing businesses</p>
                  <p className="text-gray-600 mb-6">
                  A powerful payment gateway that allows businesses to issue virtual accounts, process bulk payments, and offer value-added services like airtime and bill payments.
                  </p>
                  <div className="w-[32%]  absolute flex justify-end items-end">
                 <Link
                    href="#"
                    className="inline-flex items-center justify-center  text-[#000066] font-medium py-2 px-4 rounded-full transition-colors  mt-[100px]"
                  >
                   Get Started
                    <Image src="/sme_arrow.png" alt="user" width={60} height={60} />
                   
                  </Link>
                 </div>
                </div>
                <div className="p-8 border-r  bg-transparent  md:col-span-2">
                  <h3 className="font-semibold mb-4 text-[#10142C]">Key features</h3>
                  <div className="space-y-4">
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Omnichannel Payments</h4>
                      <p className="text-sm text-gray-600">Accept payments via cards, transfers, USSD, QR</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">POS & Terminal Integration</h4>
                      <p className="text-sm text-gray-600">Enable fast and secure in-person transactions.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Inventory Management</h4>
                      <p className="text-sm text-gray-600">Track and manage stock effortlessly.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Customer Management Tools</h4>
                      <p className="text-sm text-gray-600">Build loyalty programs and track customer behavior.</p>
                    </div>
                    <div  className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                      <h4 className="font-medium text-[#10142C]">Business Insights</h4>
                      <p className="text-sm text-gray-600">Data-driven analytics for better decision-making.</p>
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
