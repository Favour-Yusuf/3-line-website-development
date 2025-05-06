import React from 'react'

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-[#EEF3FF]" >
      {/* Hero */}
        <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <div className="text-sm uppercase mb-2">Our Blog</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">3Line Blog</h1>
              <p className="text-gray-300 mb-8 max-w-lg">
              Actionable insights, real-world stories, and timely updates, curated for businesses, financial institutions, and payment professionals. Stay informed, stay ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Top Tabs */}
      <div className="bg-white px-4 py-3 flex flex-wrap gap-4 justify-center border-b">
        {['Product update', 'Inside Work', 'Business growth', 'Real stories', 'Design Engineering', 'Company Culture'].map((tab, idx) => (
          <button key={idx} className="text-sm text-gray-700 hover:text-blue-600 whitespace-nowrap">{tab}</button>
        ))}
      </div>

      {/* Main Blog Post */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
          <img src="/images/main-blog.jpg" alt="Main Blog" className="w-full lg:w-1/2 object-cover" />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase text-blue-600 font-semibold">Product update</span>
              <h2 className="text-xl font-bold mt-2">This is the title of this blog post by a member of staff of 3line</h2>
              <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Small Posts */}
      <div className="px-4 mt-6">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {[1, 2, 3].map((item) => (
            <div key={item} className="min-w-[250px] bg-white rounded-xl overflow-hidden shadow-sm flex-shrink-0">
              <img src="/images/small-blog.jpg" alt="Small Blog" className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-xs uppercase text-green-600 font-semibold">Real stories</span>
                <h3 className="text-sm font-bold mt-2">This is the title of this blog post by a member of staff of 3line</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Blog List */}
      <div className="px-4 mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img src="/images/vertical-blog.jpg" alt="Vertical Blog" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <img src="/images/author.jpg" alt="Author" className="w-8 h-8 rounded-full object-cover" />
                <span className="text-sm font-semibold text-gray-700">Author Name</span>
              </div>
              <h3 className="text-base font-bold mt-4">This is the title of this blog post by a member of staff of 3line</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Subscription Form */}
      <div className="px-4 mt-12">
        <div className="bg-white rounded-xl p-8 shadow-sm text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold">Subscribe to get updates that matter.</h2>
          <form className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm"
            />
            <button className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>

    </main>
  )
}

export default BlogPage