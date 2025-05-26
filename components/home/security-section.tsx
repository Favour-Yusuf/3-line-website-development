
import Image from "next/image"

export default function SecuritySection() {
  return (
  <div className="w-full flex justify-center items-center">
      <section className="relative bg-[#3B82F6] overflow-hidden px-[25px] my-[20px] w-[95%] rounded-[15px]">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image src="/security_bg_image.png" alt="Background pattern" fill className="object-cover" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Text Content - Full width on mobile, left side on desktop */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
              Your security,
              <br className="md:hidden" /> our priority
            </h2>
            <p className="text-white text-sm md:text-base max-w-md">
              At 3Line, we take security seriously. Your transactions and data are protected by the highest standards in
              the industry.
            </p>
          </div>

          {/* Compliance Card - Below text on mobile, right side on desktop */}
          <div className="md:w-1/2 md:flex md:justify-end">
            <div className="bg-white rounded-lg px-[40px] py-[30px] ">
              <h3 className="font-bold text-lg mb-[25px]">Our Compliance</h3>
              <div className="flex justify-between items-center">
                <Image src="/pci.png" alt="PCI DSS Compliant" className="mx-[15px]" width={80} height={40} />
                <Image src="/arm.png" alt="Nigeria Security" className="mx-[15px]" width={60} height={60} />
                <Image src="/iso.png" alt="ISO Certified" className="mx-[15px]" width={60} height={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
