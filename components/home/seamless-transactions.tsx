// pages/StackedCardsPage.tsx
import StackedCard from "./StackedCard";

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

export default function SeamlessTransactions() {
  const cardHeight = 250;
const overlap = 8;
return(
<main className=" ml-8 relative h-[400px] md:h-[600px] w-[97%] flex items-center justify-center">
  <div className="relative w-[95%] h-full">
    {cardData.map((card, index) => (
      <div
        key={index}
        className="absolute left-0 w-full transition-all duration-300"
        style={{
          top: `${index * overlap}px`,
          zIndex: cardData.length - index,
        }}
      >
        <StackedCard {...card} />
      </div>
    ))}
  </div>
</main>)
}