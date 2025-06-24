// components/PaymentFeatures.tsx

export default function PaymentFeatures() {
  return (
    <section className="bg-[#f5f8ff] md:ml-8 py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Customizable Payment APIs
      </h2>
      <p className="mt-2 text-gray-600 max-w-xl">
        Integrate fast, reliable, and secure payment processing into your
        existing platforms with our API suite.
      </p>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <div className="mt-8 space-y-4">
            <h3 className="font-semibold text-[20px] text-gray-900">
              Key Features
            </h3>

            {[
              {
                title: "Flexible & Scalable",
                desc: "Build solutions that grow with your business.",
              },
              {
                title: "Real-Time Transaction Processing",
                desc: "Deliver fast, reliable payments every time.",
              },
              {
                title: "Seamless Integration",
                desc: "Works effortlessly with your existing systems.",
              },
              {
                title: "Developer-Friendly Documentation",
                desc: "Get started quickly with easy-to-use guides.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
              >
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Who it’s for */}
        <div className="border-l border-blue-200 pl-6">
          <h3 className=" font-semibold text-[20px] text-gray-900">
            Who it’s for
          </h3>

          {[
            {
              number: "1.",
              desc: "Banks enhancing their digital banking infrastructure.",
            },
            {
              number: "2.",
              desc: "Fintechs building innovative payment solutions.",
            },
            {
              number: "3.",
              desc: "Enterprises looking for seamless payment integration.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md shadow-sm p-5 mb-4 border border-gray-200"
            >
              <p className="text-blue-600 font-bold text-lg">{item.number}</p>
              <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
