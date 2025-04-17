import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const CaseStudiesList = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
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
                <span className="text-sm font-medium">Unity Bank</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">How Unity Bank Expanded to Rural Areas with 3Line</h3>
              <p className="text-gray-600 text-sm mb-4">Apr 12, 2023</p>
              <p className="text-gray-600 mb-4">
                Unity Bank partnered with 3Line to expand their banking services to rural areas across Nigeria,
                resulting in a 45% increase in customer acquisition and 60% growth in transaction volume within rural
                communities.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                Read case study
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Retail Store" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-6 w-6 mr-2">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Company Logo" width={24} height={24} />
                </div>
                <span className="text-sm font-medium">Merchant S</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">How a Retail Chain Cut Cash Handling by 40%</h3>
              <p className="text-gray-600 text-sm mb-4">Jan 15, 2023</p>
              <p className="text-gray-600 mb-4">
                A major retail chain implemented 3Line's payment solutions across 50 stores, reducing cash handling
                costs by 40% and improving transaction processing times by 35%.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                Read case study
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Fintech Office" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-6 w-6 mr-2">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Company Logo" width={24} height={24} />
                </div>
                <span className="text-sm font-medium">Interswitch</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">How Interswitch Improved Transaction Success Rates</h3>
              <p className="text-gray-600 text-sm mb-4">Jan 15, 2023</p>
              <p className="text-gray-600 mb-4">
                Interswitch integrated 3Line's payment infrastructure to improve transaction success rates from 85% to
                98%, resulting in higher customer satisfaction and increased revenue.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                Read case study
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Case Study 4 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Mobile Banking" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-6 w-6 mr-2">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Company Logo" width={24} height={24} />
                </div>
                <span className="text-sm font-medium">Access Bank</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Access Bank's Digital Transformation Journey</h3>
              <p className="text-gray-600 text-sm mb-4">Mar 22, 2023</p>
              <p className="text-gray-600 mb-4">
                Access Bank partnered with 3Line to accelerate their digital transformation, resulting in a 75% increase
                in mobile banking adoption and 50% reduction in branch visits.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                Read case study
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Case Study 5 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="E-commerce" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-6 w-6 mr-2">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Company Logo" width={24} height={24} />
                </div>
                <span className="text-sm font-medium">Jumia</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">How Jumia Streamlined Payment Processing</h3>
              <p className="text-gray-600 text-sm mb-4">Feb 8, 2023</p>
              <p className="text-gray-600 mb-4">
                E-commerce giant Jumia implemented 3Line's payment gateway, reducing checkout abandonment by 30% and
                increasing successful transactions by 25%.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                Read case study
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Case Study 6 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Microfinance" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-6 w-6 mr-2">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Company Logo" width={24} height={24} />
                </div>
                <span className="text-sm font-medium">MicroCredit</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">MicroCredit's Journey to Financial Inclusion</h3>
              <p className="text-gray-600 text-sm mb-4">Apr 30, 2023</p>
              <p className="text-gray-600 mb-4">
                MicroCredit used 3Line's solutions to reach underserved communities, resulting in 120,000 new customers
                and a 65% increase in loan disbursements within 6 months.
              </p>
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

export default CaseStudiesList
