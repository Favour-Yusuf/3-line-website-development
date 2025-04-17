const AboutStats = () => {
    return (
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Impact</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">$7 Billion</h3>
              <p className="text-gray-600">Transaction volume processed annually</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100,000+</h3>
              <p className="text-gray-600">SMEs supported across Africa</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20,000+</h3>
              <p className="text-gray-600">Financial institutions and payment partners</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</h3>
              <p className="text-gray-600">Uptime reliability</p>
            </div>
          </div>
  
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2016, 3Line was established with a vision to transform the payment landscape in Africa. We
              recognized the challenges faced by businesses and financial institutions in processing payments efficiently
              and securely.
            </p>
            <p className="text-gray-600 mb-4">
              Starting with a small team of passionate innovators, we developed our first payment solution that addressed
              the unique needs of the African market. Since then, we've grown exponentially, expanding our services across
              multiple countries and serving thousands of businesses.
            </p>
            <p className="text-gray-600">
              Today, 3Line is a leading payment infrastructure provider, trusted by major banks, financial institutions,
              and businesses of all sizes. Our commitment to innovation, security, and customer satisfaction remains at
              the core of everything we do.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  export default AboutStats
  