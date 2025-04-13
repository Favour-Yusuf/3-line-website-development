import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#EEF3FF] pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Subscribe section */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between bg-[#EEF3FF] rounded-lg p-6">
          <div className="mb-6 md:mb-0 md:mr-8">
            <Image src="/images/logo.png" alt="3line Logo" width={80} height={30} className="h-8 w-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Subscribe to get updates that matter.</h3>
            <p className="text-sm text-gray-600 mb-4">
              Stay informed on payments, business growth, and more right in your inbox.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium text-sm mb-3">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    SMEs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
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
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
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

            <div>
              <h4 className="font-medium text-sm mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance logos */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white p-2 rounded-md">
            <Image src="/placeholder.svg?height=40&width=40" alt="Compliance Logo" width={40} height={40} />
          </div>
          <div className="bg-white p-2 rounded-md">
            <Image src="/placeholder.svg?height=40&width=40" alt="Compliance Logo" width={40} height={40} />
          </div>
          <div className="bg-white p-2 rounded-md">
            <Image src="/placeholder.svg?height=40&width=40" alt="Compliance Logo" width={40} height={40} />
          </div>
          <div className="bg-white p-2 rounded-md">
            <Image src="/placeholder.svg?height=40&width=40" alt="Compliance Logo" width={40} height={40} />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-200">
          <p className="mb-2">© 2023 3line. 3line is regulated by the Central Bank of Nigeria.</p>
          <p>3line is committed to protecting your privacy and security.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
