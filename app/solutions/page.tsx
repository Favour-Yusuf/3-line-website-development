
import Footer from "@/components/footer"
import SolutionsHero from "@/components/solutions/solutions-hero"
import SolutionsSection from "@/components/solutions/solutions-section"
import SecuritySection from "@/components/home/security-section"
import Header from "@/components/header"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      <Header />
      <SolutionsHero />
      <SolutionsSection />
      <SecuritySection />
      <Footer />
    </main>
  )
}
