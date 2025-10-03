// app/faq/page.tsx
import FAQ from "@/components/FAQ"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { faqQuery } from "@/sanity/lib/queries"

export const revalidate = 60

export default async function FaqPage() {
  const data = await client.fetch(faqQuery)
  const faqData = data?.sections ?? []

  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      <section className="relative overflow-hidden text-white md:pt-[105px] rounded-[15px] md:mt-0 mt-[70px] md:flex w-full justify-center items-center">
        <div className="h-[455px] px-[20px] mt-[30px] w-[93%] mx-auto ml-[20px] md:h-[400px] lg:mt-0 md:px-[70px] md:ml-[50px] py-2 md:py-6 relative md:bg-[#111B41] bg-[#000066] rounded-[15px]">
          <div className="max-w-full md:max-w-3xl py-12 md:py-20 relative z-10 pr-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Got Questions? <br />
              We’ve Got Answers...
            </h1>
            <p className="text-gray-300 md:text-gray-300 mb-8 md:max-w-lg text-[16px] md:text-base">
              Here are some of the most common questions we get about our
              products, services, and processes.
            </p>
          </div>

          {/* Desktop image */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
            <Image
              src="/contact-us-image3.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Mobile image */}
          <div className="block md:hidden absolute right-0 top-0 h-full w-[320px]">
            <Image
              src="/contactus_mobile_image.png"
              alt="Mobile Decoration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <FAQ faqData={faqData} />
    </main>
  )
}
