import React from "react";

import Link from "next/link";
import RoomDetails from "@/components/roomDetails";
import RoomsImgSlider from "@/components/roomsImgSlider";
import SecondOverlay from "@/components/secondOverlay";
import NavOthers2 from "./navOthers2";


/* const getData = async () => {
  const res = await fetch("http://localhost:3000/api/listings", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
}; */

const getData = async () => {
  try {
    const res = await fetch("/api/listings", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed with status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};










const details = [
  {
    dh1: "Check out our 5 different concept rooms",
    dp: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis architecto saepe ipsa quibusdam consequuntur eveniet voluptatibus obcaecati modi veritatis nostrum animi quaerat facilis aspernatur,dolor sit amet consectetur adipisicing elit. Perferendis architecto saepe ",
  },
];

async function RoomsPage() {
  const listings = await getData();

  return (
    <div
      className="w-full flex justify-center items-center font-montserrat 
    overflow-x-hidden bg-gradient-to-l from-bgcolor to-white"
    >
      <div className="mx-auto w-full">
        <div className=" mx-auto p-6 w-full ">
          <NavOthers2 />

          {/* nav altı */}

          <div

        className="mx-auto p-6 w-full my-20 text-center "
      >
        <h1 className="text-7xl capitalize font-serif  opacity-90  mb-16  text-black w-full px-6 sm:text-6xl xs:text-5xl ">
          {details[0].dh1}
        </h1>
        <p className="font-light"> {details[0].dp} </p>
      </div>

          <div className="mx-auto flex flex-col justify-center items-center gap-4 mb-4 ">
            {listings?.map((card) => {
              return (
                <div className="mx-6" key={card.id}>
                  <div className="w-full grid grid-cols-2 justify-center items-center bg-white shadow-md mmd:grid-cols-none 
                  mmd:grid-rows-2">
                    <RoomsImgSlider data={card.imageSrc} />
                    <div className="p-12 ">
                      <h1 className="text-3xl tracking-wide font-light mb-10  uppercase">
                        {card.title}
                      </h1>

                      <RoomDetails data={card.rommsqm2} />

                      <p className="font-light tracking-wide    text-neutral-400 mb-10">
                        {card.description}
                      </p>

                      <Link
                        href={`http://localhost:3000/listings/${card.id}`}
                        className="p-3 px-4 uppercase  tracking-wide text-neutral-500 
                           border border-neutral-300 transition-all hover:text-neutral-700 hover:border-neutral-700 duration-500"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsPage;
