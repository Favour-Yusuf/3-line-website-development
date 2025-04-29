import FAQ from '@/components/FAQ'
import React from 'react'

const FaqPage = () => {
  return (
    <main  className="min-h-screen bg-[#EEF3FF]">
       <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
            <div className="text-sm uppercase mb-2">Our Blog</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Got Questions? <br />
              We’ve Got Answers...</h1>
              <p className="text-gray-300 mb-8 max-w-lg">
              Here are some of the most common questions we get about our products, services, and processes.
              </p>
            </div>
          </div>
        </div>
      </section>
            <FAQ/>
    </main>
  )
}

export default FaqPage