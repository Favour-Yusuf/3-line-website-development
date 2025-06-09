import Image from "next/image"
import HeroSection from "@/components/home/hero-section"
import StatsSection from "@/components/home/stats-section"
import PartnersSection from "@/components/home/partners-section"
import TransactionsMap from "@/components/home/transactions-map"
import SolutionsSection from "@/components/home/solutions-section"
import CaseStudiesPreview from "@/components/home/case-studies-preview"
import SeamlessTransactions from "@/components/home/seamless-transactions"
import SecuritySection from "@/components/home/security-section"
import ScrollTransitionComponents from "@/components/home/scroll_component"

export default function Home() {
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
      <ScrollTransitionComponents />

      {/* Solutions Section with background */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/body_bg.png" alt="" fill className="object-cover opacity-40" />
        </div>
        <div className="relative z-10">
          <SolutionsSection />
        </div>
      </section>

      {/* Seamless Transactions with background */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/body_bg.png" alt="" fill className="object-cover opacity-40" />
        </div>
        <br />
        <br />
        <br />
        <div className="relative z-10">
          <SeamlessTransactions />
        </div>


      </section>

      {/* Security Section */}
      <SecuritySection />

      {/* Case Studies Preview with background */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/body_bg.png" alt="" fill className="object-cover opacity-40" />
        </div>
        <div className="relative z-10">
          <CaseStudiesPreview />
        </div>
      </section>
    </main>
  )
}
