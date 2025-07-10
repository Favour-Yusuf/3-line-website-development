// components/home/seamless-transactions.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import StackedCardMobile from './StackedCardsMobile';

const cardData = [
  {
    title: "Seamless Transactions, Every Time!",
    description:
      "At 3Line, we understand that customers want flexibility when it comes to payments...",
    bgColor: "#00006B",
    bgImage: "/groupImg.png",
    foregroundImage: "/pos.png",
  },
  {
    title: "Card Payments",
    description:
      "Whether it’s debit, credit, or prepaid cards, we make it easy for your customers to pay securely and efficiently.",
    bgColor: "#00002E",
    bgImage: "/GroupImg2.png",
    foregroundImage: "/Cards.png",
  },
  {
    title: "QR Codes",
    description:
      "For customers without smartphones or internet access, USSD provides a simple and secure way to make payments.",
    bgColor: "#00006B",
    bgImage: "/groupImg.png",
    foregroundImage: "/Nothing Phone 1.png",
  },
  {
    title: "Payment Links",
    description:
      "For customers without smartphones or internet access, USSD provides a simple and secure way to make payments.",
    bgColor: "#0569FF",
    bgImage: "/GroupImg2.png",
    foregroundImage: "/credit.png",
  },
  {
    title: "USSD",
    description:
      "Provides a simple and secure way to make payments.",
    bgColor: "#00002E",
    bgImage: "/groupImg.png",
    foregroundImage: "/button-phone.png",
  },
  {
    title: "Bank Transfers",
    description:
      "Fast, reliable transfers that ensure your customers can pay directly from their bank accounts.",
    bgColor: "#023E8A",
    bgImage: "/groupImg.png",
    foregroundImage: "/receipt.png",
  },
];

export default function SeamlessTransactionsMobile() {
  const cardHeight = 250;
  const overlap = 8;
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted.current) {
          setIsInView(true);
          animationStarted.current = true;
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollPosition = window.scrollY;
      const containerTop = container.offsetTop - window.innerHeight * 0.3;
      const containerHeight = container.offsetHeight;
      
      // Calculate scroll progress through the container
      const progress = Math.max(0, Math.min(1, 
        (scrollPosition - containerTop) / containerHeight
      ));
      
      setScrollProgress(progress);
      
      // Calculate active card index based on scroll progress
      const newIndex = Math.floor(progress * cardData.length);
      if (newIndex >= 0 && newIndex < cardData.length && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, isInView]);

  return (
    <main className="ml-8 relative h-[400px] md:h-[600px] w-[97%] flex items-center justify-center">
      <div 
        ref={containerRef}
        className="relative w-[95%] h-full"
      >
        {cardData.map((card, index) => {
          // Calculate reveal progress for each card
          let revealProgress = 0;
          
          if (index === activeIndex) {
            // Current active card - reveal progress from 0 to 1
            revealProgress = scrollProgress * cardData.length - index;
          } else if (index < activeIndex) {
            // Already revealed cards
            revealProgress = 1;
          }
          
          return (
            <div
              key={index}
              className="absolute left-0 w-full transition-all duration-300"
              style={{
                top: `${index * overlap}px`,
                zIndex: cardData.length - index,
                // Hide cards that are already flipped
                opacity: index < activeIndex ? 0 : 1,
                // Move revealed cards to the back
                transform: index < activeIndex ? `translateY(${cardData.length * 10}px)` : "none"
              }}
            >
              <StackedCardMobile 
                {...card} 
                // isActive={activeIndex === index}
                // revealProgress={revealProgress}
              />
            </div>
          );
        })}
      </div>
    </main>
  )
}