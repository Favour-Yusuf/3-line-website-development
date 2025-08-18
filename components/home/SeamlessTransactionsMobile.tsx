"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import StackedCardMobile from "./StackedCardMobile"

const cardData = [
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
    description: "Provides a simple and secure way to make payments.",
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
]

export default function SeamlessTransactionsMobile() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // same as desktop
  })

  // For each card, create animated values
  const cardProgresses = cardData.map((_, index) =>
    useTransform(
      scrollYProgress,
      [index / cardData.length, (index + 1) / cardData.length],
      [0, 1]
    )
  )

  const ys = cardProgresses.map((p) =>
    useTransform(p, [0, 1], [0, -100]) // move upward
  )
  const scales = cardProgresses.map((p) =>
    useTransform(p, [0, 1], [1, 0.95]) // shrink slightly
  )
  const opacities = cardProgresses.map((p) =>
    useTransform(p, [0, 0.8, 1], [1, 1, 0]) // fade out
  )

  return (
    <div ref={containerRef} className="relative min-h-[80vh] py-20">
      <div className="sticky top-20 ml-4 h-[400px] w-[90%] flex items-center justify-center">
        <div className="relative w-full h-full">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="absolute left-0 w-full flex justify-center"
              style={{
                top: `${index * 8}px`,
                zIndex: cardData.length - index,
                y: ys[index],
                scale: scales[index],
                opacity: opacities[index],
              }}
            >
              <StackedCardMobile {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
