import Image from "next/image"

const SecuritySection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row bg-blue-500 rounded-xl overflow-hidden">
          <div className="w-full md:w-2/3 p-6 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your security, our priority</h2>
            <p className="text-blue-100 mb-6">
              At 3Line, for your security assurance, our compliance and data are certified to the highest standards in
              the industry.
            </p>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-blue-900 font-semibold mb-3">Our Compliance</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 p-2 rounded-md">
                  <Image src="/pci.png" alt="Compliance Logo" width={40} height={40} />
                </div>
                <div className="bg-gray-100 p-2 rounded-md">
                  <Image src="/arm.png" alt="Compliance Logo" width={40} height={40} />
                </div>
                <div className="bg-gray-100 p-2 rounded-md">
                  <Image src="/iso.png" alt="Compliance Logo" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecuritySection
