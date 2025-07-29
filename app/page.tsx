"use client"
import Image from "next/image"
import HeroSection from "@/components/home/hero-section"
import StatsSection from "@/components/home/stats-section"
import PartnersSection from "@/components/home/partners-section"
import SolutionsSection from "@/components/home/solutions-section"
import CaseStudiesPreview from "@/components/home/case-studies-preview"
import SeamlessTransactions from "@/components/home/seamless-transactions"
import SecuritySection from "@/components/home/security-section"
import ScrollTransitionComponents from "@/components/home/scroll_component"
import { useMobile } from "@/hooks/useMobile"
import TransactionsPage from "@/components/home/TransactionsPage_mobile"
import WhoWeServePageMobile from "@/components/home/WhoWeServePageMobile"
import ScrollMobile from "@/components/home/scroll-mobile"
import CaseBeforeSolution from "@/components/home/CaseBeforeSolution"
import CaseAfterSolution from "@/components/home/CaseAfterSolution"
import TransformCard from "@/components/home/transform-card"
import SeamlessTransactionsMobile from "@/components/home/SeamlessTransactionsMobile"
export default function Home() {
  const isMobile = useMobile()
  return (
    <main className="min-h-screen bg-[#EEF3FF] overflow-hidden pt-[var(--header-height-mobile)]">
      {/* Main background pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image src="/body_bg.png" alt="" fill className="object-cover opacity-30" priority />
      </div>

      {/* Hero Section with its own background */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/body_bg1.png" alt="" fill className="object-cover opacity-40" />
        </div>
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Partners Section with background */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/body_bg2.png" alt="" fill className="object-cover opacity-40" />
        </div>
        <div className="relative z-10">
          <PartnersSection />
        </div>
      </section>

      {/* Transactions Map */}
      {
        isMobile ? <ScrollMobile /> : <ScrollTransitionComponents />
      }
     
      
     

      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/body_bg.png" alt="" fill className="object-cover opacity-40" />
        </div>
        <div className="relative z-10">
          <SolutionsSection />
        </div>
      </section>
<TransformCard />
<br />
      {/* Seamless Transactions with background */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/body_bg.png" alt="" fill className="object-cover opacity-40" />
        </div>
        
        <div className="relative z-10">
            {
               isMobile ? <SeamlessTransactionsMobile /> : <SeamlessTransactions />
            }
          {/* <SeamlessTransactions /> */}
           {/* <SeamlessTransactionsMobile /> */}
        </div>


      </section>

    

      {/* Case Studies Preview with background */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/body_bg.png" alt="" fill className="object-cover opacity-40" />
        </div>
        <div className="relative z-10">
        {
        isMobile ? <CaseBeforeSolution /> : < CaseAfterSolution/>
      }
<br />
<br />
        </div>
      </section>
    </main>
  )
}
