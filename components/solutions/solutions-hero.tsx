import Image from "next/image"
import Link from "next/link"

const SolutionsHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-6 md:p-12 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Payment Solutions for Every Need
              </h1>
              <p className="text-gray-300 mb-8 max-w-lg">
                Discover our range of payment solutions tailored for businesses of all sizes, from SMEs to large
                enterprises.
              </p>
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="h-full">
                <Image src="/images/frame-36.png" alt="Payment Solutions" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <Image src="/images/vector-5.png" alt="Decorative element" width={300} height={300} />
      </div>
    </section>
  )
}

export default SolutionsHero
