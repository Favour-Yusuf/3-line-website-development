"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const PartnersSection = () => {

  const partners = [
    { name: "Interswitch", logo: "/interswitch.png", width: 120 },
    { name: "Union Bank", logo: "/union_bank.png", width: 120 },
    { name: "Access Bank", logo: "/access_bank.png", width: 120 },
    { name: "upUnified Bank", logo: "https://res.cloudinary.com/dcuad6p9z/image/upload/v1755166807/upUnified_atxokl.png", width: 120 },
    { name: "TAJ Bank", logo: "/taj.png", width: 120 },
    { name: "UBA", logo: "/uba.png", width: 120 },
    { name: "Zenith", logo: "/zenith.png", width: 80 },
    { name: "Alerzo", logo: "/alerzo_main.png", width: 100 },
    { name: "NIBSS", logo: "/nibss.png", width: 120 },
    { name: "stanbic", logo: "/stanbic_ibtc.png", width: 120 },
    { name: "wema_bank", logo: "https://res.cloudinary.com/dcuad6p9z/image/upload/v1755166385/wema_bank_2_scaiu3.png", width: 120 },
    { name: "opay", logo: "/opay.png", width: 120 },
    { name: "Fidelity", logo: "/fidelity.png", width: 120 },
    { name: "Providus Bank", logo: "/providus_bank.png", width: 120 },
    { name: "standard_char", logo: "https://res.cloudinary.com/dcuad6p9z/image/upload/v1755166845/standard_chartered_bank_fc3zs4.png", width: 120 },
    { name: "Parralex", logo: "/parralex_logo.png", width: 120 },
    { name: "Sterling Bank", logo: "/sterling_bank.png", width: 120 },
    { name: "Optimus Bank", logo: "/optimusbank.png", width: 120 },
    { name: "NowNow", logo: "https://res.cloudinary.com/dcuad6p9z/image/upload/v1755166872/nownow_dwoguu.jpg", width: 120 },
    { name: "PalmPay", logo: "/palmpay.png", width: 120 },
   
  ]
   
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollingPartners = [...partners, ...partners];

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    let scrollAmount = 0;
    const speed = 0.5;

    const step = () => {
      scrollAmount += speed;
      if (scrollAmount >= scroller.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scroller.scrollLeft = scrollAmount;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  const Logo = ({ src, alt }: { src: string; alt: string }) => (
    <div className="flex items-center justify-center p-2">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={50}
        className="max-w-full max-h-[30px] object-contain filter grayscale opacity-80"
      />
    </div>
  );

  return (
    <div className="w-full py-8">
      <div className="block md:hidden  px-4">
        <div className="max-w-4xl mx-auto">
          <div className="py-6 px-4 rounded-lg space-y-4">
            {/* Row 1 - 3 logos */}
            <div className="grid grid-cols-3 gap-4">
              <Logo src="/interswitch.png" alt="Interswitch" />
              <Logo src="/union_bank.png" alt="Union Bank" />
              <Logo src="/access_bank.png" alt="Access" />
            </div>

            {/* Row 2 - 4 logos */}
            <div className="grid grid-cols-4 gap-4">
              <Logo src="/taj.png" alt="TAJ Bank" />
              <Logo src="/uba.png" alt="UBA" />
              <Logo src="/zenith.png" alt="Zenith" />
              <Logo src="/alerzo_main.png" alt="Alerzo" />
            </div>

            {/* Row 3 - 3 logos */}
            <div className="grid grid-cols-3 gap-4">
              <Logo src="/nibss.png" alt="NIBSS" />
              <Logo src="/fidelity.png" alt="Fidelity" />
              <Logo src="/stanbic.png" alt="Stanbic IBTC" />
            </div>

            {/* Row 4 - 3 logos */}
            <div className="grid grid-cols-3 gap-4">
              <Logo src="/sterling_bank.png" alt="Sterling" />
              <Logo src="/optimusbank.png" alt="Optimus Bank" />
              <Logo src="/parralex_logo.png" alt="Parallex" />
            </div>

            {/* Row 5 - 3 logos */}
            <div className="grid grid-cols-3 gap-4">
              <Logo src="/providus_bank.png" alt="Providus Bank" />
              <Logo src="https://res.cloudinary.com/dcuad6p9z/image/upload/v1755166385/wema_bank_2_scaiu3.png" alt="Wema Bank" />
              <Logo src="/palmpay.png" alt="PalmPay" />
            </div>

            {/* Row 6 - 3 logos */}
            <div className="grid grid-cols-3 gap-4">
              <Logo src="https://res.cloudinary.com/dcuad6p9z/image/upload/v1755166872/nownow_dwoguu.jpg" alt="NowNow" />
              <Logo src="https://res.cloudinary.com/dcuad6p9z/image/upload/v1755171107/Frame_26962_njsl9p.png" alt="Hydrogen" />
              <Logo src="https://res.cloudinary.com/dcuad6p9z/image/upload/v1755166807/upUnified_atxokl.png" alt="Unified Payments" />
            </div>

            {/* Row 7 - 2 logos */}
            <div className="grid grid-cols-2 gap-4">
              <Logo
                src="https://res.cloudinary.com/dcuad6p9z/image/upload/v1755166845/standard_chartered_bank_fc3zs4.png"
                alt="Standard Chartered"
              />
              <Logo src="/opay.png" alt="Opay" />
            </div>
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
  );
};

export default PartnersSection;
