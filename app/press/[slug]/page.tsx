import React from "react";
import Image from "next/image";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { pressArticleBySlugQuery } from "../../../sanity/lib/queries";
import { PortableText } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-03",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(`
    *[_type == "pressArticle" && defined(slug.current)]{
      slug
    }
  `);
  return slugs.map((s) => ({ slug: s.slug.current }));
}

async function getArticle(slug: string) {
  return await client.fetch(pressArticleBySlugQuery, { slug });
}

type Props = {
  params: { slug: string };
};

export default async function PressArticlePage({ params }: Props) {
  const article = await getArticle(params.slug);

  if (!article) {
    return <div className="p-8 text-center">Article not found</div>;
  }

  return (
    <main className="bg-[#EEF3FF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Image */}
        <div className="relative w-full h-72 md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src={urlFor(article.mainImage).url()}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Source + Title */}
        <div className="mt-6 flex items-center">
          <Image
            src={urlFor(article.source.logo).url()}
            alt={article.source.name}
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="ml-3 text-sm font-semibold uppercase text-gray-800">
            {article.source.name}
          </span>
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-bold">{article.title}</h1>
        <p className="text-gray-500 text-sm mt-2">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>

        {/* Excerpt */}
        <p className="mt-6 text-lg text-gray-700">{article.excerpt}</p>

        {/* Article body */}
        {article.body && (
          <div className="mt-8 prose max-w-none">
            {/* If using Portable Text */}
            <PortableText value={article.body} />
          </div>
        )}
      </div>
    </main>
  );
}
