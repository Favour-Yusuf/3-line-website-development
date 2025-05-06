import Image from "next/image"

const IndividualHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-6 md:p-12 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Individual Payment Solutions</h1>
              <p className="text-gray-300 mb-8 max-w-lg">
                Simple, fast, and convenient payment options for your personal and everyday transactions. Our individual
                solutions make managing your finances easier.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="h-full">
                <Image src="/images/frame-36.png" alt="Individual Solutions" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndividualHero
