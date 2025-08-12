// app/case-study/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "caseStudy"]{ slug }`
  );
  return slugs.map(({ slug }) => ({ slug: slug.current }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = params;

  const caseStudy = await client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0]{
      title,
      tag,
      coverImage,
      client,
      industry,
      location,
      category,
      who,
      objectives,
      problem,
      approach,
      solution,
      description,
      date,
      lastUpdated,
      "clientLogo": clientLogo.asset->url,
      quote {
        text,
        author,
        position,
        "authorImage": authorImage.asset->url
      },
      results,
      relatedPost->{ title, slug }
    }`,
    { slug }
  );

  if (!caseStudy) notFound();

  const formatDate = (d: string) =>
    new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(d));

  return (
    <main className="bg-[#f1f6fd] min-h-screen py-32 px-4 md:px-10 text-[#1b1b1f] font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <Link href="/case-study" className="text-sm text-[#576b9b]">
            ← Back
          </Link>
          <div className="text-right flex flex-col items-end text-sm text-[#6b6b6b]">
            {caseStudy.clientLogo && (
              <Image
                src={caseStudy.clientLogo}
                alt={`${caseStudy.client} logo`}
                width={50}
                height={50}
              />
            )}
            <div className="font-semibold text-[#1b1b1f]">{caseStudy.title}</div>
            <div>
              • Updated {caseStudy.lastUpdated ? formatDate(caseStudy.lastUpdated) : formatDate(caseStudy.date)}
            </div>
          </div>
        </div>

        {/* Tag */}
        {caseStudy.tag && (
          <div className="text-sm font-semibold text-blue-600 mb-2">{caseStudy.tag}</div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug mb-8">
          {caseStudy.title}
        </h1>

        {/* Quote + Cover Image */}
        {(caseStudy.quote?.text || caseStudy.coverImage) && (
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-10">
            <div className="md:flex gap-6 items-start">
              {caseStudy.quote?.text && (
                <blockquote className="md:w-1/2 text-base leading-relaxed mb-6 md:mb-0">
                  <p className="mb-4">“{caseStudy.quote.text}”</p>
                  <span className="block font-semibold text-sm text-[#6b6b6b]">
                    {caseStudy.quote.author}
                    {caseStudy.quote.position && `, ${caseStudy.quote.position}`}
                  </span>
                </blockquote>
              )}
              {caseStudy.coverImage && (
                <div className="md:w-1/2">
                  <Image
                    src={urlFor(caseStudy.coverImage).url()}
                    alt="Cover"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Results Grid */}
        {caseStudy.results?.length > 0 && (
          <div className="bg-[#a6c4fa] p-6 rounded-xl grid md:grid-cols-4 gap-4 mb-12 text-sm">
            {caseStudy.results.map((item:any, i: any) => (
              <div key={i} className="border-r last:border-none pr-4 border-[#b6cbe7]">
                <div className="text-xs font-semibold text-[#6b6b6b] mb-1">{item.label}</div>
                <div className="flex items-center gap-1 font-bold text-xl">
                  <FaArrowUp className="text-green-500" />
                  {item.value}
                </div>
                <p className="text-xs mt-1 leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Info Sections */}
        {[
          ['Who is this?', caseStudy.who],
          ['Objectives', caseStudy.objectives?.map((o: string, i: number) => <li key={i}>{o}</li>)],
          ['Problem', caseStudy.problem],
          ['Approach', caseStudy.approach],
          ['Solution', caseStudy.solution],
        ].map(([title, content], idx) =>
          content ? (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-xl mb-6 flex gap-6 flex-col md:flex-row">
              <div className="md:w-1/3 border-r border-[#e0e7f0] pr-4">
                <h2 className="font-semibold text-lg md:text-xl">{title}</h2>
              </div>
              <div className="md:w-2/3 text-sm leading-relaxed">
                {typeof content === 'string' ? <p>{content}</p> : <ul className="list-decimal pl-4 space-y-2">{content}</ul>}
              </div>
            </div>
          ) : null
        )}

        {/* Related Post */}
        {caseStudy.relatedPost && (
          <div className="pt-10 border-t">
            <h2 className="font-bold text-lg mb-2">Read the next case study</h2>
            <Link href={`/case-study/${caseStudy.relatedPost.slug.current}`} className="text-blue-600 hover:underline">
              {caseStudy.relatedPost.title}
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
