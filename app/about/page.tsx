import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import AboutStats from "@/components/about/about-stats"
import AboutTeam from "@/components/about/about-team"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      <Header />
      <AboutHero />
      <AboutStats />
      <AboutTeam />
      <Footer />
    </main>
  )
}
