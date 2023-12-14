"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { GeneralContext } from "@/context/generalContext";
import { motion } from "framer-motion";
import { links } from "@/app/data";

const Overlay = () => {
  const { sideOpen, setSideOpen } = useContext(GeneralContext);

  return (
    <>
      <nav className="w-full h-3/5  ">
        <ul className="w-full h-full flex flex-col justify-center items-center">
          {links.map((link) => {
            return (
              <li
                className="my-2  w-full text-center transition-all border-b border-transparent  hover:border-b hover:border-brown"
                key={link.href}
              >
                <Link
                  href={link.href}
                  className="text-3xl transition-all hover:text-brown uppercase font-light text-black relative"
                >
                  {link.label}
                </Link>
              </li>
            );
           })}
        </ul>
        <div className="text-blackk mt-24  text-sm font-light">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <p>0 543 6545654</p>
          </div>
          <div className="flex justify-center items-center   gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <p className="text-black ">ydkurt@yahoo.com</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Overlay;
