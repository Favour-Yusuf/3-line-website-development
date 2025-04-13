import Image from "next/image"

const TransactionsMap = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="bg-[#0A1A4A] rounded-xl overflow-hidden p-6 md:p-12 relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transactions from Africa to the last mile
            </h2>
            <p className="text-gray-300 max-w-xl mb-8">
              We provide the technology and infrastructure that powers agency banking, merchant payments, and seamless
              financial transactions. Whether you're a bank, a fintech, or a business, we're here to simplify your
              financial journey.
            </p>
          </div>

          <div className="relative h-[300px] md:h-[400px] mt-8">
            <Image src="/images/africa-map.png" alt="Africa Map" fill className="object-contain" />

            {/* Connection lines */}
            <div className="absolute top-1/4 left-1/3">
              <Image src="/images/vector-14.png" alt="Connection" width={150} height={100} className="opacity-70" />
            </div>

            {/* Dots representing transaction points */}
            <div className="absolute top-1/3 left-1/4 h-3 w-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 h-3 w-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 h-3 w-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 opacity-10">
            <Image src="/images/frame-53.png" alt="Decorative element" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransactionsMap
