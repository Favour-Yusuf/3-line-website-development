import React from 'react'
import Image from 'next/image'

const PressPage = () => {
   const posts = [
    { tag: 'Business growth', tagColor: 'bg-blue-100 text-blue-600' },
    { tag: 'Product update', tagColor: 'bg-green-100 text-green-600' },
    { tag: 'Inside the line', tagColor: 'bg-teal-100 text-teal-600' },
    { tag: 'Business growth', tagColor: 'bg-blue-100 text-blue-600' },
    { tag: 'Product update', tagColor: 'bg-green-100 text-green-600' },
    { tag: 'Inside the line', tagColor: 'bg-teal-100 text-teal-600' },
  ];
 return (
     <main className="min-h-screen pb-4 bg-[#EEF3FF]" >
       {/* Hero */}
         <section className="relative overflow-hidden">
         <div className="container mx-auto px-4 py-8 md:py-12">
           <div className="relative z-10 bg-[#0A1A4A] rounded-xl overflow-hidden">
             <div className="p-8 md:p-12 text-white">
               <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Press</h1>
               <p className="text-gray-300 mb-8 max-w-lg">
                We pride ourselves in making notable impact.
Here are what others think about us at 3line and
our work so far.
               </p>
             </div>
           </div>
         </div>
       </section>
 
           {/* Top Tabs */}
       <div className=" px-4 py-3 flex flex-wrap gap-4 border-b">
         {['All','Product update', 'Inside Work', 'Business growth', 'Real stories', 'Design Engineering', 'Company Culture'].map((tab, idx) => (
           <button key={idx} className="text-sm px-3 font-bold bg-white rounded-sm hover:text-blue-600 whitespace-nowrap">{tab}</button>
         ))}
       </div>
 
      {/* Blog Section */}
  <div className="px-4 mt-6 max-w-7xl mx-auto">
       <div className="flex flex-col lg:flex-row gap-6">
         {/* Main Blog Post */}
         <div className="flex-1">
           <div className="bg-white rounded-xl overflow-hidden shadow-sm">
             <div className="relative w-full h-64 lg:h-[650px]">
               <Image
                 src="/imageproduct.png"
                 alt="Main Blog"
                 fill
                 className="object-cover"
                 sizes="(max-width: 1024px) 100vw, 50vw"
               />
             </div>
             <div className="p-6">
               <span className="text-xs uppercase text-blue-600 font-semibold">
                 Product update
               </span>
               <h2 className="text-xl font-bold mt-2">
                 This is the title of this blog post by a member of staff of 3line
               </h2>
               <p className="text-sm text-gray-500 mt-4">
                 An expanded explanation of the topic about aimed at giving a brief
                 summary of what the blog post/article is all about
               </p>
               <p className="text-xs text-gray-400 mt-2">Jan 31, 2025</p>
             </div>
           </div>
         </div>
 
         {/* Side Blog Posts */}
         <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 scrollbar-hide">
           {[1, 2, 3].map((item, i) => (
             <div
               key={i}
               className="min-w-[250px] lg:min-w-0 bg-white rounded-xl overflow-hidden shadow-sm flex-shrink-0"
             >
               <div className="relative w-full h-40">
                 <Image
                   src="/imageproduct.png"
                   alt="Small Blog"
                   fill
                   className="object-cover"
                   sizes="(max-width: 1024px) 250px, 100vw"
                 />
               </div>
               <div className="p-4">
                 <span className="text-xs uppercase text-green-600 font-semibold">
                   {['Business growth', 'Design & engineering', 'Company news'][i]}
                 </span>
                 <h3 className="text-sm font-bold mt-2">
                   This is the title of this blog post by a member of staff of 3line
                 </h3>
                 <p className="text-xs text-gray-400 mt-2">Jan 31, 2025</p>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
      <div className="px-4 mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
       {posts.map((post, index) => (
         <div
           key={index}
           className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col"
         >
           {/* Blog Image */}
           <div className="relative w-full h-72">
             <Image
               src="/person1.png"
               alt="Vertical Blog"
               fill
               className="object-cover"
               sizes="(max-width: 1024px) 100vw, 33vw"
               quality={100}
             />
           </div>
 
           {/* Content */}
           <div className="p-4 flex flex-col flex-1">
             {/* Author */}
             <div className="flex items-center space-x-2">
               <div className="relative w-8 h-8">
                 <Image
                   src="/charis.png"
                   alt="Author"
                   fill
                   className="rounded-full object-cover"
                   sizes="32px"
                   quality={100}
                 />
               </div>
               <span className="text-sm font-semibold text-gray-700">
                 Mfonobong Charis
               </span>
             </div>
 
             {/* Tag */}
             <div className="mt-4">
               <span
                 className={`text-xs font-semibold px-2 py-1 rounded ${post.tagColor}`}
               >
                 {post.tag}
               </span>
             </div>
 
             {/* Title */}
             <h3 className="text-base font-bold mt-2">
               This is the title of this blog post by a member of staff of 3line
             </h3>
 
             {/* Description */}
             <p className="text-sm text-gray-500 mt-2">
               An expanded explanation of the of the topic about aimed at giving a brief
               summary of what the blog post/article is all about
             </p>
 
             {/* Date */}
             <p className="text-xs text-gray-400 mt-4">Jan 31, 2025</p>
           </div>
         </div>
       ))}
     </div>
 
       {/* Subscription Form */}
      <div className="px-8 mt-6 mb-4">
       <div className="bg-white rounded-xl overflow-hidden shadow-sm max-w-6xl mx-auto">
         {/* Top Section */}
         <div className="flex flex-col lg:flex-row justify-between gap-8 p-8">
           {/* Text Content */}
           <div className="flex-1">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
               Subscribe to get updates that matter.
             </h2>
             <p className="text-sm text-gray-500 mt-2">
               Stay informed on payments, business growth, and 3Line news right in your inbox!
             </p>
           </div>
 
           {/* Email Input */}
           <div className="w-full lg:max-w-sm">
             <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
               Email
             </label>
             <input
               type="email"
               id="email"
               placeholder="What’s your email?"
               className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
           </div>
         </div>
 
         {/* Bottom CTA Section */}
         <div className="bg-blue-200 px-8 py-6 flex justify-end items-center rounded-b-xl relative">
           <button className="flex items-center gap-2 text-xl font-semibold text-[#000D59]  px-6 py-2 rounded-full  hover:bg-white transition">
             Subscribe
             <span className="relative w-11 h-11">
               <Image
                 src="/arrow_footer.png" // Replace with actual path
                 alt="Arrow Icon"
                 fill
                 className="object-contain"
               />
             </span>
           </button>
         </div>
       </div>
     </div>
 
     </main>
   )
}

export default PressPage