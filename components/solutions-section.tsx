import Link from "next/link"
import { ChevronRight, Store, Building2, User } from "lucide-react"

const SolutionsSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Our solutions</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Tailored payment solutions that fit the needs of financial institutions and businesses already growing with
          3Line.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* SMEs Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <Store className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">SMEs</h3>
            <p className="text-gray-600 mb-6">
              Accept payments across digital banking, and manage transactions in real-time.
            </p>
            <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              Learn more
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6">Enterprise-grade secure, efficient and scalable payment solutions.</p>
            <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              Learn more
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Individual Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Individual</h3>
            <p className="text-gray-600 mb-6">
              Simple, fast, and convenient payment options for your personal and everyday transactions.
            </p>
            <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              Learn more
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection
