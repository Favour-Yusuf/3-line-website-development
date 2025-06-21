import Image from "next/image"

export default function WhoWeServePageMobile() {
  return (
    <div className="min-h-screen bg-[#000066] relative overflow-hidden px-4 pt-16 pb-10 rounded-2xl  ">
      {/* 📌 Background Image */}
      <Image
        src="/map2_mobile.png"
        alt="Who we serve background graphic"
        fill
        priority
        className="object-cover object-top rounded-b-2xl z-0"
      />

      {/* 📌 Text Content */}
      <div className="relative z-10 max-w-sm mx-auto space-y-6">
        <div>
          <h1 className="text-white text-4xl font-bold leading-snug">Who we serve</h1>
          <p className="text-white/80 text-sm leading-relaxed mt-2">
            We help financial institutions, businesses, and organizations deliver seamless payment and banking services.
          </p>
        </div>
<div className="w-full  pt-[200px] flex justify-end items-end">
<p className="text-white/70 text-sm leading-relaxed   text-left w-[70%] ">
          Whether it’s enabling seamless payments, reaching more people, or simplifying transactions <span className="font-bold text-white"> Our solutions help
          you serve your customers and communities efficiently.</span>
        </p>
</div>
       
      </div>
    </div>
  )
}
