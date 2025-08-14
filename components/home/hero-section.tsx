import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden flex justify-center items-center bg-[#EEF3FF] mt-[20px] md:mt-[35px]">
      <div className="w-[96%] h-[600px] md:h-[650px] lg:h-[700px] bg-[#000066] md:bg-[#0A1A4A] relative rounded-[20px] md:rounded-[10px] pt-[40px] ">
        {/* Mobile background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden md:hidden">
          <Image
            src="/hero_mobile.png"
            alt="Mobile Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden hidden md:block">
          <Image
            src="/hero2.png"
            alt="Background pattern"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>

        <div className="relative w-full mx-auto h-full z-10 pl-4 md:flex flex-col md:flex-row items-between">
          {/* Left content */}
          <div className="w-full md:w-1/2 md:pt-[60px] md:pl-[40px] md:ml-[45px] md:px-0 px-[20px]">
            <div className="inline-block bg-[#00D2FF] text-[#0A1A4A] md:px-3 md:py-1 rounded-md font-medium text-[30px] rotate-[-15deg] md:absolute bottom-[90%]">
              Your
            </div>
            <div
              style={{
                lineHeight: "0.75",
                letterSpacing: "-0.04em",
                textShadow:
                  "0px 10px 20px rgba(0,0,0,0.5), 0px 5px 10px rgba(0,0,0,0.3)",
              }}
              className="text-7xl text-headline lg:text-[150px] font-bold text-white mb-4 leading-none md:pt-[0px]"
            >
              Preferred
              <br />
              Payment
              <br />
              Partner
            </div>
            <p className="text-gray-300 text-body mb-[15px] max-w-lg text-lg p-0">
              We are redefining how financial institutions and businesses move
              money, by making payments faster, safer, and more accessible for
              everyone.
            </p>
            <Link
  href="/contact-us"
  className="inline-flex items-center gap-3 justify-center bg-transparent text-white font-medium rounded-full transition-colors group"
>
  {/* Text with zoom on hover */}
  <span className="text-[29px] hover:text-blue-600 transition-transform duration-300 group-hover:scale-105">
    Get started
  </span>

  {/* Icon with background and zoom on hover */}
  <div className=" rounded-full  flex items-center justify-center transition-all duration-300 mt-[20px]">
    <Image
      src="/arrow_hero.png"
      alt="Arrow Hero"
      width={80}
      height={80}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </div>
</Link>
          </div>

          {/* Right image (desktop only) */}
          <div className="hidden md:block w-full md:w-[60%] h-full relative mt-8 md:mt-0">
            <div className="relative h-full w-full">
              <Image
                src="/hero_right.png"
                alt="Payment solutions collage"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
