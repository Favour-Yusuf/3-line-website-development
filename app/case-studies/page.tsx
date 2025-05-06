import Header from "@/components/header"
import Footer from "@/components/footer"
import CaseStudiesHero from "@/components/case-studies/case-studies-hero"
import CaseStudiesList from "@/components/case-studies/case-studies-list"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      <Header />
      <CaseStudiesHero />
      <CaseStudiesList />
      <Footer />
    </main>
  )
}
