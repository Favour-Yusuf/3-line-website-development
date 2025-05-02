// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
// import { usePathname } from "next/navigation"
// import Image from "next/image"

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const pathname = usePathname()

//   const isActive = (path: string) => {
//     return pathname === path ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
//   }

//   return (
//     <header className="sticky top-0 z-50 w-full bg-[#EEF3FF] py-4 px-4 md:px-8">
//       <div className="container mx-auto flex items-center justify-between">
//         <Link href="/" className="flex items-center">
//         <Image
//     src="/logo.png"
//     alt="3-line logo"
//     width={80}
//     height={40} 
//   />        </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <div className="relative group">
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               Products <ChevronDown className="ml-1 h-4 w-4" />
//             </button>
//             <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <div className="py-1">
//                 <Link href="/solutions/smes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   SMEs
//                 </Link>
//                 <Link href="/solutions/enterprise" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   Enterprise
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   Individual
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="relative group">
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               Company <ChevronDown className="ml-1 h-4 w-4" />
//             </button>
//             <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <div className="py-1">
//                 <Link href="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   About Us
//                 </Link>
//                 <Link href="/our-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   Our Team
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   Careers
//                 </Link>
//                 <Link href="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   Contact Us
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="relative group">
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               Resources <ChevronDown className="ml-1 h-4 w-4" />
//             </button>
//             <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <div className="py-1">
//                 <Link href="/resources/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   Blog
//                 </Link>
//                 <Link href="/resources/press" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   Press
//                 </Link>
//                 <Link href="/resources/case-study" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   Case Studies
//                 </Link>
//                 <Link href="/resources/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   FAQs
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <Link href="/contact-us" className={isActive("/contact-us")}>
//             Contact Us
//           </Link>
//         </nav>

//         <div className="hidden md:flex items-center space-x-4">
//           <Link
//             href="/contact-us"
//             className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center"
//           >
//             Get started
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
//           <div className="px-4 py-2 space-y-1">
//             <div className="py-2 border-b">
//               <button className="w-full text-left py-2 text-gray-700">Products</button>
//               <div className="pl-4 py-1 space-y-1">
//                 <Link href="/solutions/smes" className="block py-2 text-sm text-gray-700">
//                   SMEs
//                 </Link>
//                 <Link href="/solutions/enterprise" className="block py-2 text-sm text-gray-700">
//                   Enterprise
//                 </Link>
//                 <Link href="#" className="block py-2 text-sm text-gray-700">
//                   Individual
//                 </Link>
//               </div>
//             </div>
//             <div className="py-2 border-b">
//               <button className="w-full text-left py-2 text-gray-700">Company</button>
//               <div className="pl-4 py-1 space-y-1">
//                 <Link href="/about-us" className="block py-2 text-sm text-gray-700">
//                   About Us
//                 </Link>
//                 <Link href="/our-team" className="block py-2 text-sm text-gray-700">
//                   Our Team
//                 </Link>
//                 <Link href="#" className="block py-2 text-sm text-gray-700">
//                   Careers
//                 </Link>
//                 <Link href="/contact-us" className="block py-2 text-sm text-gray-700">
//                   Contact Us
//                 </Link>
//               </div>
//             </div>
//             <div className="py-2 border-b">
//               <button className="w-full text-left py-2 text-gray-700">Resources</button>
//               <div className="pl-4 py-1 space-y-1">
//                 <Link href="#" className="block py-2 text-sm text-gray-700">
//                   Blog
//                 </Link>
//                 <Link href="#" className="block py-2 text-sm text-gray-700">
//                   Press
//                 </Link>
//                 <Link href="#" className="block py-2 text-sm text-gray-700">
//                   Case Studies
//                 </Link>
//                 <Link href="#" className="block py-2 text-sm text-gray-700">
//                   FAQs
//                 </Link>
//               </div>
//             </div>
//             <Link href="/contact-us" className="block py-2 text-gray-700">
//               Contact Us
//             </Link>
//             <div className="pt-2">
//               <Link
//                 href="/contact-us"
//                 className="block w-full text-center rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
//               >
//                 Get started
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Header
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
                  Products <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>{productsContent}</NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-base font-medium">
                  Company <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>{companyContent}</NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-base font-medium">
                  Resources <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
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
