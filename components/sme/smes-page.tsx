// app/(whatever)/smes/page.tsx  (or pages/smes.js — adapt for your router)
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"        // your sanity client
import { urlFor } from "@/sanity/lib/image"      // your image builder helper
import { smesPageQuery } from "@/sanity/lib/queries"

export const revalidate = 60 // optional ISR timing

export default async function SmesPage() {
  const data = await client.fetch(smesPageQuery)
  const products = data?.products ?? []

  return (
    <div className="min-h-screen flex flex-col md:pt-[50px]">
      <main className="flex-1">
        {/* Hero Section - KEEP AS IS (static) */}
       
        <section className="relative bg-[#EEF3FF] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sme-background.png"
              alt="Background pattern"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="container mx-auto px-6 md:px-8 py-8 md:py-12 relative z-10">
            <div className="bg-[#10142C] rounded-xl overflow-hidden mx-3 md:mx-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6  pl-8 md:pl-12">
                <div className="text-white pt-8">
                  <div className="inline-block text-[50px] bg-[#6be0f0] text-[#10142C] px-3 py- rounded-md font-bold mb-4 ">
                    SMEs
                  </div>
                  <div  style={{
    
      textShadow:
        '0px 10px 20px rgba(0,0,0,0.5), 0px 5px 10px rgba(0,0,0,0.3)',
    }} className="text-5xl text-headline md:text-6xl lg:text-[70px] font-bold text-white mb-6 leading-none mt-[10px]">
                    Empowering small &<br />
                    growing businesses
                  </div>
                  <p className="text-gray-300 mb-4 max-w-lg font-bold">
                    Running a business is no small feat, and managing payments should not add to the stress.
                  </p>
                  <p className="text-gray-400 mb-8 max-w-lg">
                    Our SME solutions help you simplify payments, streamline operations, and unlock new opportunities
                    for growth.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute top-0 right-0 w-[400px] h-[700px]">
                    <Image src="/sme-hero-image2.png" alt="Hero decoration" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div className="relative px-8 pb-8 md:px-12 md:pb-12">
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative h-40 md:h-[310px] rounded-lg overflow-hidden transform rotate-[-8deg] w-[900px] ml-[150px]">
                    <Image
                      src="/sme_main_hero.png"
                      alt="SME Solutions"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section - static heading kept */}
        <section className="py-12 px-6 md:px-8 bg-[#EEF3FF] relative">
          <div className="absolute inset-0 z-0">
            <Image src="/sme-background.png" alt="Background pattern" fill className="object-cover opacity-50" />
          </div>
          <div className="container mx-auto relative z-10">
            <h2 className="text-2xl md:text-5xl font-bold mb-8 text-[#10142C] mx-3 md:mx-4">
              SMEs Solutions developed <br /> with you in mind...
            </h2>

            {/* Now map over products (this replaces the 3 static blocks) */}
            {products.map((product: any, idx: any) => {
              const featuresSpanTwo = !!product.featuresSpanTwo
              // heights vary in your original; feel free to keep a consistent height or set per-product if you add it to schema
              const leftColHeight = featuresSpanTwo ? 'h-[600px]' : 'h-[570px]'

              return (
                <div key={product._key || idx} className="rounded-xl overflow-hidden shadow-sm mb-8 mx-3 md:mx-4">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Left column */}
                    <div className={`p-12 ${leftColHeight} bg-white relative`}>
                      <div className="hidden md:block absolute top-0 right-[-12px] h-full w-[0.5px] bg-blue-500"></div>

                      <div className="bg-[#10142C] text-white w-20 h-20 flex items-center justify-center rounded-lg mb-10">
                        <span className="text-4xl font-bold">{idx + 1}</span>
                      </div>

                      <h3 className="text-5xl font-bold mb-2 text-[#10142C]">{product.title}</h3>
                      <p className="text-2xl text-black mb-4 font-bold">{product.tagline}</p>
                      <p className="text-gray-600 mb-6">{product.description}</p>

                      <div className="w-[95%] absolute flex justify-end items-end">
                        <Link
                          href={product.ctaLink || '/contact-us'}
                          className="inline-flex items-center justify-center  text-[#000066] font-bold py-2 px-4 rounded-full transition-colors "
                        >
                          {product.ctaText || 'Get Started'}
                          <Image src="/sme_arrow.png" alt="arrow" width={60} height={60} />
                        </Link>
                      </div>
                    </div>

                    {/* Middle column - features */}
                    <div className={`p-8 border-r border-blue-500 bg-transparent ${featuresSpanTwo ? 'md:col-span-2' : ''}`}>
                      <h3 className="font-semibold mb-6 text-[#10142C] text-xl">Key features</h3>
                      <div className="space-y-4">
                        {product.features?.map((f: any) => (
                          <div key={f._key} className="bg-[#FFFFFF80] p-[15px] rounded-[15px] mb-[5px]">
                            <h4 className="font-bold text-[#10142C] text-[20px]">{f.title}</h4>
                            <p className="text-sm text-gray-600">{f.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right column - optional "Who it's for" */}
                    {
                      !featuresSpanTwo && (
                        <div className="p-8 bg-transparent">
                          <h3 className="font-semibold mb-4 text-[#10142C] text-[20px]">Who it's for</h3>
                          <div className="space-y-6">
                            {product.whoItsFor?.map((w: any, i: any) => (
                              <div key={i} className="bg-[#FFFFFF80] p-[20px] rounded-[15px] flex items-start gap-4">
                                {w.icon?.asset && (
                                  <div className="flex-shrink-0">
                                    <Image
                                      src={urlFor(w.icon).width(60).height(60).url()}
                                      alt={w.text || 'icon'}
                                      width={60}
                                      height={60}
                                    />
                                  </div>
                                )}
                                <div>
                                  <p className="text-[16px] text-gray-600">{w.text}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
