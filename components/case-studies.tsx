import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const CaseStudies = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Case studies</h2>
          <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
            See more
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Market in Africa" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-6 w-6 mr-2">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Company Logo" width={24} height={24} />
                </div>
                <span className="text-sm font-medium">Unity</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">How Unity Bank Expanded to Rural Areas with 3Line</h3>
              <p className="text-gray-600 text-sm mb-4">Apr 12, 2023</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                Read case study
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Venice Canal" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-6 w-6 mr-2">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Company Logo" width={24} height={24} />
                </div>
                <span className="text-sm font-medium">Merchant S</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Merchant in Antwerp How a Retail Chain Cut Cash Handling by 40%
              </h3>
              <p className="text-gray-600 text-sm mb-4">Jan 15, 2023</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                Read case study
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Venice Canal" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-6 w-6 mr-2">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Company Logo" width={24} height={24} />
                </div>
                <span className="text-sm font-medium">Interswitch</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Interswitch in Antwerp How a Retail Chain Cut Cash Handling by 40%
              </h3>
              <p className="text-gray-600 text-sm mb-4">Jan 15, 2023</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                Read case study
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
