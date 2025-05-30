import Image from "next/image";

const StatsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEF3FF] py-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-6 md:hidden">
            {/* Row 1 */}
            <div className="flex justify-between gap-4 relative">
              <div className="flex-1 text-center font-grotesk text-headline text-[#000066]">
                <h3 className="text-2xl font-bold">₦7 Billion</h3>
                <p className="text-sm text-gray-600">processes Daily</p>
              </div>

              {/* Vertical Blue Line */}
              <div className="w-px bg-blue-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2" />

              <div className="flex-1 text-center font-grotesk text-headline text-[#000066]">
                <h3 className="text-2xl font-bold">180K+ SMEs</h3>
                <p className="text-sm text-gray-600">SMEs empowered through our partners</p>
              </div>
            </div>

            {/* Horizontal Blue Line */}
            <div className="h-px bg-blue-500 w-full" />

            {/* Row 2 */}
            <div className="flex justify-between gap-4 relative">
              <div className="flex-1 text-center font-grotesk text-headline text-[#000066]">
                <h3 className="text-2xl font-bold">20K+</h3>
                <p className="text-sm text-gray-600">active terminals empowered through our partners</p>
              </div>

              {/* Vertical Blue Line */}
              <div className="w-px bg-blue-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2" />

              <div className="flex-1 text-center font-grotesk text-headline text-[#000066]">
                <h3 className="text-2xl font-bold">300+</h3>
                <p className="text-sm text-gray-600">financial institution empowered through our partners</p>
              </div>
            </div>

            {/* Horizontal Blue Line */}
            <div className="h-px bg-blue-500 w-full" />

            {/* Row 3 */}
            <div className="text-center font-grotesk text-headline">
              <h3 className="text-2xl font-bold text-[#000066]">99.9% uptime,</h3>
              <p className="text-sm text-blue-500">so your business never stops!</p>
            </div>
          </div>

          {/* Desktop Layout (Unchanged) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 divide-y-0 md:divide-x divide-gray-200">
            <div className="text-center md:text-left px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#000066] font-grotesk text-headline">$7 Billion</h3>
              <p className="text-sm text-gray-600">processes Daily</p>
            </div>
            <div className="text-center md:text-left px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#000066] font-grotesk text-headline">180,000+ SMEs</h3>
              <p className="text-sm text-gray-600">SMEs empowered through our partners</p>
            </div>
            <div className="text-center md:text-left px-4 font-grotesk text-headline">
              <h3 className="text-2xl md:text-3xl font-bold text-[#000066]">20,000+</h3>
              <p className="text-sm text-gray-600">active terminals empowered through our partners</p>
            </div>
            <div className="text-center md:text-left px-4 font-grotesk text-headline">
              <h3 className="text-2xl md:text-3xl font-bold text-[#000066]">300+</h3>
              <p className="text-sm text-gray-600">financial institution empowered through our partners</p>
            </div>
            <div className="text-center md:text-left px-4 font-grotesk text-headline">
              <h3 className="text-2xl md:text-3xl font-bold text-[#000066]">99.9% uptime,</h3>
              <p className="text-sm text-blue-500">so your business never stops!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
