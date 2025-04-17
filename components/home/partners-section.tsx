import Image from "next/image"

const PartnersSection = () => {
  const partners = [
    { name: "Interswitch", logo: "/interswitch.png", width: 120, height: 40 },
    { name: "Union Bank", logo: "/union_bank.png", width: 120, height: 40 },
    { name: "Access Bank", logo: "/access_bank.png", width: 120, height: 40 },
    { name: "TAJ Bank", logo: "/taj.png", width: 120, height: 40 },
    { name: "UBA", logo: "/uba.png", width: 120, height: 40 },
    { name: "Zenith", logo: "/zenith.png", width: 80, height: 40 },
    { name: "Alerzo", logo: "/alerzo.png", width: 100, height: 40 },
    { name: "NIBSS", logo: "/nibss.png", width: 120, height: 40 },
    { name: "Fidelity", logo: "/fidelity.png", width: 120, height: 40 },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-[#EEF3FF] py-12">
      {/* Background geometric shapes - reusing the same background */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="transition-all duration-300 hover:opacity-80">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} Logo`}
                width={partner.width}
                height={partner.height}
                className="h-8 md:h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
