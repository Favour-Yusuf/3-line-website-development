import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <div className="text-sm uppercase mb-2">Contact Us</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Let's Talk</h1>
              <p className="text-gray-300 mb-8 max-w-lg">
                Whether you have a question, need support, or want to explore our solutions, we're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">inquiries@3line.com</p>
                </div>
                <Link href="mailto:inquiries@3line.com" className="ml-auto text-blue-600">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+234 800 300 4000</p>
                </div>
                <Link href="tel:+2348003004000" className="ml-auto text-blue-600">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">7A Idejo St, Victoria Island, Lagos 101241, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-blue-500 rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Get in touch!</h2>
              <p className="mb-6">We're just a message away...</p>
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-full transition-colors"
              >
                Send us a message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Start Building Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-[#0A1A4A] rounded-xl overflow-hidden p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-white">
                <div className="text-sm uppercase mb-2">Get Started</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building and Growing with 3Line</h2>
                <p className="text-gray-300 mb-4">
                  Tell us about your project, and we'll help you find the right solution.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      What's your name?
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Let's keep this personal"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      What's the best email to reach you at?
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="So we can send helpful details"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Got a phone number?
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Make it easier to connect"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Which of our solutions interests you?
                    </label>
                    <p className="text-xs text-gray-500 mb-2">Choose one so we can assist you better.</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border border-gray-300 rounded-md p-3 flex items-center">
                        <div className="h-4 w-4 rounded-full border border-blue-500 mr-2 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-sm">Gravity Lite</span>
                      </div>
                      <div className="border border-gray-300 rounded-md p-3 flex items-center">
                        <div className="h-4 w-4 rounded-full border border-gray-300 mr-2"></div>
                        <span className="text-sm">Gravity ENT</span>
                      </div>
                      <div className="border border-gray-300 rounded-md p-3 flex items-center">
                        <div className="h-4 w-4 rounded-full border border-gray-300 mr-2"></div>
                        <span className="text-sm">Medusa Merchant</span>
                      </div>
                      <div className="border border-gray-300 rounded-md p-3 flex items-center">
                        <div className="h-4 w-4 rounded-full border border-gray-300 mr-2"></div>
                        <span className="text-sm">Payment APIs</span>
                      </div>
                      <div className="border border-gray-300 rounded-md p-3 flex items-center">
                        <div className="h-4 w-4 rounded-full border border-gray-300 mr-2"></div>
                        <span className="text-sm">BespokOffers</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="launch" className="block text-sm font-medium text-gray-700 mb-1">
                      When do you plan to launch?
                    </label>
                    <input
                      type="text"
                      id="launch"
                      placeholder="A rough idea is great!"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Let's Make Payments Work for You</h3>
                    <p className="text-xs text-gray-500 mb-4">
                      By clicking below, you agree to 3Line's Terms & Conditions and Privacy Policy.
                    </p>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Send message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
