// components/OurTeamComponent.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import ExecutiveTeamSection from "@/components/our-team/executive-team";
import TeamLeadsSection from "@/components/our-team/team-leads";
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: true,
});

// Initialize image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const OurTeamComponent = () => {
  const [jobOpenings, setJobOpenings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch active job openings
        const jobs = await client.fetch(`*[_type == "jobOpening" && isActive == true] | order(_createdAt desc)`);
        setJobOpenings(jobs);
      } catch (error) {
        console.error("Error fetching job openings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-[#EEF3FF] md:px-[25px] pt-[60px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative z-10 bg-[#00002e] rounded-xl overflow-hidden h-[85vh]">
            <div className="pl-8 md:pl-12  flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 pt-12">
                <h1 className="inline-block text-[50px] bg-[#6be0f0] text-[#10142C] px-3 py- rounded-md font-bold mb-4">
                  Our Team
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Who we are
                </h1>
                <p className="text-gray-300 mb-8 max-w-lg">
                  At 3Line, we are more than a company, we are a team of
                  innovators, problem-solvers, and financial inclusion
                  specialists.
                </p>
              </div>
              <div className="w-full md:w-[70%] relative h-60 md:h-screen">
                <div className="absolute inset-0  w-full right-0">
                  <Image
                    src="/team-hero1.png"
                    alt="Our Team"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-0 right-0 -z-10  h-screen">
                  <Image
                    src="/team-hero2.png"
                    alt="Decorative element"
                    className="w-[100%] h-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 

      {/* Vision, Mission & Values */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-6 rounded-xl shadow-sm ">
              <Image
                src="/vision.png"
                alt="vision"
                width={70}
                height={70}
                className="mb-[50px]"
              />
              <h3 className="text-4xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become Africa's leading financial services provider, powering
                the continent's payments while ensuring financial inclusion for
                businesses, banks, and communities.
              </p>
            </div>
 
            {/* Mission */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Image
                src="/mission.png"
                alt="mission"
                width={70}
                height={70}
                className="mb-[50px]"
              />
              <h3 className="text-4xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To build innovative and reliable payment solutions that make
                everyday transactions simple, secure, and more accessible for
                businesses, communities, and individuals worldwide.
              </p>
            </div>
 
            {/* Values */}
            <div className="bg-transparent py-6 rounded-xl shadow-sm ">
              <h3 className="text-4xl font-bold mb-4">Our Values</h3>
              <div className="space-y-4">
                <div className="bg-[#FFFFFF80] p-[15px] rounded-[10px]">
                  <h4 className="font-medium">Innovation</h4>
                  <p className="text-sm text-gray-600">
                    We constantly push boundaries to deliver cutting-edge
                    solutions.
                  </p>
                </div>
                <div className="bg-[#FFFFFF80] p-[15px] rounded-[10px]">
                  <h4 className="font-medium">Integrity</h4>
                  <p className="text-sm text-gray-600">
                    We operate with transparency and honesty.
                  </p>
                </div>
                <div className="bg-[#FFFFFF80] p-[15px] rounded-[10px]">
                  <h4 className="font-medium">Inclusion</h4>
                  <p className="text-sm text-gray-600">
                    We believe in financial access for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <ExecutiveTeamSection />

      {/* Team Leads */}
      <TeamLeadsSection />

      {/* ... existing join our team section ... */}
      <section className=" overflow-hidden  text-white hidden md:flex w-full  justify-center items-center">
        <div className="w-[99%] py-8 md:py-12 md:px-[100px] relative bg-[#10142C] rounded-[25px]">
          <div className="max-w-3xl py-16 md:py-20 relative z-10">
            <div className="md:text-[20px] md:mb-[30px] text-gray-400 mb-[20px] text-sm">
              Careers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Join Our Team
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              We're an ambitious team shaping the future of payments in Africa.
              Join our expanding offices and join us in making financial access
              simpler for everyone.
            </p>
          </div>
 
          <div className="absolute top-0 right-0 h-full w-1/2">
            <Image
              src="/team-join.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </section>
 

      {/* Current Openings */}
      <section className="py-12 px-4 mt-[20px]">
        <div className="container mx-auto">
          {jobOpenings.length > 0 ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Current Openings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobOpenings.map((job, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Link
                        href={job.applyUrl || "#"}
                        className="inline-flex items-center font-medium text-[#000066] hover:underline"
                      >
                        Apply
                        <span className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-[#4894F4] text-white rounded-full">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              There are no current openings
            </h2>
          )}
        </div>
      </section>
    </main>
  );
};

export default OurTeamComponent;