
"use client"

import React ,{useContext}   from "react";
import Image from "next/image";
import Link from "next/link";
import SecondOverlay from "@/components/secondOverlay";
import { GeneralContext } from "@/context/generalContext";

const AboutPage = () => {

  const { secondOverlay, setSecondOverlay } = useContext(GeneralContext);



const navHeight="h-96"
  return (
    <div
      className="mx-auto p-6 w-full font-montserrat 
    overflow-x-hidden bg-gradient-to-b from-bgcolor to-white border-b"
    >
      <div className="mx-auto relative w-full h-96 mt-20">
        <Image
          src="/pagesImages/about-1.jpg"
          fill
          alt="pic"
          className="object-cover absolute object-top"
        />
        <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center ">
          <span 
          
          onClick={() => {
            setSecondOverlay(true);
          }}
          
          className="text-bgcolor transition duration-500 hover:text-neutral-200 cursor-pointer">
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

          <Link
            href="/rooms"
            className="p-3 px-5  tracking-wide  bg-lightbrown  text-bgcolor opacity-90
  uppercase  font-light   "
          >
            Book Now
          </Link>
        </nav>
        <h1 className="text-4xl uppercase absolute opacity-90 font-light  p-3 py-4 -top-10 left-1/3 bg-brown text-bgcolor">
          troy boutique
        </h1>

        <SecondOverlay navHeight={navHeight} />
      </div>

      <div className="my-16 mt-24 text-center mx-auto leading-relaxed">
        <h1 className="text-7xl capitalize font-serif  opacity-90  mb-16  text-black w-full px-6  ">
          {" "}
          About Us
        </h1>
        <p className="font-light w-full max-w-3xl mx-auto text-neutral-500 text-left ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          architecto saepe ipsa quibusdam consequuntur eveniet voluptatibus
          temporibus doloribus obcaecati modi veritatis nostrum animi quaerat
          facilis aspernatur,dolor sit amet consectetur adipisicing elit.
          Perferendis architecto saepe ipsa quibusdam consequuntur eveniet
          voluptatibus temporibus doloribus obcaecati modi veritatis nostrum
          animi quaerat facilis aspernatur placeat dolores nemo soluta!
        </p>
        <p className="font-light w-full max-w-3xl mx-auto text-neutral-500 my-8 text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          architecto saepe ipsa quibusdam consequuntur eveniet voluptatibus
          temporibus doloribus obcaecati modi veritatis nostrum animi quaerat
          facilis aspernatur,dolor sit amet consectetur adipisicing elit.
          Perferendis architecto saepe ipsa quibusdam consequuntur eveniet
          voluptatibus temporibus doloribus obcaecati modi veritatis nostrum
          veritatis nostrum animi quaerat facilis aspernatur,dolor sit amet
          consectetur adipisicing elit. Perferendis architecto saepe ipsa
          quibusdam consequuntur eveniet voluptatibus temporibus doloribus
          obcaecati modi veritatis nostrum
        </p>
        <p className="font-light w-full max-w-3xl mx-auto text-neutral-500 my-8 text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          architecto saepe ipsa quibusdam consequuntur eveniet voluptatibus
          temporibus doloribus obcaecati modi veritatis nostrum animi quaerat
          facilis aspernatur,dolor sit amet consectetur adipisicing elit.
          Perferendis architecto saepe ipsa quibusdam consequuntur eveniet
          voluptatibus temporibus doloribus obcaecati modi veritatis nostrum
          veritatis nostrum animi quaerat facilis aspernatur,dolor sit amet
          consectetur adipisicing elit. Perferendis architecto saepe ipsa
          quibusdam consequuntur eveniet voluptatibus temporibus doloribus
          obcaecati modi veritatis nostrum
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default AboutPage;
