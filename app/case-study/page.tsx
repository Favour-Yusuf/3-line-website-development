import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"


type CaseStudy = {
  _id: string
  title: string
  slug: { current: string }
  tag: string
  coverImage: any
  date: string
}

const CaseStudiespage = async () => {
  const data: CaseStudy[] = await client.fetch(`
    *[_type == "caseStudy"] | order(date desc) {
      _id,
      title,
      slug,
      tag,
      coverImage,
      date
    }
  `)


  return (
    <main className="min-h-screen bg-[#EEF3FF]">
 {/* Hero */}
 <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Case Studies</h1>
              <p className="text-gray-300 mb-8 max-w-lg">
              See how financial institutions have used 3Line’s solutions to expand, improve operations, serve more businesses and agents.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-8 md:py-12">
  <div className="max-w-md mx-auto md:max-w-6xl space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
    {data.map((item) => (
      <div key={item._id} className="rounded-2xl overflow-hidden shadow-lg">
        <div className="relative w-full h-48 md:h-64">
          <Image
            src={urlFor(item.coverImage).url()}
            alt={item.title}
            fill
            className="rounded-t-2xl object-cover"
          />
        </div>
        <div className="bg-white p-4 md:p-6">
          <div className="text-sm font-semibold text-blue-600 mb-2">
            {item.tag}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{new Date(item.date).toLocaleDateString()}</span>
            <Link
              href={`/case-study/${item.slug.current}`}
              className="flex items-center text-blue-600 font-semibold hover:underline"
            >
              Read case study
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    </main>
  )
}

export default CaseStudiespage