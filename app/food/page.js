import Navbarothers from "@/components/navbarOthers";
import React from "react";
import { foodData } from "./foodData";

const details = [
  {
    dh1: "Troy Restaurant: a hidden gem in Bozcaada",
    dp: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis architecto saepe ipsa quibusdam consequuntur eveniet voluptatibus obcaecati modi veritatis nostrum animi quaerat facilis aspernatur,dolor sit amet consectetur adipisicing elit. Perferendis architecto saepe ",

  },
];

const FoodPage = () => {
  return (
    <div
      className="w-full flex justify-center items-center font-montserrat 
    overflow-hidden bg-gradient-to-l from-bgcolor to-white"
    >
      <div className="mx-auto w-full">
        <Navbarothers details={details} data={foodData} />
      </div>
    </div>
  );
};

export default FoodPage;
