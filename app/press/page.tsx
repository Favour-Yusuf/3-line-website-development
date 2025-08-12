// app/press/page.tsx
import React from "react";
import Image from "next/image";
import { createClient } from '@sanity/client';
import { pressArticlesQuery } from "../../sanity/lib/queries";
import imageUrlBuilder from '@sanity/image-url';

// we'll create this helper
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

async function getArticles() {
  return await client.fetch(pressArticlesQuery);
}

const PressPage = async () => {
  const articles = await getArticles();

  const featured = articles.find((a: any) => a.isFeatured);
  const sidePosts = articles.filter((a: any) => !a.isFeatured).slice(0, 3);
  const otherPosts = articles.slice(3);

  return (
    <main className="min-h-screen pb-4 bg-[#EEF3FF]">
      <section className="relative overflow-hidden text-white md:pt-[105px] rounded-[15px] md:mt-0 mt-[70px] md:flex w-full  justify-center items-center">
        <div className="h-[455px] px-[20px]  mt-[30px] w-[93%] mx-auto ml-[20px] md:h-[400px] lg:mt-0 md:px-[70px] md:ml-[50px] py-2 md:py-6 relative  md:bg-[#111B41] bg-[#000066] rounded-[15px] ">
          <div className="max-w-full md:max-w-3xl py-12 md:py-20 relative z-10 pr-4">
           
            <h1 className=" w-[240px] md:w-[80%] text-4xl leading-tight md:text-6xl font-bold mb-[20px] md:leading-tight">
              Press
            </h1>
            <p className="text-gray-300 md:text-gray-300 mb-8 md:max-w-lg text-[16px] md:text-base">
              We pride ourselves in making notable impact. <br />
              Here are what others think about us at 3line and <br />
              our work so far.
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

      {/* Blog Section */}
      <div className="px-4 mt-6 md:ml-8  max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Featured Post */}
          {featured && (
            <div className="flex-1">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative w-full h-64 lg:h-[650px]">
                  <Image
                    src={urlFor(featured.mainImage).url()}
                    alt={featured.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center">
                    <Image
                      src={urlFor(featured.source.logo).url()}
                      alt={featured.source.name}
                      width={20}
                      height={20}
                    />
                    <span className="text-xs ml-2 uppercase text-gray-800 font-semibold">
                      {featured.source.name}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mt-2">{featured.title}</h2>
                  <p className="text-sm text-gray-500 mt-4">
                    {featured.excerpt}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(featured.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Side Blog Posts */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 scrollbar-hide">
            {sidePosts.map((post: any, i: number) => (
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
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <Image
                      src={urlFor(post.source.logo).url()}
                      alt={post.source.name}
                      width={20}
                      height={20}
                    />
                    <span className="text-xs ml-2 uppercase text-gray-800 font-semibold">
                      {post.source.name}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold mt-2">{post.title}</h3>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Other Posts */}
      <div className="px-4 mt-8 grid md:ml-8 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {otherPosts.map((post: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-row md:flex-col"
          >
            <div className="relative w-28 h-28 md:w-full md:h-72 flex-shrink-0">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-1">
              <div className="flex items-center">
                <Image
                  src={urlFor(post.source.logo).url()}
                  alt={post.source.name}
                  width={20}
                  height={20}
                />
                <span className="text-xs ml-2 uppercase text-gray-800 font-semibold">
                  {post.source.name}
                </span>
              </div>
              <h3 className="text-sm font-bold mt-2 md:text-base">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 hidden sm:block">
                {post.excerpt}
              </p>
              <p className="text-xs text-gray-400 mt-2 md:mt-4">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PressPage;
