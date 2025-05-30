import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden flex justify-center items-center bg-[#EEF3FF] md:mt-[35px]">
      <div className="w-[96%] h-[500px] md:h-[650px] lg:h-[700px] bg-[#000066] md:bg-[#0A1A4A] relative rounded-[10px] pt-[40px]">
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
          <div className="w-full md:w-1/2 md:pt-[60px] md:pl-[40px] md:ml-[45px]">
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
              className="text-5xl text-headline md:text-6xl lg:text-[150px] font-bold text-white mb-6 leading-none md:pt-[0px]"
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
              href="#"
              className="inline-flex items-center justify-center bg-transparent text-white font-medium rounded-full transition-colors group"
            >
              <span className="text-body">Get started</span>
              <Image
                src="/arrow_hero.png"
                alt="Arrow Hero"
                width={50}
                height={30}
                className="mt-[15px]"
              />
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
