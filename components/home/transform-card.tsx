// components/TransformCard.tsx
import Image from "next/image";
import Link from "next/link";

const TransformCard = () => {
  return (
    <div className=" md:hidden relative bg-[#000066] text-white p-6 rounded-[20px] overflow-hidden w-[90%] mx-auto mt-6">
      {/* Background abstract image */}
      <Image
        src="/transform_bg.png"
        alt="background shape"
        width={1000}
        height={1000}
        className="absolute left-[50%] top-[-50%] opacity-90 object-cover"
      />

      {/* Text content */}
      <h2 className="text-[30px] font-bold leading-tight mb-3">
        Ready to Transform <br />
        Your Payments?
      </h2>
      <p className="text-[18px] text-[#C3C5E5] leading-[1.5]">
        Join the hundreds of financial institutions and businesses already growing with 3Line.
      </p>

      {/* CTA */}
      <Link
        href="/contact-us"
        className="mt-5 flex items-center justify-end gap-1 text-white font-medium text-xl"
      >
        <span>Get started</span>
        <div className="flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
          <Image
            src="/sme_arrow.png"
            alt="arrow"
            width={60}
            height={60}
          />
        </div>
      </Link>
    </div>
  );
};

export default TransformCard;
