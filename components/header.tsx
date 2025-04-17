"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#D2E1FF] py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="text-[#0A1A4A] font-bold text-2xl">
            <span className="text-[#0A1A4A]">3</span>
            <span className="text-[#0A1A4A]">line</span>
            <span className="text-blue-500 ml-0.5">.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-[#0A1A4A] hover:text-blue-600 font-medium">
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  SMEs
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Enterprise
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Individual
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-[#0A1A4A] hover:text-blue-600 font-medium">
              Company <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  About Us
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Our Team
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Careers
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-[#0A1A4A] hover:text-blue-600 font-medium">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Blog
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Press
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Case Studies
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  FAQs
                </Link>
              </div>
            </div>
          </div>
          <Link href="#" className="text-[#0A1A4A] hover:text-blue-600 font-medium">
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="#" className="flex items-center text-[#0A1A4A] hover:text-blue-700 font-medium">
            <span className="mr-2">Get started</span>
            <span className="bg-blue-500 rounded-full p-2">
              <ArrowRight className="h-5 w-5 text-white" />
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-[#0A1A4A]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <div className="px-4 py-2 space-y-1">
            <div className="py-2 border-b">
              <button className="w-full text-left py-2 text-[#0A1A4A] font-medium">Products</button>
              <div className="pl-4 py-1 space-y-1">
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  SMEs
                </Link>
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  Enterprise
                </Link>
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  Individual
                </Link>
              </div>
            </div>
            <div className="py-2 border-b">
              <button className="w-full text-left py-2 text-[#0A1A4A] font-medium">Company</button>
              <div className="pl-4 py-1 space-y-1">
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  About Us
                </Link>
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  Our Team
                </Link>
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  Careers
                </Link>
                <Link href="#" className="block py-2 text-sm text-gray-700">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="py-2 border-b">
              <button className="w-full text-left py-2 text-[#0A1A4A] font-medium">Resources</button>
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
            <Link href="#" className="block py-2 text-[#0A1A4A] font-medium">
              Contact Us
            </Link>
            <div className="pt-2">
              <Link href="#" className="flex items-center justify-center py-2 text-[#0A1A4A] font-medium">
                <span className="mr-2">Get started</span>
                <span className="bg-blue-500 rounded-full p-2">
                  <ArrowRight className="h-5 w-5 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
