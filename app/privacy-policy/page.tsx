import { getPrivacyPolicy } from '../../sanity/lib/queries'
import { PortableText } from '@portabletext/react'

export default async function PrivacyPolicyPage() {
  const data = await getPrivacyPolicy()

  if (!data) {
    return <div className="p-8 text-center text-gray-600">Privacy Policy not found.</div>
  }

  return (
    <main className="min-h-screen bg-[#EEF3FF] py-28 px-6 ">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{data.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          Last updated: {new Date(data.lastUpdated).toLocaleDateString()}
        </p>
        <div className="prose prose-gray max-w-none">
          <PortableText value={data.content} />
        </div>
      </div>
    </main>
  )
}
