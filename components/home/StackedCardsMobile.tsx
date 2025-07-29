"use client";

type StackedCardMobileProps = {
  title: string;
  description: string;
  bgColor: string;
  bgImage: string;
  foregroundImage: string;
};

export default function StackedCardMobile({
  title,
  description,
  bgColor,
  bgImage,
  foregroundImage,
}: StackedCardMobileProps) {
  return (
    <div
      className="relative w-[280px] h-[380px] rounded-xl overflow-hidden p-4 text-white"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Shape */}
      <div className=" absolute bottom-0 left-0 w-[400px] opacity-30 z-0">
        <img
          src={bgImage}
          alt="Background Shape"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Text content */}
      <div className="relative z-10">
        <h3 className="text-[33px] font-semibold leading-tight mb-2">
          {title}
        </h3>
        <p className="text-[13px] text-white font-thin leading-snug">
          {description}
        </p>
      </div>

      {/* Stacked card image */}
      <div className="relative z-10 mt-6 bottom-6 h-[300px] overflow-hidden">
        <img
          src={foregroundImage}
          alt={title}
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
}
