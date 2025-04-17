import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/landing page/hero-section"
import StatsSection from "@/components/landing page/stats-section"
import PartnersSection from "@/components/landing page/partners-section"
import TransactionsMap from "@/components/landing page/transactions-map"
import SolutionsSection from "@/components/landing page/solutions-section"
import SeamlessTransactions from "@/components/landing page/seamless-transactions"
import SecuritySection from "@/components/landing page/security-section"
import CaseStudies from "@/components/landing page/case-studies"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
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
