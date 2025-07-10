// components/home/StackedCardMobile.tsx
'use client';

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
      className="relative w-full rounded-xl overflow-hidden p-4 text-white h-[300px] flex flex-col justify-between"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background shape */}
      <div className="absolute left-0 bottom-0 w-1/2 h-full z-0 opacity-80">
        <img
          src={bgImage}
          alt="Decorative Background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 leading-snug">{description}</p>
      </div>

      {/* Foreground image (card poking out of bottom) */}
      <div className="relative z-10 w-full flex justify-center">
        <img
          src={foregroundImage}
          alt="Card Visual"
          className="w-[120px] mt-4 object-contain"
        />
      </div>
    </div>
  );
}
