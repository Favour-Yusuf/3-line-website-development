import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

// 1️⃣ Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: true,
});

// 2️⃣ Image builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// 3️⃣ Portable Text custom renderers
const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-6">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'Blog image'}
          width={800}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
    normal: ({ children }: any) => <p className="text-gray-700 leading-relaxed my-2">{children}</p>,
  },
};

// 4️⃣ Fetch blog post by slug
async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      publishedAt,
      excerpt,
      body,
      "author": author->{name, image},
      "category": category->{name, colorClass},
      relatedPosts[]->{
        title,
        slug,
        mainImage,
        publishedAt,
        "category": category->{name, colorClass}
      }
    }`,
    { slug }
  );
}

type Props = {
  params: Promise<{ slug: string }>;
};


export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; // ✅ Await before using

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Meta */}
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
        {post.author?.image && (
          <Image
            src={urlFor(post.author.image).width(40).height(40).url()}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <span>{post.author?.name}</span>
        <span>•</span>
        <span>
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
      </div>

      {/* Main image */}
      {post.mainImage && (
        <div className="mb-8">
          <Image
            src={urlFor(post.mainImage).width(1200).url()}
            alt={post.title}
            width={1200}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      )}

      {/* Body */}
      <article className="prose max-w-none">
        <PortableText value={post.body} components={components} />
      </article>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {post.relatedPosts.map((related: any, i: number) => (
              <Link
                key={i}
                href={`/blog/${related.slug.current}`}
                className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={urlFor(related.mainImage).width(600).height(400).url()}
                    alt={related.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${related.category?.colorClass}`}
                  >
                    {related.category?.name}
                  </span>
                  <h3 className="mt-2 font-bold">{related.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(related.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
