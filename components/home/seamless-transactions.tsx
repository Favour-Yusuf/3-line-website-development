"use client"

import { useState } from "react"
import { Scrollama, Step } from "react-scrollama"
import { motion } from "framer-motion"
import { CardPayment1 } from "./cards/cardpayment1"
import { CardPayment2 } from "./cards/cardpayment2"

const slides = [
  {
    id: "card-1",
    component: <CardPayment1 />,
    bgColor: "#0A1A4A",
  },
  {
    id: "card-2",
    component: <CardPayment2 />,
    bgColor: "#0A1A4A",
  },
  // Add more cards here
]

const SeamlessTransactions = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onStepEnter = ({ data }: { data: number }) => {
    setActiveIndex((prev) => Math.max(prev, data))
  }

  return (
    <div className="w-full relative">
      {/* Scroll triggers */}
      <Scrollama onStepEnter={onStepEnter} offset={0.5}>
        {slides.map((_, index) => (
          <Step data={index} key={index}>
            <div className="h-[90vh] flex items-center justify-center">
              {/* Empty div just to trigger */}
              <div className="w-full h-full" />
            </div>
          </Step>
        ))}
      </Scrollama>

      {/* Sticky stack animation area */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-full max-w-4xl px-6">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 60 }}
              animate={
                index <= activeIndex
                  ? { opacity: 1, y: -index * 20, scale: 1 - index * 0.02 }
                  : { opacity: 0, y: 60 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full rounded-2xl shadow-xl overflow-hidden"
              style={{ backgroundColor: slide.bgColor, zIndex: 100 - index }}
            >
              {slide.component}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SeamlessTransactions