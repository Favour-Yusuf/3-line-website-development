import Image from "next/image"

const StatsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEF3FF] py-16">
      {/* Background geometric shapes */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* $7 Billion */}
            <div className="text-center md:text-left px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A1A4A]">$7 Billion</h3>
              <p className="text-sm text-gray-600">processes Daily</p>
            </div>

            {/* 180,000+ SMEs */}
            <div className="text-center md:text-left px-4 pt-4 md:pt-0">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A1A4A]">180,000+ SMEs</h3>
              <p className="text-sm text-gray-600">SMEs empowered through our partners</p>
            </div>

            {/* 20,000+ */}
            <div className="text-center md:text-left px-4 pt-4 md:pt-0">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A1A4A]">20,000+</h3>
              <p className="text-sm text-gray-600">active terminals empowered through our partners</p>
            </div>

            {/* 300+ */}
            <div className="text-center md:text-left px-4 pt-4 md:pt-0">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A1A4A]">300+</h3>
              <p className="text-sm text-gray-600">financial institution empowered through our partners</p>
            </div>

            {/* 99.9% uptime */}
            <div className="text-center md:text-left px-4 pt-4 md:pt-0">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A1A4A]">99.9% uptime,</h3>
              <p className="text-sm text-blue-500">so your business never stops!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
