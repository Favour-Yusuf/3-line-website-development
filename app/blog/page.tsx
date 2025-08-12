"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Category, Post } from '../../types'; // Import the interfaces
import Link from "next/link";

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: true,
});

// Initialize image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryData: Category[] = await client.fetch(`*[_type == "category"]{
          _id,
          name,
          colorClass,
          pageTitle,
          description
        }`);
        setCategories(categoryData);

        // Fetch posts with joined data
        const postData: Post[] = await client.fetch(`*[_type == "post"]{
          _id,
          _type,
          title,
          slug,
          excerpt,
          mainImage,
          publishedAt,
          isFeatured,
          "author": author->{
            _id,
            name,
            image
          },
          "category": category->{
            _id,
            name,
            colorClass,
            pageTitle,
            description
          }
        } | order(publishedAt desc)`);
        
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Build category metadata dynamically
  const categoryMeta = categories.reduce((acc: Record<string, { title: string; sub: string }>, category) => {
    acc[category.name] = {
      title: category.pageTitle,
      sub: category.description
    };
    return acc;
  }, {});

  // Get featured posts
  const featuredPosts = posts.filter(post => post.isFeatured);
  const mainFeaturedPost = featuredPosts[0];
  const sideFeaturedPosts = featuredPosts.slice(1, 4);

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category?.name === selectedCategory);

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-[#EEF3FF] flex items-center justify-center">
        <p>Loading blog posts...</p>
      </main>
    );
  }

  return (
   <main className="min-h-screen pb-4 bg-[#EEF3FF]">
      {/* Hero Section - Same as before */}
     {/* Hero */}
      <section className="relative overflow-hidden text-white md:pt-[105px] rounded-[15px] md:mt-0 mt-[70px] md:flex w-full  justify-center items-center">
        <div className="h-[455px] px-[20px]  mt-[30px] w-[93%] mx-auto ml-[20px] md:h-[400px] lg:mt-0 md:px-[70px] md:ml-[50px] py-2 md:py-6 relative  md:bg-[#111B41] bg-[#000066] rounded-[15px] ">
          <div className="max-w-full md:max-w-3xl py-12 md:py-20 relative z-10 pr-4">
            <div className="md:text-[25px] md:mb-2 text-gray-400 mb-[20px] text-[18px]">
              Our Blog
            </div>
            <h1 className=" w-[240px] md:w-[80%] text-4xl leading-tight md:text-6xl font-bold mb-[20px] md:leading-tight">
              3Line Blog
            </h1>
            <p className="text-gray-300 md:text-gray-300 mb-8 md:max-w-lg text-[16px] md:text-base">
              Actionable insights, real-world stories, and timely updates,
              curated for businesses, financial institutions, and payment
              professionals. Stay informed, stay ahead.
            </p>
          </div>
 
          {/* Desktop image */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-1/2 ">
            <Image
              src="/contact-us-image3.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>
 
          {/* Mobile image */}
          <div className="block md:hidden absolute right-0 top-0 h-full w-[320px]">
            <Image
              src="/contactus_mobile_image.png"
              alt="Mobile Decoration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Top Tabs */}
      <div className="ml-[15px] mt-8 md:ml-[28px] mr-[15px] flex flex-wrap gap-4 border-b">
        {["All", ...categories.map(cat => cat.name)].map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(tab)}
            className={`text-[19px] px-3 font-bold md:h-[40px] rounded-sm whitespace-nowrap ${
              selectedCategory === tab
                ? "text-blue-600 bg-white"
                : "bg-white/80 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Blog Section */}
      <div className="px-4 mt-6 md:ml-8 max-w-7xl mx-auto">
        {selectedCategory === "All" ? (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Featured Post */}
            {mainFeaturedPost && (
              <div className="flex-1">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="relative w-full h-64 lg:h-[650px]">
                    <Image
                      src={urlFor(mainFeaturedPost.mainImage).url()}
                      alt={mainFeaturedPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <span 
                      className={`text-xs uppercase font-semibold px-2 py-1 rounded ${mainFeaturedPost.category?.colorClass}`}
                    >
                      {mainFeaturedPost.category?.name}
                    </span>
                    <h2 className="text-xl font-bold mt-2">
                      {mainFeaturedPost.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-4">
                      {mainFeaturedPost.excerpt}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(mainFeaturedPost.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Side Featured Posts */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 scrollbar-hide">
              {sideFeaturedPosts.map((post, i) => (
                <div
                  key={i}
                  className="min-w-[250px] lg:min-w-0 bg-white rounded-xl overflow-hidden shadow-sm flex-shrink-0"
                >
                  <div className="relative w-full h-40">
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 250px, 100vw"
                    />
                  </div>
                  <div className="p-4">
                    <span 
                      className={`text-xs uppercase font-semibold ${post.category?.colorClass}`}
                    >
                      {post.category?.name}
                    </span>
                   <Link href={`/blog/${post.slug.current}`}>
  <h3 className="text-base font-bold mt-2">{post.title}</h3>
</Link>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              {categoryMeta[selectedCategory]?.title || selectedCategory}
            </h2>
            <p className="mt-2 text-gray-600 text-sm md:w-[500px] md:text-base max-w-2xl">
              {categoryMeta[selectedCategory]?.sub || ""}
            </p>
          </div>
        )}
      </div>

      {/* Grid blog posts */}
      <div className="px-4 md:ml-8 mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col"
          >
            <div className="relative w-full h-72">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                quality={100}
              />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center space-x-2">
                {post.author?.image && (
                  <div className="relative w-8 h-8">
                    <Image
                      src={urlFor(post.author.image).url()}
                      alt={post.author.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="32px"
                      quality={100}
                    />
                  </div>
                )}
                <span className="text-sm font-semibold text-gray-700">
                  {post.author?.name || "Unknown Author"}
                </span>
              </div>

              <div className="mt-4">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${post.category?.colorClass}`}
                >
                  {post.category?.name}
                </span>
              </div>

             <Link href={`/blog/${post.slug.current}`}>
  <h3 className="text-base font-bold mt-2">{post.title}</h3>
</Link>

              <p className="text-sm text-gray-500 mt-2">
                {post.excerpt}
              </p>

              <p className="text-xs text-gray-400 mt-4">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Subscription Form - Unchanged */}
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
                Stay informed on payments, business growth, and 3Line news right
                in your inbox!
              </p>
            </div>
 
            {/* Email Input */}
            <div className="w-full lg:max-w-sm">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
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
  );
};

export default BlogPage;