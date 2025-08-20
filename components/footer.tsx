import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <div className="bg-[#EEF3FF] w-full flex justify-center items-center">
 <footer className="relative bg-[#A6C4FA] overflow-hidden md:px-[25px] w-[95%] rounded-[10px]">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image src="/footer-bg.png" alt="" fill className="object-cover" priority />
      </div>

      <div className="relative z-10">
        {/* Desktop Layout */}
        <div className="container mx-auto px-4 py-4 hidden md:block">
          <div className="flex flex-wrap">
            {/* Logo */}
            <div className="w-[12%] pr-8">
              <Link href="/" className="inline-block">
                            <Image src="/logo.png" alt="3Line logo" width={80} height={40} />
              </Link>
            </div>

            {/* Navigation Menus */}
            <div className="w-2/4 flex">
              <div className="w-1/3">
                <h3 className="font-bold text-[28px] mb-2">Products</h3>
                <ul className="space-y-1 font-semibold text-[18px]">
                  <li>
                    <Link href="/solutions/smes" className="hover:underline">
                      SMEs
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/enterprise" className="hover:underline">
                      Enterprise
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Individual
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/3">
                <h3 className="font-bold text-[28px] mb-2">Company</h3>
                <ul className="space-y-1 font-semibold text-[18px]">
                  <li>
                    <Link href="#" className="hover:underline">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-team" className="hover:underline">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:underline">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/3">
                <h3 className="font-bold text-[28px] mb-2">Resources</h3>
                <ul className="space-y-1 font-semibold text-[18px]">
                  <li>
                    <Link href="/blog" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/press" className="hover:underline">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-study" className="hover:underline">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:underline">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Subscription Form */}
            <div className="w-[38%]  bg-white rounded-lg p-8 shadow-md">
              <h3 className="font-bold leading-none mb-3 text-[30px] ">Subscribe to get updates that matter.</h3>
              <p className="text-[18px] text-gray-700 mb-2">
                Stay informed on payments, business growth, and 3Line news right in your inbox!
              </p>
              <div className="mb-2">
                <label htmlFor="email" className="block text-[18px] font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="What's your email?"
                  className="w-full px-2 py-4 text-[17px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#000066]"
                />
              </div>
              <div className="flex justify-end">
                <button className="flex items-center text-[#000066] text-[18px] font-bold">
                  Subscribe
                
                  <Image src="/arrow_footer.png" alt="arrow footer " className="mt-[10px]" width={70} height={70} />
              
                </button>
              </div>
            </div>
          </div>

          {/* Certification Logos */}
          <div className="mt-6 mb-3">
            <div className="flex space-x-6">
              <Image src="/pci.png" alt="PCI DSS Compliant" width={70} height={35} />
              <Image src="/coat.png" alt="Coat of Arms" width={40} height={35} />
              <Image src="/arm.png" alt="Nigeria Security" width={40} height={35} />
              <Image src="/iso.png" alt="ISO Certified" width={40} height={35} />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#0000661A] my-2"></div>

          {/* Copyright and Regulation */}
          <div className="flex items-center py-2">
            <div>
              <p className="text-[18px] font-medium">© 2025 3line</p>
            </div>
            <div className="flex ml-16  items-center">
              <Image src="/coat.png" alt="Coat of Arms" width={20} height={15} className="mr-1" />
              <p className="text-[18px] font-medium">3line is regulated by the Central Bank of Nigeria</p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className=" md:hidden px-2 py-3">
          {/* Logo */}
          <div className="mb-5 mt-4">
            <Link href="/" className="inline-block">
             <Image src="/logo.png" alt="logo" width={60} height={60} />
            </Link>
          </div>

          {/* Subscription Form */}
          <div className="bg-white rounded-lg py-8 p-5 shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Subscribe to get updates that matter.</h3>
            <p className="text-sm text-gray-700 mb-2">
              Stay informed on payments, business growth, and 3Line news right in your inbox!
            </p>
            <div className="mb-2">
              <label htmlFor="mobile-email" className="block text-xs font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="mobile-email"
                placeholder="What's your email?"
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#000066]"
              />
            </div>
            <div className="flex justify-end hover:text-2xl transition-all duration-300">
              <button className="flex items-center text-[#000066] text-xl font-bold ">
                Subscribe
                <Image src="/arrow_footer.png" alt="arrow footer " className="mt-[10px]" width={60} height={60} />
              
              </button>
            </div>
          </div>

          {/* Navigation Menus */}
          <div className="grid grid-cols-3 gap-2 mb-8 mt-8">
            <div>
              <h3 className="font-bold text-xl mb-1">Products</h3>
              <ul className="space-y-1 text-xs font-semibold">
                <li>
                  <Link href="/solutions/smes" className="hover:underline">
                    SMEs
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/enterprise" className="hover:underline">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Individual
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl  mb-1">Company</h3>
              <ul className="space-y-1 text-xs font-semibold">
                <li>
                  <Link href="#" className="hover:underline">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/our-team" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Resources</h3>
              <ul className="space-y-1 text-xs font-semibold">
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:underline">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/case-study" className="hover:underline">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Great Place to Work */}
          <div className="flex mb-3 border-b border-[#0000661A] pb-3">
            <div className="w-1/4">
              <Image src="/red_blue.png" alt="Great Place to Work" width={50} height={50} />
            </div>
            <div className="w-3/4">
              <h3 className="text-xs font-bold mb-1">We're Great Place to Work-Certified</h3>
              <p className="text-xs mb-1">
                90% of our employees said that when you join this company, you are made to feel welcome.
              </p>
              <p className="text-[10px]">Source: 2024 Great Place to Work Trust Index® survey</p>
            </div>
          </div>

          {/* Regulation Info */}
          <div className="flex items-center mb-2">
            <Image src="/coat.png" alt="Coat of Arms" width={15} height={12} className="mr-1" />
            <p className="text-xs">3line is regulated by the Central Bank of Nigeria</p>
          </div>

          {/* Copyright */}
          <div className="mb-2">
            <p className="text-xs">© 2025 3line</p>
          </div>

          {/* Certification Logos */}
          <div className="flex space-x-3">
            <Image src="/pci.png" alt="PCI DSS Compliant" width={40} height={20} />
            <Image src="/arm.png" alt="Nigeria Security" width={30} height={20} />
            <Image src="/iso.png" alt="ISO Certified" width={30} height={20} />
          </div>
        </div>
      </div>
    </footer>
    </div>
   
  )
}
