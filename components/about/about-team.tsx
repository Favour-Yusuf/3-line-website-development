import Image from "next/image"

const AboutTeam = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Leadership Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-64">
              <Image src="/placeholder.svg?height=300&width=300" alt="CEO" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-blue-600 text-sm mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                With over 15 years of experience in fintech, John leads our vision and strategic direction.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-64">
              <Image src="/placeholder.svg?height=300&width=300" alt="CTO" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-blue-600 text-sm mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Jane oversees our technology infrastructure and leads our product innovation initiatives.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-64">
              <Image src="/placeholder.svg?height=300&width=300" alt="COO" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Michael Johnson</h3>
              <p className="text-blue-600 text-sm mb-2">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm">
                Michael ensures our operations run smoothly and efficiently across all markets.
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-64">
              <Image src="/placeholder.svg?height=300&width=300" alt="CFO" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Sarah Williams</h3>
              <p className="text-blue-600 text-sm mb-2">Chief Financial Officer</p>
              <p className="text-gray-600 text-sm">
                Sarah manages our financial strategy and ensures sustainable growth for the company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam
