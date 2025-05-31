import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    solution: "",
    launchDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSolutionChange = (solution: string) => {
    setFormData({ ...formData, solution });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
  };

  return (
    <>
      {/* MOBILE VIEW FORM – visible only on small screens */}
      <section id="contact-form-mobile" className="block md:hidden bg-white py-6 px-4 rounded-2xl max-w-md mx-auto shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-black">What’s your name?</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Let’s keep this personal"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-black">What’s the best email to reach you at?</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="So we can send helpful details."
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-black">Got a phone number?</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Makes it easier to connect."
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="solution" className="text-sm font-medium text-black">Which of our solutions interests you?</label>
            <p className="text-xs text-gray-500 mt-1 mb-2">Choose one so we can assist you better.</p>
            <select
              id="solution"
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Gravity Lite">Gravity Lite</option>
              <option value="Gravity ENT">Gravity ENT</option>
              <option value="Medusa Merchant">Medusa Merchant</option>
              <option value="Payment APIs">Payment APIs</option>
              <option value="Bespoke/Other">Bespoke/Others</option>
            </select>
          </div>

          <div>
            <label htmlFor="launchDate" className="text-sm font-medium text-black">When do you plan to launch?</label>
            <input
              type="text"
              id="launchDate"
              name="launchDate"
              placeholder="A rough idea is great!"
              value={formData.launchDate}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-2">
            <h3 className="font-medium text-black text-base">Let’s Make Payments Work for You</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              By clicking below, you agree to 3Line’s Terms & Conditions and Privacy Policy.
            </p>
            <button
              type="submit"
              className="w-full bg-[#4096FB] text-white font-medium py-3 rounded-full flex justify-center items-center gap-2 shadow-md hover:bg-blue-600 transition"
            >
              Send message
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </section>

      {/* DESKTOP VIEW FORM – visible only on medium and large screens */}
      <section id="contact-form-desktop" className="hidden md:block py-12 px-4 bg-[#EEF3FF]">
        <div className="container mx-auto">
          <div className="bg-[#111B41] rounded-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 h-full w-1/2">
              <Image
                src="/contact-us-image4.png"
                alt=""
                fill
                className="object-contain object-right opacity-30"
              />
            </div>

            <div className="bg-[#EEF3FF] pl-8 md:pl-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm order-2 md:order-1">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">What's your name?</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Let's keep this personal"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">What's the best email to reach you at?</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="So we can send helpful details"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Got a phone number?</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Make it easier to connect"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Solution Options */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Which of our solutions interests you?</label>
                      <p className="text-xs text-gray-500 mb-2">Choose one so we can assist you better.</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["Gravity Lite", "Gravity ENT", "Medusa Merchant", "Payment APIs", "BespokeOffers"].map(option => (
                          <div
                            key={option}
                            className="border border-gray-300 rounded-md p-3 flex items-center cursor-pointer"
                            onClick={() => handleSolutionChange(option)}
                          >
                            <div className={`h-4 w-4 rounded-full border ${formData.solution === option ? "border-blue-500" : "border-gray-300"} mr-2 flex items-center justify-center`}>
                              {formData.solution === option && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
                            </div>
                            <span className="text-sm">{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Launch Date */}
                    <div>
                      <label htmlFor="launchDate" className="block text-sm font-medium text-gray-700 mb-1">When do you plan to launch?</label>
                      <input
                        type="text"
                        id="launchDate"
                        name="launchDate"
                        value={formData.launchDate}
                        onChange={handleChange}
                        placeholder="A rough idea is great!"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* CTA */}
                    <div>
                      <h3 className="font-medium mb-2">Let's Make Payments Work for You</h3>
                      <p className="text-xs text-gray-500 mb-4">
                        By clicking below, you agree to 3Line's Terms & Conditions and Privacy Policy.
                      </p>
                      <button
                        type="submit"
                        className="w-full bg-[#4096FB] text-white py-3 px-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        Send message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </div>

                {/* Right side image */}
                <div className="relative order-1 md:order-2">
                  <div className="absolute top-0 right-0 w-[70%] h-[90%] rounded-tl-[50px] overflow-hidden">
                    <Image src="/contact_us_form.png" alt="Market vendor" fill className="object-cover" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
