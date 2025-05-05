"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, ArrowRight, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
  }

  // Products dropdown content
  const productsContent = (
    <div className="w-[1000px] p-6 bg-[#F5F8FF] rounded-xl shadow-lg">
      <div className="text-lg font-medium mb-4">Products</div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-5">
            <div className="text-lg font-semibold mb-1">SMEs</div>
            <p className="text-gray-600">
              Get paid faster, access digital banking, and manage transactions in realtime.
            </p>
          </div>

          <div className="bg-white rounded-lg p-5">
            <div className="text-lg font-semibold mb-1">Enterprise</div>
            <p className="text-gray-600">Optimize cash flow with secure, efficient, and scalable payment solutions.</p>
          </div>

          <div className="bg-white rounded-lg p-5">
            <div className="text-lg font-semibold mb-1">Individual</div>
            <p className="text-gray-600">
              Experience fast, easy, and convenient payment options for your personal and everyday transactions.
            </p>
          </div>
        </div>

        <div className="border-l border-gray-200 pl-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#111827] text-white flex-shrink-0">
              1
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-semibold text-lg">Magtipon Lite:</span>
              </div>
              <p className="text-gray-600">Simplified Payments for Growing Businesses</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6"></div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#111827] text-white flex-shrink-0">
              2
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-semibold text-lg">Medusa Merchant:</span>
              </div>
              <p className="text-gray-600">Your End-to-End Business Payment Solution</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6"></div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#111827] text-white flex-shrink-0">
              3
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-semibold text-lg">Gravity Lite:</span>
              </div>
              <p className="text-gray-600">Launch Your Agent Banking Business in 24 Hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Company dropdown content
  const companyContent = (
    <div className="w-[300px] bg-white rounded-xl shadow-lg p-2">
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
        <Link href="#" className="flex justify-between items-center p-4 hover:bg-[#F5F8FF] rounded-lg">
          Our Partners
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>
      </div>
    </div>
  )

  // Resources dropdown content
  const resourcesContent = (
    <div className="w-[300px] bg-white rounded-xl shadow-lg p-2">
      <div className="text-lg font-medium p-4">Resources</div>
      <div className="space-y-1">
        <Link href="/resources/blog" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
          Blog
        </Link>
        <Link href="/resources/press" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
          Press
        </Link>
        <Link href="/resources/case-study" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
          Case Studies
        </Link>
        <Link href="#" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
          APIs
        </Link>
        <Link href="/resources/faq" className="block p-4 hover:bg-[#F5F8FF] rounded-lg">
          FAQs
        </Link>
      </div>
    </div>
  )

  return (
    <header className="sticky top-0 z-50 w-full bg-[#B8CFFF] py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="3Line logo" width={80} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-base font-medium">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>{productsContent}</NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-base font-medium">
                  Company 
                </NavigationMenuTrigger>
                <NavigationMenuContent>{companyContent}</NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-base font-medium">
                  Resources 
                </NavigationMenuTrigger>
                <NavigationMenuContent>{resourcesContent}</NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/contact-us" className={cn("text-base font-medium", isActive("/contact-us"))}>
            Contact Us
          </Link>

          <Link href="/contact-us" className="ml-4">
            <div className="flex items-center">
              <span className="text-base font-medium mr-2">Get started</span>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3366FF]">
                <ArrowRight className="h-5 w-5 text-white" />
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
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
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
                    <Link href="/resources/blog" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                      Blog
                    </Link>
                    <Link href="/resources/press" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                      Press
                    </Link>
                    <Link href="/resources/case-study" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                      Case Studies
                    </Link>
                    <Link href="#" className="block py-2" onClick={() => setIsMenuOpen(false)}>
                      APIs
                    </Link>
                    <Link href="/resources/faq" className="block py-2" onClick={() => setIsMenuOpen(false)}>
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
  )
}

export default Header
