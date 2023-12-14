import Header from "@/components/Header";
import SingleCard from "@/components/singleCard";
import Image from "next/image";
import { cardsData } from "./data";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center h-full bg-bgcolor font-montserrat overflow-hidden ">
      <div className=" mx-auto  relative ">
        <div className="w-screen h-screen p-6">
          <Header />
        </div>

        {/* Cards..... */}
        <div className=" flex flex-col justify-center items-center gap-4 mb-4 ">
          {cardsData.map((card, index) => {
            return <SingleCard card={card} key={card.id} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
