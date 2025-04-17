import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin } from "lucide-react"

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <div className="inline-block bg-[#00D2FF] text-[#0A1A4A] px-3 py-1 rounded-md font-medium mb-4">
                Our Team
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Who we are</h1>
              <p className="text-gray-300 mb-8 max-w-lg">
                At 3Line, we are more than a company, we are a team of innovators, problem-solvers, and financial
                inclusion specialists.
              </p>
            </div>
            <div className="grid grid-cols-7 gap-2 p-4">
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image src="/images/team-member-1.png" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image src="/images/team-member-2.png" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image src="/images/team-member-3.png" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image src="/images/team-member-4.png" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image src="/images/team-member-1.png" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image src="/images/team-member-2.png" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image src="/images/team-member-3.png" alt="Team Member" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-[#0A1A4A] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 9V15M9 12H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To become Africa's leading financial services provider, powering the continent's payments while ensuring
                financial inclusion for businesses, banks, and communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-[#0A1A4A] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 9V15M9 12H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To build innovative and reliable payment solutions that make everyday transactions simple, secure, and
                more accessible for businesses, communities, and individuals worldwide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Innovation</h4>
                  <p className="text-sm text-gray-600">
                    We constantly push boundaries to deliver cutting-edge solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Integrity</h4>
                  <p className="text-sm text-gray-600">We operate with transparency and honesty.</p>
                </div>
                <div>
                  <h4 className="font-medium">Inclusion</h4>
                  <p className="text-sm text-gray-600">We believe in financial access for all.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Meet our executive team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#0A1A4A] rounded-xl overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/team-member-1.png" alt="Femi Omogbenigun" fill className="object-cover" />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold">Femi Omogbenigun</h3>
                <p className="text-sm text-gray-300">CEO & Founder</p>
                <Link href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-[#0A1A4A] rounded-xl overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/team-member-2.png" alt="Chibueze Ukaegbu" fill className="object-cover" />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold">Chibueze Ukaegbu</h3>
                <p className="text-sm text-gray-300">Chief Technology Officer</p>
                <Link href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-[#0A1A4A] rounded-xl overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/team-member-3.png" alt="Donald Ozoalor" fill className="object-cover" />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold">Donald Ozoalor</h3>
                <p className="text-sm text-gray-300">Chief of Staff</p>
                <Link href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-[#0A1A4A] rounded-xl overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/team-member-4.png" alt="Kolawole Olajide" fill className="object-cover" />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold">Kolawole Olajide</h3>
                <p className="text-sm text-gray-300">Chief Product Officer</p>
                <Link href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leads */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our leads</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="bg-[#0A1A4A] rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/images/team-member-${(index % 4) + 1}.png`}
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-white">
                  <h3 className="text-sm font-semibold">Team Member</h3>
                  <p className="text-xs text-gray-300">Role Title</p>
                  <Link href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 mt-1 inline-block">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-[#0A1A4A] rounded-xl overflow-hidden p-6 md:p-12 relative">
            <div className="relative z-10 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Team</h2>
              <p className="text-gray-300 mb-6">
                We're an ambitious team shaping the future of payments in Africa. Join our expanding offices and join us
                in making financial access simpler for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">There are no current openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Engineering Manager</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Full-time
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Lagos
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
              >
                Apply
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Customer Care Agent</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Full-time
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Remote
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
              >
                Apply
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Customer Care Agent</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Part-time
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Hybrid
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
              >
                Apply
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
