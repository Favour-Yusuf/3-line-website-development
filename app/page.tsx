import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import PartnersSection from "@/components/partners-section"
import TransactionsMap from "@/components/transactions-map"
import SolutionsSection from "@/components/solutions-section"
import SeamlessTransactions from "@/components/seamless-transactions"
import SecuritySection from "@/components/security-section"
import CaseStudies from "@/components/case-studies"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      <Header />
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <TransactionsMap />
      <SolutionsSection />
      <SeamlessTransactions />
      <SecuritySection />
      <CaseStudies />
      <Footer />
    </main>
  )
}
