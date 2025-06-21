"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown, ChevronUp, ArrowRight, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import PartnersModal from "./partners-modal"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredSection, setHoveredSection] = useState<string>("smes")
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false)
  const [isPartnersExpanded, setIsPartnersExpanded] = useState(false)

  const productsRef = useRef<HTMLDivElement>(null)
  const companyRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Partners data
  const partners = [
    { name: "Interswitch", logo: "/interswitch.png", width: 80 },
    { name: "Union Bank", logo: "/union_bank.png", width: 80 },
    { name: "Access Bank", logo: "/access_bank.png", width: 80 },
    { name: "UP Unified Payments", logo: "/up_payments.png", width: 80 },
    { name: "TAJ Bank", logo: "/taj.png", width: 80 },
    { name: "Fidelity", logo: "/fidelity.png", width: 80 },
    { name: "Providus Bank", logo: "/providus_bank.png", width: 80 },
    { name: "Standard Chartered", logo: "/standard_chartered.png", width: 80 },
    { name: "UBA", logo: "/uba.png", width: 80 },
    { name: "Stanbic IBTC", logo: "/stanbic_ibtc.png", width: 80 },
    { name: "Wema Bank", logo: "/wema_bank.png", width: 80 },
    { name: "OPay", logo: "/opay.png", width: 80 },
    { name: "Zenith", logo: "/zenith.png", width: 80 },
    { name: "Sterling Bank", logo: "/sterling_bank.png", width: 80 },
    { name: "PalmPay", logo: "/palmpay.png", width: 80 },
    { name: "Hydrogen", logo: "/hydrogen.png", width: 80 },
    { name: "Alerzo", logo: "/alerzo_main.png", width: 80 },
    { name: "Optimus Bank", logo: "/optimusbank.png", width: 80 },
    { name: "NowNow", logo: "/nownow.JPG", width: 80 },
    { name: "Parralex", logo: "/parralex_logo.png", width: 80 },
    { name: "NIBSS", logo: "/nibss.png", width: 80 },
  ]

  // Content for different sections
  const sectionContent = {
    smes: [
      {
        number: "1",
        title: "Magtipon Lite:",
        description: "Simplified Payments for Growing Businesses",
       
      },
      {
        number: "2",
        title: "Medusa Merchant:",
        description: "Your End-to-End Business Payment Solution",
       
      },
      {
        number: "3",
        title: "Gravity Lite:",
        description: "Launch Your Agent Banking Business in 24 Hours",
       
      },
    ],
    enterprise: [
      {
        number: "1",
        title: "Gravity Enterprise:",
        description: "Build & Scale a Nationwide Agent Network",
       
      },
      {
        number: "2",
        title: "Magtipon Enterprise:",
        description: "The infrastructure for digital banking",
       
      },
    ],
    individual: [
      {
        number: "1",
        title: "Magtipon Lite:",
        description: "Simplified Payments for Growing Businesses",
       
      },
      {
        number: "2",
        title: "Medusa Merchant:",
        description: "Your End-to-End Business Payment Solution",
       
      },
      {
        number: "3",
        title: "Gravity Lite:",
        description: "Launch Your Agent Banking Business in 24 Hours",
       
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

  const handlePartnersClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsPartnersModalOpen(true)
    setActiveDropdown(null)
  }

  const togglePartnersExpanded = () => {
    setIsPartnersExpanded(!isPartnersExpanded)
  }

  const isActive = (path: string) => (pathname === path ? "text-gray-900" : "text-gray-700 hover:text-gray-900")

  return (
    <>
      <div
        className={`mt-[10px] md:mt-0 w-full flex justify-center items-center fixed top-0 left-0 right-0  md:px-4 z-50 transition-all duration-300 md:py-[10px] h-[var(--header-height-mobile)] md:h-[var(--header-height-desktop)] ${
          hasScrolled ? "bg-transparent mt-2" : "bg-[#EEF3FF] mt-0"
        }`}
      >
        <header className=" w-[95%] bg-[#B8CFFF] py-3 md:py-4 px-4 md:px-8 flex rounded-[10px] relative">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="3Line logo" width={80} height={40} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 ">
              <div className=" " ref={productsRef}>
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
                  <div className="absolute right-[0%] h-[80vh] mt-2 w-screen max-w-[100%] bg-[#EEF3FF] rounded-xl shadow-lg overflow-hidden z-50">
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
                      <div className=" w-[1.5px] bg-blue-300 mt-[30px] mb-[30px]"></div>

                      {/* Right Column - Dynamic Content */}
                      <div className="w-full md:w-1/2">
                        <div className="p-6">
                          <div className="space-y-2">
                            {sectionContent[hoveredSection as keyof typeof sectionContent].map((item, index) => (
                              <div key={index}>
                                <Link href="" className="block">
                                  <div className=" flex items-start gap-4 hover:bg-white p-8 rounded-lg transition-colors">
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
                                  <div className="border-t border-blue-300 pt-8"></div>
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
                          href=""
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
                        <button
                          onClick={handlePartnersClick}
                          className="w-full text-left p-4 hover:bg-[#F5F8FF] rounded-lg"
                        >
                          Our Partners
                        </button>
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
                        <Link
                          href="/blog"
                          onClick={handleLinkClick}
                          className="block p-4 hover:bg-[#F5F8FF] rounded-lg"
                        >
                          Blog
                        </Link>
                        <Link
                          href="/press"
                          onClick={handleLinkClick}
                          className="block p-4 hover:bg-[#F5F8FF] rounded-lg"
                        >
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
            <Sheet  open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden border-none bg-transparent">
                <Image alt="menu" src="/menu.png" width={30} height={30} />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
              
                className="w-full h-full p-0 border-none bg-gradient-to-b from-[#B8CFFF] via-[#A8C5FF] to-[#98BBFF] overflow-hidden"
              >
               
                <div className="flex flex-col h-full overflow-hidden">
                  {/* Header */}
              
                  <div className="flex items-center justify-between p-6 pt-12">
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                      <Image src="/logo.png" alt="3Line logo" width={80} height={40} />
                    </Link>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2">
                      <X className="h-10 w-10 text-[#0A1A4A]" />
                    </button>
                  </div>

                  {/* Navigation Content */}
                  <div className="flex-1 px-6 pb-6 space-y-8 overflow-y-auto">
                    {/* Home */}
                    <div>
                      <Link
                        href="/"
                        className="text-gray-800 text-lg font-bold block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </div>

                    {/* Products */}
                    <div>
                      <h3 className="text-gray-800 text-lg font-bold mb-4">Products</h3>
                      <div className="space-y-3">
                        <Link href="/solutions/smes" onClick={() => setIsMenuOpen(false)}>
                          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 mb-4">
                            <h4 className="text-[#0A1A4A] text-base font-semibold mb-2">SMEs</h4>
                            <p className="text-[#4A5568] text-sm leading-relaxed">
                              Get paid faster, access digital banking, and manage transactions in realtime.
                            </p>
                          </div>
                        </Link>

                        <Link href="/solutions/enterprise" onClick={() => setIsMenuOpen(false)}>
                          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 mb-4">
                            <h4 className="text-[#0A1A4A] text-base font-semibold mb-2">Enterprise</h4>
                            <p className="text-[#4A5568] text-sm leading-relaxed">
                              Optimize cash flow with secure, efficient, and scalable payment solutions.
                            </p>
                          </div>
                        </Link>

                        <Link href="" onClick={() => setIsMenuOpen(false)}>
                          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 mb-4">
                            <h4 className="text-[#0A1A4A] text-base font-semibold mb-2">Individual</h4>
                            <p className="text-[#4A5568] text-sm leading-relaxed">
                              Experience fast, easy, and convenient payment options for your personal and everyday
                              transactions.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <h3 className="text-gray-800 text-lg font-bold mb-4">Company</h3>
                      <div className="space-y-4 pl-4">
                        <Link
                          href="/about-us"
                          className="text-black text-base block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          About Us
                        </Link>
                        <Link
                          href="/our-team"
                          className="text-black text-base block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Our Team
                        </Link>
                        <Link
                          href="/careers"
                          className="text-black text-base block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Careers
                        </Link>
                        <Link
                          href="/contact-us"
                          className="text-black text-base block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Contact Us
                        </Link>

                        {/* Mobile Partners Section */}
                        <div>
                          <button
                            onClick={togglePartnersExpanded}
                            className="flex items-center justify-between w-full text-black text-base font-medium"
                          >
                            Our Partners
                            {isPartnersExpanded ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </button>

                          {isPartnersExpanded && (
                            <div className="mt-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                              <div className="grid grid-cols-4 gap-3">
                                {partners.map((partner, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-center p-2 bg-white/50 rounded-lg"
                                  >
                                    <Image
                                      src={partner.logo || "/placeholder.svg"}
                                      alt={partner.name}
                                      width={partner.width}
                                      height={30}
                                      className="object-contain max-w-full max-h-[30px]"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <hr />

                    {/* Resources */}
                    <div>
                      <h3 className="text-gray-800 text-lg font-medium mb-4">Resources</h3>
                      <div className="space-y-4 pl-4">
                        <Link
                          href="/blog"
                          className="text-black text-base block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Blog
                        </Link>
                        <Link
                          href="/press"
                          className="text-black text-base block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Press
                        </Link>
                        <Link
                          href="/case-study"
                          className="text-black text-base block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Case Studies
                        </Link>
                        <Link
                          href="/api"
                          className="text-black text-base block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          APIs
                        </Link>
                        <Link
                          href="/faq"
                          className="text-black text-base block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          FAQs
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Get Started Button */}
                  <div className="p-6 pt-0 flex-shrink-0">
                    <Link
                      href="/contact-us"
                      className="flex items-center justify-center gap-3 w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-[#0A1A4A] text-lg font-medium">Get started</span>
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4A90E2]">
                        <ArrowRight className="h-6 w-6 text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>
      </div>

      {/* Partners Modal */}
      <PartnersModal isOpen={isPartnersModalOpen} onClose={() => setIsPartnersModalOpen(false)} />
    </>
  )
}

export default Header
