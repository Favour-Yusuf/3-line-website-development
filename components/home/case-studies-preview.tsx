"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

type CaseStudy = {
  _id: string
  title: string
  slug: { current: string }
  coverImage: any
  logo: any
  date: string
}

const CaseStudiesPreview = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSliderMode, setIsSliderMode] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const data: CaseStudy[] = await client.fetch(`
        *[_type == "caseStudy"] | order(date desc)[0..5] {
          _id,
          title,
          slug,
          coverImage,
          logo,
          date
        }
      `)
      setCaseStudies(data)
    }
    fetchCaseStudies()
  }, [])

  // Responsive slider toggle
  useEffect(() => {
    const checkScreenSize = () => setIsSliderMode(window.innerWidth < 1024)
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Nothing to show
  if (caseStudies.length === 0) return null

  return (
    <section className="relative w-full overflow-hidden bg-[#EEF3FF] py-16 md:px-[30px]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1A4A] font-grotesk">
            Case studies
          </h2>
          <Link
            href="/case-study"
            className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium"
          >
            <span className=" text-[#000066]">See more</span>
            <ArrowRight className="h-4 w-4 ml-1 text-[#000066]" />
          </Link>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study._id} study={study} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden relative">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {caseStudies.map((study) => (
              <div key={study._id} className="w-full flex-shrink-0 px-2">
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image
          src={urlFor(study.coverImage).url()}
          alt={study.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          {study.logo && (
            <div className="h-8 w-20 relative">
              <Image
                src={urlFor(study.logo).url()}
                alt={`${study.title} logo`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#0A1A4A]">
          {study.title}
        </h3>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500 text-sm">
            {new Date(study.date).toLocaleDateString()}
          </p>
          <Link
            href={`/case-study/${study.slug.current}`}
            className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium"
          >
            <span className="mr-2">Read case study</span>
            <span className="bg-blue-500 rounded-full p-1">
              <ArrowRight className="h-4 w-4 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesPreview
