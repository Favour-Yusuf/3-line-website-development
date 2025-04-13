import Image from "next/image"

const PartnersSection = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Partner logos */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={`/placeholder.svg?height=40&width=${80 + item * 5}`}
                alt={`Partner ${item}`}
                width={80 + item * 5}
                height={40}
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
