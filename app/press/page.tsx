import React from "react";
import Image from "next/image";

const PressPage = () => {
  const posts = [
    { tag: "Business growth", tagColor: "bg-blue-100 text-blue-600" },
    { tag: "Product update", tagColor: "bg-green-100 text-green-600" },
    { tag: "Inside the line", tagColor: "bg-teal-100 text-teal-600" },
    { tag: "Business growth", tagColor: "bg-blue-100 text-blue-600" },
    { tag: "Product update", tagColor: "bg-green-100 text-green-600" },
    { tag: "Inside the line", tagColor: "bg-teal-100 text-teal-600" },
  ];
  return (
    <main className="min-h-screen pb-4 bg-[#EEF3FF]">
      {/* Hero */}
      <section className="relative overflow-hidden text-white md:pt-[105px] rounded-[15px] md:mt-0 mt-[70px] md:flex w-full  justify-center items-center">
        <div className="h-[455px] px-[20px]  mt-[30px] w-[93%] mx-auto ml-[20px] md:h-[400px] lg:mt-0 md:px-[70px] md:ml-[50px] py-2 md:py-6 relative  md:bg-[#111B41] bg-[#000066] rounded-[15px] ">
          <div className="max-w-full md:max-w-3xl py-12 md:py-20 relative z-10 pr-4">
            {/* <div className="md:text-[25px] md:mb-2 text-gray-400 mb-[20px] text-[18px]">
              Our Blog
            </div> */}
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
                <div className="flex items-center">
                  <Image
                    src="/tech-cabal.png"
                    alt="Tech cabal"
                    width={20}
                    height={20}
                  />
                  <span className="text-xs ml-2 uppercase text-gray-800 font-semibold">
                    Tech Cabal
                  </span>
                </div>
                <h2 className="text-xl font-bold mt-2">
                  This is the title of this blog post by a member of staff of
                  3line
                </h2>
                <p className="text-sm text-gray-500 mt-4">
                  An expanded explanation of the topic about aimed at giving a
                  brief summary of what the blog post/article is all about
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
                  <div className="flex items-center">
                    <Image
                      src="/tech-cabal.png"
                      alt="Tech cabal"
                      width={20}
                      height={20}
                    />
                    <span className="text-xs ml-2 uppercase text-gray-800 font-semibold">
                      {
                        [
                          "Business growth",
                          "Design & engineering",
                          "Company news",
                        ][i]
                      }
                    </span>
                  </div>

                  <h3 className="text-sm font-bold mt-2">
                    This is the title of this blog post by a member of staff of
                    3line
                  </h3>
                  <p className="text-xs text-gray-400 mt-2">Jan 31, 2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 mt-8 grid md:ml-8 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-row md:flex-col"
          >
            {/* Image */}
            <div className="relative w-28 h-28 md:w-full md:h-72 flex-shrink-0">
              <Image
                src="/person1.png"
                alt="Vertical Blog"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 112px, (max-width: 1024px) 100vw, 33vw"
                quality={100}
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-1">
              {/* Tag */}
              <div className="flex items-center">
                <Image
                  src="/tech-cabal.png"
                  alt="Tech cabal"
                  width={20}
                  height={20}
                />
                <span className="text-xs ml-2 uppercase text-gray-800 font-semibold">
                  Tech Cabal
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold mt-2 md:text-base">
                This is the title of this blog post by a member of staff of
                3line
              </h3>

              {/* Description - optional, can hide on mobile if too long */}
    <p className="text-sm text-gray-500 mt-2 hidden sm:block">
      An expanded explanation of the of the topic about aimed at giving a brief
      summary of what the blog post/article is all about
    </p>

              {/* Date */}
              <p className="text-xs text-gray-400 mt-2 md:mt-4">Jan 31, 2025</p>
            </div>
          </div>
        ))}
      </div>

      
    </main>
  );
};

export default PressPage;
