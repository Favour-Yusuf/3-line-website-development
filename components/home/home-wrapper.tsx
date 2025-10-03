"use client";

import { useMobile } from "@/hooks/useMobile";
import ScrollTransitionComponents from "@/components/home/scroll_component";
import ScrollMobile from "@/components/home/scroll-mobile";
import SolutionsSection from "@/components/home/solutions-section";
import SeamlessTransactions from "@/components/home/seamless-transactions";
import SeamlessTransactionsMobile from "@/components/home/SeamlessTransactionsMobile";
import CaseBeforeSolution from "@/components/home/CaseBeforeSolution";
import CaseAfterSolution from "@/components/home/CaseAfterSolution";
import TransformCard from "@/components/home/transform-card";

export default function HomeWrapper() {
  const isMobile = useMobile();

  return (
    <>
      {/* Transactions Map */}
      {isMobile ? <ScrollMobile /> : <ScrollTransitionComponents />}

      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/body_bg.png"
            alt=""
            className="object-cover opacity-40 w-full h-full"
          />
        </div>
        <div className="relative z-10">
          <SolutionsSection />
        </div>
      </section>

      <TransformCard />
      <br />

      {/* Seamless Transactions */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/body_bg.png"
            alt=""
            className="object-cover opacity-40 w-full h-full"
          />
        </div>
        <div className="relative z-10">
          {isMobile ? <SeamlessTransactionsMobile /> : <SeamlessTransactions />}
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/body_bg.png"
            alt=""
            className="object-cover opacity-40 w-full h-full"
          />
        </div>
        <div className="relative z-10">
          {isMobile ? <CaseBeforeSolution /> : <CaseAfterSolution />}
          <br />
          <br />
        </div>
      </section>
    </>
  );
}
