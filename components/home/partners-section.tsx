"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"
import "./partners.css" // Make sure to import the CSS file

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
    { name: "Providus Bank", logo: "/providus_bank.png", width: 120 },
    { name: "Parralex", logo: "/parralex_logo.png", width: 120 },
    { name: "Sterling Bank", logo: "/sterling_bank.png", width: 120 },
    { name: "Optimus Bank", logo: "/optimusbank.png", width: 120 },
    { name: "NowNow", logo: "/nownow.JPG", width: 120 },
    { name: "PalmPay", logo: "/palmpay.png", width: 120 },
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
    <div className="w-full overflow-hidden bg-white py-6 shadow-sm rounded-xl">
      <div ref={scrollRef} className="partners-scroll flex whitespace-nowrap">
        {scrollingPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-4"
            style={{ width: partner.width }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnersSection
