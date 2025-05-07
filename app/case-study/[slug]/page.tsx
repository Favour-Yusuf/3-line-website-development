import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'


export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "caseStudy"]{ slug }`)
  return slugs.map((s: any) => ({ slug: s.slug.current }))
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0]{
      ...,
      relatedPost->{title, slug}
    }`,
    { slug: params.slug }
  )

  if (!data) return <div>Not found</div>

  return (
    <div className="bg-[#e8edfd] text-[#111]">
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        <div>
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="mt-2 text-sm text-gray-600">{data.description}</p>
          <div className="relative w-full h-64 mt-6">
            <Image
              src={urlFor(data.coverImage).url()}
              alt="Cover"
              layout="fill"
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><strong>Client:</strong> {data.client}</div>
          <div><strong>Industry:</strong> {data.industry}</div>
          <div><strong>Location:</strong> {data.location}</div>
          <div><strong>Category:</strong> {data.category}</div>
        </div>

        <section className="space-y-6">
          <div>
            <h2 className="font-semibold">Who is this?</h2>
            <p className="text-sm">{data.who}</p>
          </div>

          <div>
            <h2 className="font-semibold">Objectives</h2>
            <ul className="list-disc ml-5 text-sm">
              {data.objectives?.map((obj: string, i: number) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">Problem</h2>
            <p className="text-sm">{data.problem}</p>
          </div>

          <div>
            <h2 className="font-semibold">Approach</h2>
            <p className="text-sm">{data.approach}</p>
          </div>

          <div>
            <h2 className="font-semibold">Solution</h2>
            <p className="text-sm">{data.solution}</p>
          </div>
        </section>

        {data.relatedPost && (
  <div className="pt-10 border-t">
    <h2 className="font-bold text-lg mb-2">Read the next case study</h2>
    <a
      href={`/case-study/${data.relatedPost.slug.current}`}
      className="text-blue-600 hover:underline text-sm"
    >
      {data.relatedPost.title}
    </a>
  </div>
)}


      </div>
    </div>
  )
}
