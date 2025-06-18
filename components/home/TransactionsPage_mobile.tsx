

import Image from "next/image"

export default function TransactionsPage() {
  return (
    <div className="relative min-h-screen bg-[#000066] overflow-hidden px-6 pt-20 pb-10 text-white">
      {/* Top Map Background */}
      <div className="absolute top-[6%] left-[-30%] w-[150%] h-[50%] -translate-y-10">
        <Image
          src="/map_upper.png" // uploaded file: map_mobile2.png
          alt="Top map section"
          fill
          className="object-contain object-top-right"
        />
      </div>

      {/* Decorative Arrow */}
      <div className="absolute inset-0 left-[12%] z-10 w-full">
        <Image
          src="/connecting_arrow.png" // uploaded file: map_mobile_arrow.png
          alt="Connecting arrow"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-sm mx-auto">
        <h1 className="text-3xl font-bold leading-tight mb-6">
          Transactions from Africa to the last mile
        </h1>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          We provide the technology and infrastructure that powers agency banking, merchant payments, and seamless financial transactions.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Whether you're a bank, a fintech, or a business, we're here to simplify your financial journey.
        </p>
      </div>

      {/* Bottom Map with Avatars */}
      <div className="absolute bottom-0 left-0 w-full h-[180px]">
        <Image
          src="/map_lower.png" // uploaded file: map_mobile_frame.png
          alt="Bottom map with avatars"
          fill
          className="object-contain object-bottom-left"
        />
      </div>
    </div>
  )
}
