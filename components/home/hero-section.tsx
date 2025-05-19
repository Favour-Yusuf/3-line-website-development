import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden flex justify-center items-center bg-[#EEF3FF] md:mt-[80px] ">
      <div className="w-[96%] h-[500px] md:h-[650px] lg:h-[600px] bg-[#0A1A4A] relative rounded-[10px]">
        {/* Background geometric shapes */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/hero2.png"
            alt="Background pattern"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>

        <div className="w-[100%] mx-auto h-full relative z-10 pl-4 md:flex flex-col md:flex-row items-between  ">
          {/* Left content */}
          <div className="w-full md:w-1/2 md:pt-[60px] md:pl-[40px] md:ml-[45px]">
            <div className="inline-block bg-[#00D2FF] text-[#0A1A4A] px-3 py-1 rounded-md font-medium mb-4 rotate-[-2deg]">
              Your
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Preferred
              <br />
              Payment
              <br />
              Partner
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg text-lg">
              We are redefining how financial institutions and businesses move money, by making payments faster, safer,
              and more accessible for everyone.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition-colors group"
            >
              <span>Get started</span>
              <span className="ml-2 bg-white rounded-full p-2 group-hover:bg-blue-400 transition-colors">
                <ArrowRight className="h-5 w-5 text-blue-500 group-hover:text-white transition-colors" />
              </span>
            </Link>
          </div>

          {/* Right content - Image collage */}
          <div className="w-full md:w-[60%] h-full relative mt-8 md:mt-0">
            <div className="relative h-full w-full">
              <Image
                src="/hero3.png"
                alt="Payment solutions collage"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
