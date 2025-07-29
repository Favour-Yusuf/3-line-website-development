"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"

export default function StackedCard({
  title,
  description,
  bgColor,
  bgImage,
  foregroundImage,
  scrollProgress,
}: {
  title: string
  description: string
  bgColor: string
  bgImage: string
  foregroundImage: string
  scrollProgress: MotionValue<number>
}) {
  // Transform for image reveal
  const imageY = useTransform(scrollProgress, [0, 1], [50, 0])
  const imageOpacity = useTransform(scrollProgress, [0, 0.5, 1], [0, 1, 1])

  // Transform for text animation
  const textY = useTransform(scrollProgress, [0, 1], [20, 0])
  const textOpacity = useTransform(scrollProgress, [0, 0.3, 1], [0.7, 1, 1])

  return (
    <motion.div
      className="relative p-6 h-[500px] rounded-xl overflow-hidden flex flex-col md:flex-row items-center justify-between text-white shadow-2xl"
      style={{ backgroundColor: bgColor }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Background Shape */}
      <div className="absolute bottom-0 top-7 left-[-10px] w-1/2 h-full z-0 opacity-70">
        <img src={bgImage || "/placeholder.svg"} alt="Background Shape" className="w-full h-full object-contain" />
      </div>

      {/* Text Content */}
      <motion.div
        className="relative bottom-[100px] md:w-[50%] left-10 z-10 text-center md:text-left"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-gray-300 text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Foreground Image */}
      <motion.div
        className="relative z-10 mt-6 top-[99px] md:mt-0 h-[300px] overflow-hidden"
        style={{ y: imageY, opacity: imageOpacity }}
      >
        <motion.img
          src={foregroundImage}
          alt={title}
          className="h-full w-auto object-contain"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </motion.div>
    </motion.div>

  )
}

