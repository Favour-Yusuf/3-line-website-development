import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { contactInfoQuery } from "@/sanity/lib/queries";

export const revalidate = 60; // ISR (optional caching)

export default async function ContactInfoSection() {
  const data = await client.fetch(contactInfoQuery);

  if (!data) return null;

  return (
    <section className="py-12 px-10 bg-[#EEF3FF]">
      <div className="container md:max-w-8xl">
        <h1 className="font-bold text-[40px] mt-[50px]">Contact Information</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Information (Left 2/3) */}
          <div className="lg:col-span-1 space-y-4">
            {/* Email */}
            <div className="bg-white/70 px-6 py-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <div className="mb-2">
                  <Image alt="email" src="/email.png" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[18px] mb-2">Email</h3>
                  <p className="text-gray-600 text-[18px]">{data.email}</p>
                </div>
              </div>
              <Link href={`mailto:${data.email}`}>
                <Image
                  className="mt-[50px]"
                  alt="arrow"
                  src="/arrow_right.png"
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            {/* Phone */}
            <div className="bg-white/70 px-6 py-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <div className="mb-2">
                  <Image alt="phone" src="/phone.png" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[18px] mb-2">Phone</h3>
                  <p className="text-gray-600 text-[18px]">{data.phone}</p>
                </div>
              </div>
              <Link href={`tel:${data.phone.replace(/\s+/g, "")}`}>
                <Image
                  className="mt-[50px]"
                  alt="arrow"
                  src="/arrow_right.png"
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            {/* Address */}
            <div className="bg-white/70 px-6 py-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <div className="mb-2">
                  <Image alt="location" src="/address.png" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[18px] mb-2">Address</h3>
                  <p className="text-gray-600 text-[18px] leading-snug">
                    {data.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card (Right 1/3) */}
          <div className="bg-[#4096FB] rounded-2xl relative overflow-hidden text-white flex flex-col justify-between p-8">
            <div className="p-6">
              <h2 className="text-5xl font-bold mb-2">Get in touch!</h2>
              <p className="text-2xl">We’re just a message away.</p>
            </div>

            <div className="w-full flex justify-end items-end">
              <Link
                href="#contact-form"
                className="text-[20px] inline-flex items-center text-white font-medium z-10"
              >
                Send us a message
                <Image src="/arrow_up.png" alt="arrow up" width={60} height={60} />
              </Link>
            </div>

            <div className="absolute inset-0 opacity-80">
              <Image
                src="/get_in_touch.png"
                alt="decor"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
