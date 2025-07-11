import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type Params = {
  slug: string;
};

export default async function CaseStudyPage(props: { params: Promise<Params> }) {
  const { slug } = await props.params;

  const caseStudy = await client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0]`,
    { slug }
  );

  if (!caseStudy) {
    return <div>Not found</div>;
  }

  return (
    <div className="bg-[#e8edfd] text-[#111]">
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        <div>
          <h1 className="text-2xl font-bold">{caseStudy.title}</h1>
          <p className="mt-2 text-sm text-gray-600">{caseStudy.description}</p>
          <div className="relative w-full h-64 mt-6">
            <Image
              src={urlFor(caseStudy.coverImage).url()}
              alt="Cover"
              layout="fill"
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><strong>Client:</strong> {caseStudy.client}</div>
          <div><strong>Industry:</strong> {caseStudy.industry}</div>
          <div><strong>Location:</strong> {caseStudy.location}</div>
          <div><strong>Category:</strong> {caseStudy.category}</div>
        </div>

        <section className="space-y-6">
          <div>
            <h2 className="font-semibold">Who is this?</h2>
            <p className="text-sm">{caseStudy.who}</p>
          </div>

          <div>
            <h2 className="font-semibold">Objectives</h2>
            <ul className="list-disc ml-5 text-sm">
              {caseStudy.objectives?.map((obj: string, i: number) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">Problem</h2>
            <p className="text-sm">{caseStudy.problem}</p>
          </div>

          <div>
            <h2 className="font-semibold">Approach</h2>
            <p className="text-sm">{caseStudy.approach}</p>
          </div>

          <div>
            <h2 className="font-semibold">Solution</h2>
            <p className="text-sm">{caseStudy.solution}</p>
          </div>
        </section>

        {caseStudy.relatedPost && (
          <div className="pt-10 border-t">
            <h2 className="font-bold text-lg mb-2">Read the next case study</h2>
            <a
              href={`/case-study/${caseStudy.relatedPost.slug.current}`}
              className="text-blue-600 hover:underline text-sm"
            >
              {caseStudy.relatedPost.title}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}