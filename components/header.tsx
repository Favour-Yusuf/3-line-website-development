"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close dropdown when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (activeDropdown) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeDropdown])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const isActive = (path: string) => {
    return pathname === path ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
  }

  return (
    <div className="w-full bg-white flex justify-center items-center relative px-4">
      <header className="w-full max-w-7xl bg-[#B8CFFF] sticky top-0 z-50 py-3 md:py-4 px-4 md:px-8 flex rounded-[10px]">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="3Line logo" width={80} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown("products")}
                className="flex items-center text-sm lg:text-base font-medium px-2 lg:px-4"
              >
                Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`}
                />
              </button>

              {/* Products Dropdown */}
              {activeDropdown === "products" && (
                <div className="absolute right-50 mt-2 w-screen max-w-[800px] bg-[#EEF3FF] rounded-xl shadow-lg overflow-hidden z-50">
                  <div className="flex flex-col md:flex-row">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 md:border-r border-gray-200">
                      <div className="p-6">
                        <h3 className="text-lg font-medium mb-4">Products</h3>

                        <div className="space-y-6">
                          <div className="bg-white rounded-lg p-5">
                            <h4 className="text-lg font-semibold mb-1">SMEs</h4>
                            <p className="text-gray-600">
                              Get paid faster, access digital banking, and manage transactions in realtime.
                            </p>
                          </div>

                          <div className="bg-white rounded-lg p-5">
                            <h4 className="text-lg font-semibold mb-1">Enterprise</h4>
                            <p className="text-gray-600">
                              Optimize cash flow with secure, efficient, and scalable payment solutions.
                            </p>
                          </div>

                          <div className="bg-white rounded-lg p-5">
                            <h4 className="text-lg font-semibold mb-1">Individual</h4>
                            <p className="text-gray-600">
                              Experience fast, easy, and convenient payment options for your personal and everyday
                              transactions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-1/2">
                      <div className="p-6">
                        <div className="space-y-8">
                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0A1A4A] text-white flex-shrink-0">
                              <span>1</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold">Magtipon Lite:</h4>
                              <p className="text-gray-600">Simplified Payments for Growing Businesses</p>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 pt-8"></div>

                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0A1A4A] text-white flex-shrink-0">
                              <span>2</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold">Medusa Merchant:</h4>
                              <p className="text-gray-600">Your End-to-End Business Payment Solution</p>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 pt-8"></div>

                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0A1A4A] text-white flex-shrink-0">
                              <span>3</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold">Gravity Lite:</h4>
                              <p className="text-gray-600">Launch Your Agent Banking Business in 24 Hours</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("company")}
                className="flex items-center text-sm lg:text-base font-medium px-2 lg:px-4"
              >
                Company
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`}
                />
              </button>

              {/* Company Dropdown */}
              {activeDropdown === "company" && (
                <div className="absolute left-0 mt-2 w-[250px] bg-white rounded-xl shadow-lg overflow-hidden z-50">
                  <div className="p-2">
                    <div className="text-lg font-medium p-4">Company</div>
                    <div className="space-y-1">
                      <Link href="/about-us" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        About Us
                      </Link>
                      <Link href="/our-team" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        Our Team
                      </Link>
                      <Link href="#" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        Careers
                      </Link>
                      <Link href="/contact-us" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        Contact Us
                      </Link>
                      <Link href="#" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        Our Partners
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className="flex items-center text-sm lg:text-base font-medium px-2 lg:px-4"
              >
                Resources
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`}
                />
              </button>

              {/* Resources Dropdown */}
              {activeDropdown === "resources" && (
                <div className="absolute left-0 mt-2 w-[250px] bg-white rounded-xl shadow-lg overflow-hidden z-50">
                  <div className="p-2">
                    <div className="text-lg font-medium p-4">Resources</div>
                    <div className="space-y-1">
                      <Link href="#" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        Blog
                      </Link>
                      <Link href="#" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        Press
                      </Link>
                      <Link href="#" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        Case Studies
                      </Link>
                      <Link href="#" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        APIs
                      </Link>
                      <Link href="#" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        FAQs
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact-us" className={`text-sm lg:text-base font-medium ${isActive("/contact-us")}`}>
              Contact Us
            </Link>

            <Link href="/contact-us" className="ml-2 lg:ml-4">
              <div className="flex items-center">
                <span className="text-sm lg:text-base font-medium mr-2">Get started</span>
                <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#3366FF]">
                  <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                  <Image src="/logo.png" alt="3Line logo" width={80} height={40} />
                </Link>

                <div className="space-y-4">
                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-lg font-medium">
                      Products <ChevronDown className="h-4 w-4 transition-transform ui-open:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 pt-2 pb-4 space-y-3">
                      <Link href="/solutions/smes" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        SMEs
                      </Link>
                      <Link href="/solutions/enterprise" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Enterprise
                      </Link>
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Individual
                      </Link>
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Magtipon Lite
                      </Link>
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Medusa Merchant
                      </Link>
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Gravity Lite
                      </Link>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-lg font-medium">
                      Company <ChevronDown className="h-4 w-4 transition-transform ui-open:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 pt-2 pb-4 space-y-3">
                      <Link href="/about-us" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        About Us
                      </Link>
                      <Link href="/our-team" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Our Team
                      </Link>
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Careers
                      </Link>
                      <Link href="/contact-us" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Contact Us
                      </Link>
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Our Partners
                      </Link>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-lg font-medium">
                      Resources <ChevronDown className="h-4 w-4 transition-transform ui-open:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 pt-2 pb-4 space-y-3">
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Blog
                      </Link>
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Press
                      </Link>
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Case Studies
                      </Link>
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        APIs
                      </Link>
                      <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        FAQs
                      </Link>
                    </CollapsibleContent>
                  </Collapsible>

                  <Link
                    href="/contact-us"
                    className="block py-2 text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>

                <Link href="/contact-us" className="mt-4 flex items-center" onClick={() => setIsMenuOpen(false)}>
                  <span className="text-base font-medium mr-2">Get started</span>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3366FF]">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  )
}

export default Header
