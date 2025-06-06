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
  const [hoveredSection, setHoveredSection] = useState<string>("smes") // Default to SMEs
  const [hasScrolled, setHasScrolled] = useState(false)

  const productsRef = useRef<HTMLDivElement>(null)
  const companyRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Content for different sections
  const sectionContent = {
    smes: [
      {
        number: "1",
        title: "Magtipon Lite:",
        description: "Simplified Payments for Growing Businesses",
        href: "/solutions/magtipon-lite",
      },
      {
        number: "2",
        title: "Medusa Merchant:",
        description: "Your End-to-End Business Payment Solution",
        href: "/solutions/medusa-merchant",
      },
      {
        number: "3",
        title: "Gravity Lite:",
        description: "Launch Your Agent Banking Business in 24 Hours",
        href: "/solutions/gravity-lite",
      },
    ],
    enterprise: [
      {
        number: "1",
        title: "Gravity Enterprise:",
        description: "Build & Scale a Nationwide Agent Network",
        href: "/solutions/gravity-enterprise",
      },
      {
        number: "2",
        title: "Magtipon Enterprise:",
        description: "The infrastructure for digital banking",
        href: "/solutions/magtipon-enterprise",
      },
    ],
    individual: [
      {
        number: "1",
        title: "Magtipon Lite:",
        description: "Simplified Payments for Growing Businesses",
        href: "/solutions/magtipon-lite",
      },
      {
        number: "2",
        title: "Medusa Merchant:",
        description: "Your End-to-End Business Payment Solution",
        href: "/solutions/medusa-merchant",
      },
      {
        number: "3",
        title: "Gravity Lite:",
        description: "Launch Your Agent Banking Business in 24 Hours",
        href: "/solutions/gravity-lite",
      },
    ],
  }

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let currentRef: HTMLDivElement | null = null

      switch (activeDropdown) {
        case "products":
          currentRef = productsRef.current
          break
        case "company":
          currentRef = companyRef.current
          break
        case "resources":
          currentRef = resourcesRef.current
          break
        default:
          currentRef = null
      }

      if (currentRef && !currentRef.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  // Close dropdown when scrolling
  useEffect(() => {
    const handleScroll = () => activeDropdown && setActiveDropdown(null)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeDropdown])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleLinkClick = () => setActiveDropdown(null)

  const isActive = (path: string) => (pathname === path ? "text-gray-900" : "text-gray-700 hover:text-gray-900")

  return (
    <div
      className={`w-full flex justify-center items-center fixed top-0 left-0 right-0 px-4 z-50 transition-all duration-300 md:py-[10px] h-[var(--header-height-mobile)] md:h-[var(--header-height-desktop)] ${
        hasScrolled ? "bg-transparent mt-2" : "bg-[#EEF3FF] mt-0"
      }`}
    >
      <header className="w-[90%] bg-[#B8CFFF] py-3 md:py-4 px-4 md:px-8 flex rounded-[10px]">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="3Line logo" width={80} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => setActiveDropdown((prev) => (prev === "products" ? null : "products"))}
                className="flex items-center text-sm lg:text-[20px] font-medium px-2 lg:px-4"
              >
                Products
                <ChevronDown
                  className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`}
                />
              </button>

              {/* Products Dropdown */}
              {activeDropdown === "products" && (
                <div className="absolute left-0 mt-2 w-screen max-w-[800px] bg-[#EEF3FF] rounded-xl shadow-lg overflow-hidden z-50">
                  <div className="flex flex-col md:flex-row">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 md:border-r border-gray-200">
                      <div className="p-6">
                        <h3 className="text-lg font-medium mb-4">Products</h3>

                        <div className="space-y-6">
                          <Link href="/solutions/smes" className="block">
                            <div
                              className={`rounded-lg p-5 hover:shadow-md transition-all cursor-pointer ${
                                hoveredSection === "smes" ? "bg-blue-50 border-2 border-blue-200" : "bg-white"
                              }`}
                              onMouseEnter={() => setHoveredSection("smes")}
                            >
                              <h4 className="text-lg font-semibold mb-1">SMEs</h4>
                              <p className="text-gray-600">
                                Get paid faster, access digital banking, and manage transactions in realtime.
                              </p>
                            </div>
                          </Link>

                          <Link href="/solutions/enterprise" className="block">
                            <div
                              className={`rounded-lg p-5 hover:shadow-md transition-all cursor-pointer ${
                                hoveredSection === "enterprise" ? "bg-blue-50 border-2 border-blue-200" : "bg-white"
                              }`}
                              onMouseEnter={() => setHoveredSection("enterprise")}
                            >
                              <h4 className="text-lg font-semibold mb-1">Enterprise</h4>
                              <p className="text-gray-600">
                                Optimize cash flow with secure, efficient, and scalable payment solutions.
                              </p>
                            </div>
                          </Link>

                          <div
                            className={`rounded-lg p-5 hover:shadow-md transition-all cursor-pointer ${
                              hoveredSection === "individual" ? "bg-blue-50 border-2 border-blue-200" : "bg-white"
                            }`}
                            onMouseEnter={() => setHoveredSection("individual")}
                          >
                            <h4 className="text-lg font-semibold mb-1">Individual</h4>
                            <p className="text-gray-600">
                              Experience fast, easy, and convenient payment options for your personal and everyday
                              transactions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Dynamic Content */}
                    <div className="w-full md:w-1/2">
                      <div className="p-6">
                        <div className="space-y-8">
                          {sectionContent[hoveredSection as keyof typeof sectionContent].map((item, index) => (
                            <div key={index}>
                              <Link href={item.href} className="block">
                                <div className="flex items-start gap-4 hover:bg-white p-3 rounded-lg transition-colors">
                                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0A1A4A] text-white flex-shrink-0">
                                    <span>{item.number}</span>
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                    <p className="text-gray-600">{item.description}</p>
                                  </div>
                                </div>
                              </Link>
                              {index < sectionContent[hoveredSection as keyof typeof sectionContent].length - 1 && (
                                <div className="border-t border-gray-200 pt-8"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" ref={companyRef}>
              <button
                onClick={() => setActiveDropdown((prev) => (prev === "company" ? null : "company"))}
                className="flex items-center text-sm lg:text-[20px] font-medium px-2 lg:px-4"
              >
                Company
                <ChevronDown
                  className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "company" && (
                <div className="absolute left-0 mt-2 w-[250px] bg-white rounded-xl shadow-lg overflow-hidden z-50">
                  <div className="p-2">
                    <div className="text-lg font-medium p-4">Company</div>
                    <div className="space-y-1">
                      <Link
                        href="/about-us"
                        onClick={handleLinkClick}
                        className="block p-4 hover:bg-[#F5F8FF] rounded-lg"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/our-team"
                        onClick={handleLinkClick}
                        className="block p-4 hover:bg-[#F5F8FF] rounded-lg"
                      >
                        Our Team
                      </Link>
                      <Link
                        href="/careers"
                        onClick={handleLinkClick}
                        className="block p-4 hover:bg-[#F5F8FF] rounded-lg"
                      >
                        Careers
                      </Link>
                      <Link
                        href="/contact-us"
                        onClick={handleLinkClick}
                        className="block p-4 hover:bg-[#F5F8FF] rounded-lg"
                      >
                        Contact Us
                      </Link>
                      <Link
                        href="/partners"
                        onClick={handleLinkClick}
                        className="block p-4 hover:bg-[#F5F8FF] rounded-lg"
                      >
                        Our Partners
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setActiveDropdown((prev) => (prev === "resources" ? null : "resources"))}
                className="flex items-center text-sm lg:text-[20px] font-medium px-2 lg:px-4"
              >
                Resources
                <ChevronDown
                  className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "resources" && (
                <div className="absolute left-0 mt-2 w-[250px] bg-white rounded-xl shadow-lg overflow-hidden z-50">
                  <div className="p-2">
                    <div className="text-lg font-medium p-4">Resources</div>
                    <div className="space-y-1">
                      <Link href="/blog" onClick={handleLinkClick} className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        Blog
                      </Link>
                      <Link href="/press" onClick={handleLinkClick} className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        Press
                      </Link>
                      <Link
                        href="/case-study"
                        onClick={handleLinkClick}
                        className="block p-4 hover:bg-[#F5F8FF] rounded-lg"
                      >
                        Case Studies
                      </Link>
                      <Link href="/api" onClick={handleLinkClick} className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        APIs
                      </Link>
                      <Link href="/faq" onClick={handleLinkClick} className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
                        FAQs
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact-us" className={`text-sm lg:text-[20px] font-medium ${isActive("/contact-us")}`}>
              Contact Us
            </Link>

            <Link href="/contact-us" className="ml-2 lg:ml-4">
              <div className="flex items-center">
                <span className="text-sm lg:text-[24px] font-medium mr-2 text-[#000066]">Get started</span>
                <Image src="/arrow_header.png" alt="arrow header" width={60} height={60} />
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
                      <Link href="/solutions/individual" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Individual
                      </Link>
                      <Link href="/solutions/magtipon-lite" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Magtipon Lite
                      </Link>
                      <Link
                        href="/solutions/medusa-merchant"
                        className="block py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Medusa Merchant
                      </Link>
                      <Link href="/solutions/gravity-lite" className="block py-2" onClick={() => setIsMenuOpen(false)}>
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
                      <Link href="/careers" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Careers
                      </Link>
                      <Link href="/contact-us" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Contact Us
                      </Link>
                      <Link href="/partners" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Our Partners
                      </Link>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-lg font-medium">
                      Resources <ChevronDown className="h-4 w-4 transition-transform ui-open:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 pt-2 pb-4 space-y-3">
                      <Link href="/blog" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Blog
                      </Link>
                      <Link href="/press" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Press
                      </Link>
                      <Link href="/case-study" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        Case Studies
                      </Link>
                      <Link href="/api" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                        APIs
                      </Link>
                      <Link href="/faq" className="block py-2" onClick={() => setIsMenuOpen(false)}>
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
