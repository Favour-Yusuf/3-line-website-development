import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import HeroSection from "@/components/home/hero-section"
import StatsSection from "@/components/home/stats-section"
import PartnersSection from "@/components/home/partners-section"
import TransactionsMap from "@/components/home/transactions-map"
import SolutionsSection from "@/components/home/solutions-section"
import CaseStudiesPreview from "@/components/home/case-studies-preview"
import SeamlessTransactions from "@/components/home/seamless-transactions"
import SecuritySection from "@/components/home/security-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
    <HeroSection />
    <StatsSection />
    <PartnersSection />
    <TransactionsMap />
    <SolutionsSection />
    <SeamlessTransactions />
    <SecuritySection />
    <CaseStudiesPreview />
  </main>
  )
}
