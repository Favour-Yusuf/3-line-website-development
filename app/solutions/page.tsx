import Header from "@/components/main_header"
import Footer from "@/components/footer"
import SolutionsHero from "@/components/solutions/solutions-hero"
import SolutionsSection from "@/components/solutions/solutions-section"
import SecuritySection from "@/components/home/security-section"

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
