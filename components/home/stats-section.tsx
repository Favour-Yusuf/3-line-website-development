// components/stats-section.tsx
export const dynamic = "force-dynamic";
export const revalidate = 60
import { client } from "@/sanity/lib/client"
import { statsSectionQuery } from "@/sanity/lib/queries"

 // ISR

export default async function StatsSection() {
  try {
    console.log("🔄 Fetching stats data...");
    console.log("SANITY PROJECT ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    
    const data = await client.fetch(statsSectionQuery);
    
    console.log("📊 Stats data:", data);
    console.log("Data type:", typeof data);
    console.log("Has stats array?", !!data?.stats);
    
    if (!data) {
      console.error("❌ No data returned from Sanity");
      return null;
    }

    const stats = data?.stats ?? [];
    
    console.log("Processed stats:", stats);
    console.log("Stats length:", stats.length);

  return (
   <section className="relative z-[50] w-full overflow-hidden bg-[#EEF3FF] py-16">


      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-6 md:hidden">
            {stats.length >= 2 && (
              <>
                {/* Row 1 */}
                <div className="flex justify-between gap-4 relative">
                  <div className="flex-1 text-center font-grotesk text-headline text-[#000066]">
                    <h3 className="text-2xl font-bold">{stats[0].title}</h3>
                    <p className="text-sm text-gray-600">{stats[0].description}</p>
                  </div>

                  <div className="w-px bg-blue-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2" />

                  <div className="flex-1 text-center font-grotesk text-headline text-[#000066]">
                    <h3 className="text-2xl font-bold">{stats[1].title}</h3>
                    <p className="text-sm font-bold text-gray-600">{stats[1].description}</p>
                  </div>
                </div>

                <div className="h-px bg-blue-500 w-full" />
              </>
            )}

            {stats.length >= 4 && (
              <>
                {/* Row 2 */}
                <div className="flex justify-between gap-4 relative">
                  <div className="flex-1 text-center font-grotesk text-headline text-[#000066]">
                    <h3 className="text-2xl font-bold">{stats[2].title}</h3>
                    <p className="text-sm text-gray-600">{stats[2].description}</p>
                  </div>

                  <div className="w-px bg-blue-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2" />

                  <div className="flex-1 text-center font-grotesk text-headline text-[#000066]">
                    <h3 className="text-2xl font-bold">{stats[3].title}</h3>
                    <p className="text-sm text-gray-600">{stats[3].description}</p>
                  </div>
                </div>

                <div className="h-px bg-blue-500 w-full" />
              </>
            )}

            {stats[4] && (
              <div className="text-left font-grotesk text-headline">
                <h3 className="text-2xl font-bold text-[#000066]">{stats[4].title}</h3>
                <p className="text-sm font-semibold text-blue-500">{stats[4].description}</p>
              </div>
            )}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between gap-8 bg-white px-4">
            {stats.map((item: any, index: number, arr: any[]) => (
              <div
                key={index}
                className="relative flex-1 px-4 text-center md:text-left"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#000066] font-grotesk text-headline">
                  {item.title}
                </h3>
                <p
                  className={`text-sm ${
                    item.blueText
                      ? "text-blue-500 font-semibold"
                      : "text-gray-600 font-semibold"
                  }`}
                >
                  {item.description}
                </p>

                {index < arr.length - 1 && (
                  <div className="hidden lg:block w-px bg-blue-500 absolute top-0 bottom-0 right-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ) } catch (error) {
    console.error("❌ Error fetching stats section:", error);
    return (
      <section className="relative z-[50] w-full overflow-hidden bg-[#EEF3FF] py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <p className="text-center text-red-500">
              Error loading statistics
            </p>
          </div>
        </div>
      </section>
    );
  }

}
