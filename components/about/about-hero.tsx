import Image from "next/image"

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-6 md:p-12 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">About 3Line</h1>
              <p className="text-gray-300 mb-8 max-w-lg">
                We are transforming how financial institutions and businesses process payments across Africa. Our
                mission is to make financial services more accessible, secure, and efficient for everyone.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="h-full">
                <Image src="/images/frame-36.png" alt="About 3Line" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
