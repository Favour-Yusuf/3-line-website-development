import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

type Params = {
  slug: string;
};

export default async function CaseStudyPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = params;

  const caseStudy = await client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0]{
      _id,
      title,
      description,
      coverImage,
      quote,
      quoteImage,
      client,
      industry,
      location,
      category,
      who,
      objectives,
      problem,
      approach,
      solution,
      results,
      relatedPost->{title, slug, coverImage}
    }`,
    { slug }
  );

  if (!caseStudy) {
    return <div>Not found</div>;
  }

  return (
    <div className="bg-[#E8EDFD] text-[#111]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/case-studies"
          className="inline-flex items-center text-sm text-blue-700 hover:underline mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl leading-tight mb-4">
          {caseStudy.title}
        </h1>

        {/* Quote + Image */}
        <div className="md:flex items-center bg-white rounded-xl overflow-hidden p-6 shadow-sm mb-8">
          <div className="md:w-1/2 text-sm italic text-gray-700 mb-4 md:mb-0">
            <p className="text-lg font-medium">"{caseStudy.quote}"</p>
          </div>
          <div className="md:w-1/2 relative h-52 md:h-60">
            {caseStudy.quoteImage && (
              <Image
                src={urlFor(caseStudy.quoteImage).url()}
                alt="Quote Image"
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {caseStudy.results?.map((result: any, i: number) => (
            <div key={i} className="bg-blue-200 text-center p-4 rounded-xl">
              <div className="text-xl font-bold">{result.value}</div>
              <div className="text-sm">{result.label}</div>
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="space-y-10 text-sm">
          <Section title="Who is Unity Bank?" body={caseStudy.who} />
          <Section title="Objectives">
            <ul className="list-disc ml-6 space-y-1">
              {caseStudy.objectives?.map((obj: string, i: number) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </Section>
          <Section title="Problem" body={caseStudy.problem} />
          <Section title="Approach" body={caseStudy.approach} />
          <Section title="Solution" body={caseStudy.solution} />
        </div>

        {/* Related Case Study */}
        {caseStudy.relatedPost && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-4">Read the next case study</h2>
            <Link href={`/case-study/${caseStudy.relatedPost.slug.current}`} className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="relative h-44 w-full">
                <Image
                  src={urlFor(caseStudy.relatedPost.coverImage).url()}
                  alt={caseStudy.relatedPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-base">{caseStudy.relatedPost.title}</h3>
                <span className="text-blue-600 text-sm mt-2 inline-block">Read case study →</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({
  title,
  body,
  children,
}: {
  title: string;
  body?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-bold text-base mb-1">{title}</h3>
      {body && <p className="text-gray-800">{body}</p>}
      {children}
    </div>
  );
}
