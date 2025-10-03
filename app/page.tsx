import Image from "next/image";
import HeroSection from "@/components/home/hero-section";
import StatsSection from "@/components/home/stats-section";
import PartnersSection from "@/components/home/partners-section";
import SolutionsSection from "@/components/home/solutions-section";
import CaseStudiesPreview from "@/components/home/case-studies-preview";
import SeamlessTransactions from "@/components/home/seamless-transactions";
import SecuritySection from "@/components/home/security-section";
import TransformCard from "@/components/home/transform-card";
import HomeWrapper from "@/components/home/home-wrapper"; // client wrapper

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEF3FF] overflow-hidden pt-[var(--header-height-mobile)]">
      {/* Main background pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/body_bg.png"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/body_bg1.png"
            alt=""
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* StatsSection → still Server Component */}
      <StatsSection />

      {/* Partners */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/body_bg2.png"
            alt=""
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10">
          <PartnersSection />
        </div>
      </section>

      {/* The rest wrapped in client */}
      <HomeWrapper />
    </main>
  );
}
