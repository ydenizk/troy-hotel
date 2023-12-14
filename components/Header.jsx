"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import { GeneralContext } from "@/context/generalContext";
import Overlay from "./overlay";
import {  motion } from "framer-motion";
import SignInComponent from "./signIn";
import RegisterComponent from "./register";
import Avatar from "./avatar";

const Header = () => {
  const { sideOpen, setSideOpen, loginState, logSideOpen, setLogSideOpen } =
    useContext(GeneralContext);

  const variants = {
    visible: {
      opacity: 1,
      scaleX: 1,
      overflow: "visible",
      display: "block",
      transition: { duration: 0.5, ease: "easeIn", delay: 0 },
      originX: 1,
    },
    hidden: {
      opacity: 1,
      scaleX: 0,
      overflow: "hidden",
      display: "hidden",
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
      originX: 1,
    },
  };
  const variants2 = {
    visible: {
      opacity: 0.9,
      scaleX: 1,
      overflow: "visible",
      display: "block",
      transition: { delay: 0.1, duration: 0.8, ease: "easeInOut" },
      originX: 1,
    },
    hidden: {
      opacity: 0.9,
      scaleX: 0,
      overflow: "hidden",
      display: "hidden",
      transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
      originX: 1,
    },
  };

  const variants3 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const getTransition = (n) => {
    return n ? { duration: 0.7, delay: 0.7 } : { duration: 0.5 };
  };

  return (
    <div className="bg-header bg-cover w-full h-full rounded-md  saturate-50 relative text-bgwhite2 p-8 xs:p-6">
      {/* nav kısmı */}
      <div className="w-full flex justify-between items-center   ">
        <Link
          href="TRoy VIII"
          className="tracking-wide font-light text-xl uppercase"
        >
          troy boutique hotel
        </Link>

        <div className="flex justify-center items-center gap-2 xs:gap-1">
 {/*          <div className="flex justify-center items-center gap-2 text-sm mr-4 xs:mr-2">
            <Link href="">TR</Link>
            <Link href="" className="text-neutral-300">
              EN
            </Link>
          </div> */}
          <span
            onClick={() => {
              setSideOpen(!sideOpen), setLogSideOpen(false);
            }}
            className=" cursor-pointer transition-all rounded duration-500 mr-2   hover:opacity-60 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>

          <Avatar />
        </div>
      </div>
      {/* nav END */}

      <div className="w-full text-center mt-28">
        <h1 className="text-6xl uppercase font-light xs:text-5xl">troy boutique </h1>
        <p className=" text-2xl font-extralight mt-6 bg-neutral-800 opacity-80 w-56 mx-auto">
          just your home
        </p>
      </div>

      <Image
        src="/bio.png"
        width={140}
        height={140}
        alt="bio"
        className="rounded-full  bg-neutral-700 mt-[9%] opacity-50 mx-auto "
      />

      <Link
        href="/listings"
        className="p-4 mx-8 mb-2 right-0 bg-transparent border-2 tracking-wide border-bgwhite2 
  uppercase text-lg font-light rounded-full whitespace-nowrap absolute bottom-[165px] transition duration-500
   hover:border-neutral-200 hover:text-neutral-200 sm:right-[60%] sm:bottom-[76%] 
   sm:p-2 sm:text-base xs:bottom-[70%] xs:right-[50%]"
      >
        Book Now
      </Link>

      {/* Overelay 1 */}

      <motion.div
        initial="hidden"
        variants={variants}
        animate={sideOpen ? "visible" : "hidden"}
        /*  transition={{ duration: 0.4,ease:"linear" }} */
        className="absolute  top-0 right-0 bg-bgwhite2 w-1/2 
         overflow-x-hidden h-full z-50    text-blackk sm:w-full"
        >
        <span
          onClick={() => setSideOpen(!sideOpen)}
          className=" cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 my-8 mx-4 hover:text-brown transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <motion.div
          variants={variants3}
          transition={getTransition(sideOpen)}
          animate={sideOpen ? "visible" : "hidden"}
          className="w-full h-full"
          >
          <Overlay />
        </motion.div>
      </motion.div>

      {/* Overlay-2 */}
      <motion.div
        initial="hidden"
        variants={variants2}
        animate={sideOpen ? "visible" : "hidden"}
        className="w-full h-full bg-neutral-200 absolute overflow-hidden 
        top-0 right-0 z-30 rounded sm:hidden  "
      ></motion.div>

{/* Register and Log out */}
      <div
        className={`overflow-hidden  h-auto bg-white absolute top-1/3 left-0 z-10
       opacity-95 transition-all duration-500 rounded-br rounded-tr   sm:h-full sm:top-0  sm:flex sm:justify-center sm:items-center     ${logSideOpen ? "w-72 sm:w-full" : "w-0"}`}
      >
        {!loginState ? <RegisterComponent /> : <SignInComponent />}
      </div>
    </div>
  );
};

export default Header;
