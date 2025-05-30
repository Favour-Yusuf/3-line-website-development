import Image from "next/image"
import Link from "next/link"


export default function MobileEnterprisePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF3FF] mt-[35px]">
   

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#EEF3FF] overflow-hidden">
          <div className="absolute inset-0 z-0 ">
            <Image
              src="/sme-background.png"
              alt="Background pattern"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className=" py-6 relative z-10">
            <div className="bg-[#000066] rounded-xl overflow-hidden mx-3">
              <div className="p-6">
                <div className="inline-block bg-[#00D2FF] text-[25px] text-[#10142C] px-3 py-1 rounded-md font-medium mb-4">
                Enterprise
                </div>
                <h1 className="text-2xl font-bold mb-4 leading-tight text-white">
                Scalable infrastructure <br />
                for large organizations
                </h1>
                {/* <p className="text-gray-300 mb-4 text-sm">
                  Running a business is no small feat, and managing payments should not add to the stress.
                </p> */}
                <p className="text-gray-300 mb-6 text-sm">
                For banks, large fintechs, and enterprises, scale and reliability are everything. Our enterprise solutions provide robust infrastructure for financial transactions, digital banking, and agent network management.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="relative h-[180px] w-[280px] rounded-lg overflow-hidden transform rotate-[-8deg]">
                    <Image src="/sme-hero-image1.png" alt="SME Solutions" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-8 bg-[#EEF3FF] relative">
          <div className="absolute inset-0 z-0">
            <Image src="/sme-background.png" alt="Background pattern" fill className="object-cover opacity-50" />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-6 text-[#10142C] mx-5">Powering the Future of Digital Banking</h2>

    {/* Magtipon Lite */}
    <div className="bg-white rounded-xl overflow-hidden shadow-sm mx-3">
              <div className="p-6">
                <div className="bg-[#10142C] text-white w-10 h-10 flex items-center justify-center rounded-lg mb-4">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#10142C]">Magtipon
                Enterprise</h3>
                <p className="text-black mb-3 text-sm font-bold">The infrastructure for
                digital banking</p>
                <p className="text-gray-600 mb-4 text-sm">
                A full-suite platform designed to help banks and fintechs build and manage digital banking services efficiently
                </p>
                <Link href="#" className="inline-flex items-center text-[#10142C] font-medium text-sm">
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 transform rotate-180"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          

            {/* Gravity Lite */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm mt-6 mx-3">
              <div className="p-6">
                <div className="bg-[#10142C] text-white w-10 h-10 flex items-center justify-center rounded-lg mb-4">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#10142C]">Gravity Enterprise</h3>
                <p className="text-black mb-3 text-sm font-bold">Build & scale a nationwide
                agent network</p>
                <p className="text-gray-600 mb-4 text-sm">
                A fully scalable agency banking solution for financial institutions and large-scale fintechs looking to expand their reach.
                </p>
                <Link href="#" className="inline-flex items-center text-[#10142C] font-medium text-sm">
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 transform rotate-180"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Medusa Merchant */}
            {/* <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6 mx-3">
              <div className="p-6">
                <div className="bg-[#10142C] text-white w-10 h-10 flex items-center justify-center rounded-lg mb-4">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#10142C]">Medusa Merchant</h3>
                <p className="text-gray-600 mb-3 text-sm">Your end-to-end business payment solution</p>
                <p className="text-gray-600 mb-4 text-sm">
                  Medusa Merchant is built to simplify payments, improve business operations, and provide real-time
                  insights that help businesses grow.
                </p>
                <Link href="#" className="inline-flex items-center text-[#10142C] font-medium text-sm">
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 transform rotate-180"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div> */}

        
          </div>
        </section>
      </main>

 
    </div>
  )
}
