"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import SingleCard from "./singleCard";
import SecondOverlay from "./secondOverlay";
import { GeneralContext } from "@/context/generalContext";

import SubNavText from "./subNavText";

const Navbarothers = ({ details, data }) => {
  const { secondOverlay, setSecondOverlay } = useContext(GeneralContext);

  const navHeight = "h-72";

  return (
    <div className=" mx-auto  w-full ">
      <div className={`mx-auto relative w-full ${navHeight} mt-20`}>
        <Image
          src="/foodBanner.jpg"
          fill
          alt="pic"
          className="object-cover absolute "
        />
        <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center">
          <div
            onClick={() => {
              setSecondOverlay(true);
            }}
            className="text-bgcolor cursor-pointer transition hover:text-neutral-300 w-9 h-9"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          <Link
            href=""
            className="p-3 px-5  tracking-wide  bg-lightbrown  text-bgcolor opacity-90
            uppercase  font-light   "
          >
            Book Now
          </Link>
        </nav>
        <h1
          className="text-4xl uppercase absolute opacity-90 font-light  p-3 py-4 -top-10 
        
        bg-brown text-bgcolor left-1/2  transform -translate-x-1/2"
        >
          troy boutique
        </h1>

        <SecondOverlay navHeight={navHeight} />
      </div>
      {/* nav altı */}

      <SubNavText details={details} />

      <div className="mx-auto flex flex-col justify-center items-center gap-4 mb-4 ">
        {data.map((card, index) => {
          return <SingleCard card={card} key={card.id} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Navbarothers;
