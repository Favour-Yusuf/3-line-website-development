import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const CaseStudiesPreview = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEF3FF] py-16">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#D2E1FF] rounded-full opacity-30 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#D2E1FF] opacity-20 -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1A4A]">Case studies</h2>
          <Link href="#" className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium">
            <span className="mr-2">See more</span>
            <span className="bg-blue-500 rounded-full p-1">
              <ArrowRight className="h-4 w-4 text-white" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Case Study 1 - Unity Bank */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/unity.png" alt="Market in Africa" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-8 w-20 relative">
                  <Image src="/unity.png" alt="Unity Bank Logo" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#0A1A4A]">
                How Unity Bank Expanded to Rural Areas with Gravity
              </h3>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500 text-sm">Jan 31, 2025</p>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium"
                >
                  <span className="mr-2">Read case study</span>
                  <span className="bg-blue-500 rounded-full p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Case Study 2 - Standard Chartered */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/standard.png" alt="Venice Canal" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-8 w-20 relative">
                  {/* <Image
                    src="/images/standard-chartered-logo.png"
                    alt="Standard Chartered Logo"
                    fill
                    className="object-contain"
                  /> */}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#0A1A4A]">
                Medusa in Action: How a Retail Chain Cut Cash Handling by 70%
              </h3>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500 text-sm">Jan 31, 2025</p>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium"
                >
                  <span className="mr-2">Read case study</span>
                  <span className="bg-blue-500 rounded-full p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Case Study 3 - Interswitch */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/inter.png" alt="Venice Canal" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-8 w-20 relative">
                  {/* <Image src="/images/interswitch-logo.png" alt="Interswitch Logo" fill className="object-contain" /> */}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#0A1A4A]">
                Medusa in Action: How a Retail Chain Cut Cash Handling by 70%
              </h3>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500 text-sm">Jan 31, 2025</p>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium"
                >
                  <span className="mr-2">Read case study</span>
                  <span className="bg-blue-500 rounded-full p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




export default CaseStudiesPreview
