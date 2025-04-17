import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#EEF3FF] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
          <Image
    src="/logo.png"
    alt="3-line logo"
    width={80} // adjust as needed
    height={40} // adjust as needed
  />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-1 md:col-span-3">
            <div>
              <h4 className="font-medium text-sm mb-3">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/solutions/smes" className="text-gray-600 hover:text-blue-600">
                    SMEs
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/enterprise" className="text-gray-600 hover:text-blue-600">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Individual
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about-us" className="text-gray-600 hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/our-team" className="text-gray-600 hover:text-blue-600">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-gray-600 hover:text-blue-600">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-white p-2 rounded-md">
                  <Image src="/images/pci-dss.png" alt="PCI DSS" width={40} height={40} />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <Image src="/images/iso.png" alt="ISO" width={40} height={40} />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <Image src="/images/ndpr.png" alt="NDPR" width={40} height={40} />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <Image src="/images/cbn.png" alt="CBN" width={40} height={40} />
                </div>
              </div>
              <p className="text-sm text-gray-600">© 2023 3line. 3line is regulated by the Central Bank of Nigeria.</p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Subscribe to get updates that matter.</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Stay informed on payments, business growth, and more right in your inbox!
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="What's your email?"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
