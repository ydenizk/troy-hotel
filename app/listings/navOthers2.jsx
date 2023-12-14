"use client";

import React, { useContext } from "react";
import Image from "next/image";

import { GeneralContext } from "@/context/generalContext";
import SecondOverlay from "@/components/secondOverlay";

const NavOthers2 = ({ listing }) => {
  const { secondOverlay, setSecondOverlay } = useContext(GeneralContext);

  const navHeight = "h-96 xs:h-72";
  return (
    <>
      <div className={`mx-auto relative w-full bg-bgcolor ${navHeight} my-20`}>
        <Image
          src= {listing ? listing.imageSrc[2] : "/rooms.jpg"}
          fill
          alt="pic"
          className="object-cover absolute bg-bgcolor"
        />
        <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center">
          <span
            onClick={() => {
              setSecondOverlay(true);
            }}
            className="text-bgcolor cursor-pointer transition hover:text-neutral-300"
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
          </span>

          {listing && (
            <h1
              className="p-3 px-5  text-4xl tracking-wide  bg-lightbrown  text-bgcolor opacity-80
                   uppercase  mmd:text-3xl  sm:text-xl  "
            >
              {listing.title}
            </h1>
          )}
        </nav>
        <h1
          className="text-4xl uppercase absolute opacity-90 font-light p-3 py-4 -top-10  
        left-1/2 bg-brown text-bgcolor transform -translate-x-1/2 whitespace-nowrap sm:text-2xl xs:text-xl mmd:-top-20 "
        >
          troy boutique
        </h1>

        <SecondOverlay navHeight={navHeight} />
      </div>
    </>
  );
};

export default NavOthers2;
