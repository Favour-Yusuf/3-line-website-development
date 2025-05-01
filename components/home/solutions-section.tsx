import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const SolutionsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEF3FF] py-16">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#D2E1FF] rounded-full opacity-30 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#D2E1FF] opacity-20 -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1A4A] mb-4">Our solutions</h2>
          <p className="text-gray-600 text-lg mb-8">
            Ready to Transform Your Payments? Join the hundreds of financial institutions and businesses already growing
            with 3Line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* SMEs Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 bg-[#EEF3FF] p-3 rounded-lg inline-block">
              <div className="w-12 h-12 relative">
                <Image src="/Frame 6.png" alt="SMEs Icon" width={48} height={48} className="text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#0A1A4A]">SMEs</h3>
            <p className="text-gray-600 mb-12">
              Get paid faster, access digital banking, and manage transactions in realtime.
            </p>
            <div className="absolute bottom-6 right-6">
              <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <div className="bg-blue-500 rounded-full p-3 hover:bg-blue-600 transition-colors">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 bg-[#EEF3FF] p-3 rounded-lg inline-block">
              <div className="w-12 h-12 relative">
                <Image
                  src="/Frame 42.png"
                  alt="Enterprise Icon"
                  width={48}
                  height={48}
                  className="text-blue-500"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#0A1A4A]">Enterprise</h3>
            <p className="text-gray-600 mb-12">
              Optimize cash flow with secure, efficient, and scalable payment solutions.
            </p>
            <div className="absolute bottom-6 right-6">
              <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <div className="bg-blue-500 rounded-full p-3 hover:bg-blue-600 transition-colors">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* Individual Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 bg-[#EEF3FF] p-3 rounded-lg inline-block">
              <div className="w-12 h-12 relative">
                <Image
                  src="/Frame 43.png"
                  alt="Individual Icon"
                  width={48}
                  height={48}
                  className="text-blue-500"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#0A1A4A]">Individual</h3>
            <p className="text-gray-600 mb-12">
              Experience fast, easy, and convenient payment options for your personal and everyday transactions.
            </p>
            <div className="absolute bottom-6 right-6">
              <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <div className="bg-blue-500 rounded-full p-3 hover:bg-blue-600 transition-colors">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection
