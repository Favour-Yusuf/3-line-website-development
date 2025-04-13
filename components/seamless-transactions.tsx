import Image from "next/image"

const SeamlessTransactions = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="bg-[#0A1A4A] rounded-xl overflow-hidden p-6 md:p-12 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seamless Transactions, Every Time!</h2>
              <p className="text-gray-300 max-w-xl">
                At 3Line, we understand that customers want flexibility when it comes to payments. That's why we provide
                multiple channels to ensure that your customers can pay the way they prefer, every time.
              </p>
            </div>

            <div className="w-full md:w-1/2 relative">
              <div className="relative h-[300px]">
                <Image src="/images/payment-device.png" alt="Payment Device" fill className="object-contain" />

                {/* Animated wave effect */}
                <div className="absolute top-1/4 left-1/4 h-16 w-16 rounded-full border-2 border-blue-400 opacity-70 animate-ping"></div>
                <div className="absolute top-1/4 left-1/4 h-24 w-24 rounded-full border-2 border-blue-400 opacity-50 animate-ping animation-delay-300"></div>
                <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full border-2 border-blue-400 opacity-30 animate-ping animation-delay-600"></div>
              </div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute bottom-0 left-0 opacity-20">
            <Image src="/images/frame-27.png" alt="Decorative element" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeamlessTransactions
