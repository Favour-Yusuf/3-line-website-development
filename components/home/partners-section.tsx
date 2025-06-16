"use client"
import Image from "next/image"

const PartnersSection = () => {
  const partners = [
    { name: "Interswitch", logo: "/interswitch.png", width: 100 },
    { name: "Union Bank", logo: "/union_bank.png", width: 100 },
    { name: "Access Bank", logo: "/access_bank.png", width: 100 },
    { name: "TAJ Bank", logo: "/taj.png", width: 80 },
    { name: "UBA", logo: "/uba.png", width: 80 },
    { name: "Zenith", logo: "/zenith.png", width: 80 },
    { name: "Alerzo", logo: "/alerzo_main.png", width: 80 },
    { name: "NIBSS", logo: "/nibss.png", width: 80 },
    { name: "Fidelity", logo: "/fidelity.png", width: 100 },
    { name: "Stanbic IBTC", logo: "/stanbic_ibtc.png", width: 120 },
    { name: "Sterling Bank", logo: "/sterling_bank.png", width: 100 },
    { name: "Optimus Bank", logo: "/optimusbank.png", width: 100 },
    { name: "Parralex", logo: "/parralex_logo.png", width: 100 },
    { name: "Providus Bank", logo: "/providus_bank.png", width: 120 },
    { name: "Wema Bank", logo: "/wema_bank.png", width: 100 },
    { name: "PalmPay", logo: "/palmpay.png", width: 100 },
    { name: "NowNow", logo: "/nownow.JPG", width: 80 },
    { name: "Hydrogen", logo: "/hydrogen.png", width: 100 },
    { name: "UP Unified Payments", logo: "/up_payments.png", width: 120 },
    { name: "Standard Chartered", logo: "/standard_chartered.png", width: 120 },
    { name: "OPay", logo: "/opay.png", width: 80 },
  ]

  return (
    <div className="w-full bg-[#F5F5F5] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Mobile Layout - Exactly like the image */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-0 bg-white border border-gray-200">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white border-r border-b border-gray-200 min-h-[80px] last-in-row:border-r-0"
                style={{
                  borderRight: (index + 1) % 3 === 0 ? "none" : "1px solid #e5e7eb",
                }}
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

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-0 bg-white border border-gray-200">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white border-r border-b border-gray-200 min-h-[100px]"
                style={{
                  borderRight: (index + 1) % 6 === 0 ? "none" : "1px solid #e5e7eb",
                }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={80}
                  height={40}
                  className="max-w-full max-h-[40px] object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
