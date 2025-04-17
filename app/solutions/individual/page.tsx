import Header from "@/components/header"
import Footer from "@/components/footer"
import IndividualHero from "@/components/solutions/individual-hero"
import IndividualFeatures from "@/components/solutions/individual-features"

export default function IndividualPage() {
  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      <Header />
      <IndividualHero />
      <IndividualFeatures />
      <Footer />
    </main>
  )
}
