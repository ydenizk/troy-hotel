"use client";

import React, { useContext,useEffect } from "react";
import Link from "next/link";
import { links } from "@/app/data";
import { GeneralContext } from "@/context/generalContext";


const SecondOverlay = ({navHeight}) => {
  const { secondOverlay, setSecondOverlay } = useContext(GeneralContext);



  return (
    <>
      <div
        className={`absolute  z-10 bg-lightbrown w-64 top-0 left-0 overflow-hidden 
        transition-all  duration-700 xs:w-full
    ${secondOverlay ? navHeight : "h-0 p-0"}`}
      >
        <div
          onClick={() => setSecondOverlay(false)}
          className="w-full flex items-center justify-end my-2 cursor-pointer transition  hover:text-neutral-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white   hover:text-brown transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <ul className="w-full h-full flex flex-col justify-center items-center pb-10">
          {links.map((link) => {
            return (
              <li
                className="my-1  w-full text-center transition-all border-b border-transparent  hover:border-b hover:border-bgcolor"
                key={link.href}
              >
                <Link
                  href={link.href}
                  onClick={() => setSecondOverlay(!secondOverlay)}
                  className="text-xl transition-all hover:text-brown uppercase font-light text-white relative"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SecondOverlay;
