"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"

const PartnersSection = () => {
  const partners = [
    { name: "Interswitch", logo: "/interswitch.png", width: 120 },
    { name: "Union Bank", logo: "/union_bank.png", width: 120 },
    { name: "Access Bank", logo: "/access_bank.png", width: 120 },
    { name: "TAJ Bank", logo: "/taj.png", width: 120 },
    { name: "UBA", logo: "/uba.png", width: 120 },
    { name: "Zenith", logo: "/zenith.png", width: 80 },
    { name: "Alerzo", logo: "/alerzo_main.png", width: 100 },
    { name: "NIBSS", logo: "/nibss.png", width: 120 },
    { name: "Fidelity", logo: "/fidelity.png", width: 120 },
    { name: "Stanbic", logo: "/stanbic.png", width: 120 },
    { name: "Sterling", logo: "/sterling_bank.png", width: 120 },
    { name: "Optimus", logo: "/optimusbank.png", width: 120 },
    { name: "Parralex", logo: "/parralex_logo.png", width: 120 },
    { name: "Providus", logo: "/providus_bank.png", width: 120 },
    { name: "Wema", logo: "/wema.png", width: 120 },
    { name: "PalmPay", logo: "/palmpay.png", width: 120 },
    { name: "NowNow", logo: "/nownow.JPG", width: 120 },
    { name: "Hydrogen", logo: "/hydrogen.png", width: 120 },
    { name: "UP", logo: "/up.png", width: 120 },
    { name: "Standard Chartered", logo: "/standard_chartered.png", width: 120 },
    { name: "Opay", logo: "/opay.png", width: 120 },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollingPartners = [...partners, ...partners]

  useEffect(() => {
    const scroller = scrollRef.current
    if (!scroller) return

    let scrollAmount = 0
    const speed = 0.5

    const step = () => {
      scrollAmount += speed
      if (scrollAmount >= scroller.scrollWidth / 2) {
        scrollAmount = 0
      }
      scroller.scrollLeft = scrollAmount
      requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [])

  return (
    <div className="w-full py-8">
      {/* ✅ Mobile Layout - 4 column grid */}
      <div className="block md:hidden bg-[#F5F5F5] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-x-3 gap-y-4 bg-white py-4 px-2 rounded-lg">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-2"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={60}
                  height={30}
                  className="max-w-full max-h-[30px] object-contain filter grayscale opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Desktop Layout - Slider (unchanged) */}
      <div className="hidden md:block overflow-hidden bg-white shadow-sm rounded-xl mx-4 py-8">
        <div ref={scrollRef} className="flex whitespace-nowrap overflow-hidden">
          {scrollingPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-4"
              style={{ width: partner.width }}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={partner.width}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
