// pages/StackedCardsPage.tsx
"use client"

import StackedCard from "./StackedCard";
import { useTransform } from "framer-motion"
import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

const cardData = [
  {
    title: "Seamless Transactions, Every Time!",
    description:
      "At 3Line, we understand that customers want flexibility when it comes to payments...",
    bgColor: "#00006B",
    bgImage: "/groupImg.png",
    foregroundImage: "/pos.png",
  },
  {
    title: "Card Payments",
    description:
      "Whether it’s debit, credit, or prepaid cards, we make it easy for your customers to pay securely and efficiently.",
    bgColor: "#00002E",
    bgImage: "/GroupImg2.png",
    foregroundImage: "/Cards.png",
  },
  {
    title: "QR Codes",
    description:
      "For customers without smartphones or internet access, USSD provides a simple and secure way to make payments.",
    bgColor: "#00006B",
    bgImage: "/groupImg.png",
    foregroundImage: "/Nothing Phone 1.png",
  },
  {
    title: "Payment Links",
    description:
      "For customers without smartphones or internet access, USSD provides a simple and secure way to make payments.",
    bgColor: "#0569FF",
    bgImage: "/GroupImg2.png",
    foregroundImage: "/credit.png",
  },
  {
    title: "USSD",
    description:
      "Provides a simple and secure way to make payments.",
    bgColor: "#00002E",
    bgImage: "/groupImg.png",
    foregroundImage: "/button-phone.png",
  },
  {
    title: "Bank Transfers",
    description:
      "Fast, reliable transfers that ensure your customers can pay directly from their bank accounts.",
    bgColor: "#023E8A",
    bgImage: "/groupImg.png",
    foregroundImage: "/receipt.png",
  },
  
];

export default function SeamlessTransactions() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })



const cardProgresses = cardData.map((_, index) =>
  useTransform(
    scrollYProgress,
    [index / cardData.length, (index + 1) / cardData.length],
    [0, 1]
  )
)

const ys = cardProgresses.map((cardProgress) =>
  useTransform(cardProgress, [0, 1], [0, -100])
)

const scales = cardProgresses.map((cardProgress) =>
  useTransform(cardProgress, [0, 1], [1, 0.95])
)

const opacities = cardProgresses.map((cardProgress) =>
  useTransform(cardProgress, [0, 0.8, 1], [1, 1, 0])
)

  return (
    <div ref={containerRef} className="relative min-h-[100vh] py-20">
      <div className="sticky top-20 ml-8 h-[400px] md:h-[600px] w-[97%] flex items-center justify-center">
        <div className="relative w-[95%] h-full">
          {cardData.map((card, index) => {
            return (
              <motion.div
                key={index}
                className="absolute left-0 w-full"
                style={{
                  top: `${index * 8}px`,
                  zIndex: cardData.length - index,
                  y: ys[index],
                  scale: scales[index],
                  opacity: opacities[index],
                }}
              >
                <StackedCard {...card} scrollProgress={cardProgresses[index]} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}