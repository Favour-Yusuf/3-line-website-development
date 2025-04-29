"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#EEF3FF] py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
        <Image
    src="/logo.png"
    alt="3-line logo"
    width={80}
    height={40} 
  />        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="/solutions/smes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  SMEs
                </Link>
                <Link href="/solutions/enterprise" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Enterprise
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Individual
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              Company <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  About Us
                </Link>
                <Link href="/our-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Our Team
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Careers
                </Link>
                <Link href="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="/resources/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Blog
                </Link>
                <Link href="/resources/press" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Press
                </Link>
                <Link href="/resources/case-study" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Case Studies
                </Link>
                <Link href="/resources/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  FAQs
                </Link>
              </div>
            </div>
          </div>
          <Link href="/contact-us" className={isActive("/contact-us")}>
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contact-us"
            className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center"
          >
            Get started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <div className="px-4 py-2 space-y-1">
            <div className="py-2 border-b">
              <button className="w-full text-left py-2 text-gray-700">Products</button>
              <div className="pl-4 py-1 space-y-1">
                <Link href="/solutions/smes" className="block py-2 text-sm text-gray-700">
                  SMEs
                </Link>
                <Link href="/solutions/enterprise" className="block py-2 text-sm text-gray-700">
                  Enterprise
                </Link>
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  Individual
                </Link>
              </div>
            </div>
            <div className="py-2 border-b">
              <button className="w-full text-left py-2 text-gray-700">Company</button>
              <div className="pl-4 py-1 space-y-1">
                <Link href="/about-us" className="block py-2 text-sm text-gray-700">
                  About Us
                </Link>
                <Link href="/our-team" className="block py-2 text-sm text-gray-700">
                  Our Team
                </Link>
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  Careers
                </Link>
                <Link href="/contact-us" className="block py-2 text-sm text-gray-700">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="py-2 border-b">
              <button className="w-full text-left py-2 text-gray-700">Resources</button>
              <div className="pl-4 py-1 space-y-1">
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  Blog
                </Link>
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  Press
                </Link>
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  Case Studies
                </Link>
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  FAQs
                </Link>
              </div>
            </div>
            <Link href="/contact-us" className="block py-2 text-gray-700">
              Contact Us
            </Link>
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="block w-full text-center rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
