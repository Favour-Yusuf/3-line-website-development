'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function StackedCard({
  title,
  description,
  bgColor,
  bgImage,
  foregroundImage,
  isActive,
  isRevealed,
  revealProgress,
}: {
  title: string;
  description: string;
  bgColor: string;
  bgImage: string;
  foregroundImage: string;
  isActive?: boolean;
  isRevealed?: boolean;
  revealProgress?: number;
}) {
  const rotateY = isRevealed ? 180 : isActive ? revealProgress! * 180 : 0;

  return (
    <motion.div
      className={`relative p-6 h-[500px] rounded-xl overflow-hidden flex flex-col md:flex-row items-center justify-between text-white`}
      style={{ backgroundColor: bgColor }}
      animate={{ rotateY }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Background Shape */}
      <div className="absolute bottom-0 top-7 left-[-10] w-1/2 h-full z-0 opacity-70">
        <img
          src={bgImage}
          alt="Background Shape"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text */}
      <div className="relative bottom-[100px] md:w-[50%] left-10 z-10 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 text-sm md:text-base">{description}</p>
      </div>

      {/* Foreground Image Reveal */}
      <motion.div
        className="relative z-10 mt-6 top-[99px] md:mt-0 h-[300px] overflow-hidden"
        animate={{
          clipPath: `inset(${(1 - revealProgress!) * 50}% 0% 0% 0%)`,
        }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={foregroundImage}
          alt={title}
          className="h-full w-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
}