// import Image from "next/image"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"

// export default function SmesPage() {
//   return (
//     <main className="min-h-screen bg-[#EEF3FF]">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="container mx-auto px-4 py-8 md:py-12">
//           <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
//             <div className="p-8 md:p-12 text-white">
//               <div className="inline-block bg-[#00D2FF] text-[#0A1A4A] px-3 py-1 rounded-md font-medium mb-4">SMEs</div>
//               <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
//                 Empowering small &<br />
//                 growing businesses
//               </h1>
//               <p className="text-gray-300 mb-4 max-w-lg">
//                 Running a business is no small feat, and managing payments should not add to the stress.
//               </p>
//               <p className="text-gray-300 mb-8 max-w-lg">
//                 Our SME solutions help you simplify payments, streamline operations, and unlock new opportunities for
//                 growth.
//               </p>
//             </div>
//             <div className="grid grid-cols-3 gap-2 p-4">
//               <div className="relative h-32 rounded-lg overflow-hidden">
//                 <Image src="/sme_hero1.png" alt="SME Solutions" fill className="object-cover" />
//               </div>
//               <div className="relative h-32 rounded-lg overflow-hidden">
//                 <Image src="/sme_hero2.png" alt="SME Solutions" fill className="object-cover" />
//               </div>
             
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Solutions Section */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto">
//           <h2 className="text-2xl md:text-3xl font-bold mb-8">SMEs Solutions developed with you in mind...</h2>

//           {/* Gravity Lite */}
//           <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-8">
//             <div className="grid grid-cols-1 md:grid-cols-3">
//               <div className="p-8 border-r border-gray-100">
//                 <div className="bg-[#0A1A4A] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
//                   <span className="text-xl font-bold">1</span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">Gravity Lite</h3>
//                 <p className="text-gray-600 mb-4">Launch your agent banking business in 24 hours</p>
//                 <p className="text-gray-600 mb-6">
//                   Expand financial access in your community with Gravity Lite, our agency banking solution designed for
//                   small to medium-sized businesses and entrepreneurs.
//                 </p>
//                 <Link
//                   href="#"
//                   className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
//                 >
//                   Get Started
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </div>
//               <div className="p-8 border-r border-gray-100">
//                 <h3 className="font-semibold mb-4">Key features</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="font-medium">Fast & Easy Agent Onboarding</h4>
//                     <p className="text-sm text-gray-600">Set up and start transacting within 24 hours.</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Multi-Channel Transaction</h4>
//                     <p className="text-sm text-gray-600">Accept cash, digital wallets, and card payments</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Real-Time Monitoring</h4>
//                     <p className="text-sm text-gray-600">Track agent performance and transactions on the go.</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Scalable Network</h4>
//                     <p className="text-sm text-gray-600">Build and manage a thriving agent network effortlessly.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <h3 className="font-semibold mb-4">Who it's for</h3>
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-2 rounded-full mr-3">
//                       <svg
//                         className="h-5 w-5 text-blue-600"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-sm">Entrepreneurs looking to start an agent banking business.</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-2 rounded-full mr-3">
//                       <svg
//                         className="h-5 w-5 text-blue-600"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M3 21H21M4 18H20M5 18V9M19 18V9M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9M10 14H14M9 9H15"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-sm">SMEs that want to extend banking services to underserved areas.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Medusa Merchant */}
//           <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-8">
//             <div className="grid grid-cols-1 md:grid-cols-3">
//               <div className="p-8 border-r border-gray-100">
//                 <div className="bg-[#0A1A4A] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
//                   <span className="text-xl font-bold">2</span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">Medusa Merchant</h3>
//                 <p className="text-gray-600 mb-4">Your end-to-end business payment solution</p>
//                 <p className="text-gray-600 mb-6">
//                   Medusa Merchant is built to simplify payments, streamline business operations, and provide real-time
//                   insights that help businesses grow.
//                 </p>
//                 <Link
//                   href="#"
//                   className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
//                 >
//                   Explore
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </div>
//               <div className="p-8 border-r border-gray-100">
//                 <h3 className="font-semibold mb-4">Key features</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="font-medium">Omnichannel Payments</h4>
//                     <p className="text-sm text-gray-600">Accept payments via cards, transfers, USSD, QR</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium">POS & Terminal Integration</h4>
//                     <p className="text-sm text-gray-600">Enable fast and secure in-person transactions.</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Inventory Management</h4>
//                     <p className="text-sm text-gray-600">Track and manage stock effortlessly.</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Customer Management Tools</h4>
//                     <p className="text-sm text-gray-600">Build loyalty programs and track customer behavior.</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Business Insights</h4>
//                     <p className="text-sm text-gray-600">Data-driven analytics for better decision-making.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <h3 className="font-semibold mb-4">Who it's for</h3>
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-2 rounded-full mr-3">
//                       <svg
//                         className="h-5 w-5 text-blue-600"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M3 21H21M4 18H20M5 18V9M19 18V9M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9M10 14H14M9 9H15"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-sm">SMEs looking to streamline payment processes and improve efficiency.</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-2 rounded-full mr-3">
//                       <svg
//                         className="h-5 w-5 text-blue-600"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-sm">
//                         Business owners who want real-time insights to optimize sales and operations.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Magtipon Lite */}
//           <div className="bg-white rounded-xl overflow-hidden shadow-sm">
//             <div className="grid grid-cols-1 md:grid-cols-3">
//               <div className="p-8 border-r border-gray-100">
//                 <div className="bg-[#0A1A4A] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
//                   <span className="text-xl font-bold">3</span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">Magtipon Lite</h3>
//                 <p className="text-gray-600 mb-4">Simplified payments for growing businesses</p>
//                 <p className="text-gray-600 mb-6">
//                   A powerful payment gateway that allows businesses to issue virtual accounts, process bulk payments,
//                   and offer value-added services like airtime and bill payments.
//                 </p>
//                 <Link
//                   href="#"
//                   className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
//                 >
//                   Get Started
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </div>
//               <div className="p-8 border-r border-gray-100">
//                 <h3 className="font-semibold mb-4">Key features</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="font-medium">Virtual Account Issuance</h4>
//                     <p className="text-sm text-gray-600">Enable seamless fund transfers.</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Bulk & Individual Payments</h4>
//                     <p className="text-sm text-gray-600">Pay vendors and employees with ease.</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Value-Added Services</h4>
//                     <p className="text-sm text-gray-600">Facilitate airtime, bill payments, and more.</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Instant Settlements</h4>
//                     <p className="text-sm text-gray-600">Receive payments without delays.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <h3 className="font-semibold mb-4">Who it's for</h3>
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-2 rounded-full mr-3">
//                       <svg
//                         className="h-5 w-5 text-blue-600"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M3 21H21M4 18H20M5 18V9M19 18V9M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9M10 14H14M9 9H15"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-sm">Growing businesses that need comprehensive payment solutions.</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-2 rounded-full mr-3">
//                       <svg
//                         className="h-5 w-5 text-blue-600"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-sm">Businesses looking to offer value-added services to customers.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
"use client"

import MobileSmesPage from "@/components/sme/mobile-smes-page"
import SmesPage from "@/components/sme/smes-page"
import { useMobile } from "@/hooks/useMobile"


export default function Home() {
  const isMobile = useMobile()

  return isMobile ? <MobileSmesPage /> : <SmesPage />
}

