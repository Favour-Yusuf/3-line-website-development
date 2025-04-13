const StatsSection = () => {
    return (
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">$7 Billion</h3>
              <p className="text-sm text-gray-600">Transaction volume</p>
            </div>
  
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">100,000+ SMEs</h3>
              <p className="text-sm text-gray-600">Supported across Africa</p>
            </div>
  
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">20,000+</h3>
              <p className="text-sm text-gray-600">Financial institutions and payment partners</p>
            </div>
  
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">99.9% uptime</h3>
              <p className="text-sm text-gray-600">Reliable and consistent service throughout our network</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default StatsSection
  