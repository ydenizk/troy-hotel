"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }} //sadece bir kez çalışır
      className="mx-6"
    >
      <div className="w-full grid grid-cols-2 sm:grid-cols-none sm:grid-rows-2 justify-center items-center bg-white shadow-md ">
        <div
          className={`w-full h-[480px] relative sm:h-[360px]  ${
            index % 2 === 0 ? "" : "order-last sm:order-first"
          }`}
        >
          <Image
            src={card.imgCard}
            alt="pic"
            fill
            className="absolute object-cover"
          />
        </div>
        <div className="p-12 ">
          <h1
            className={`${card.titleSize} tracking-wide font-light   uppercase`}
          >
            {card.title}{" "}
          </h1>
          <h3 className="text-lg xs:text-base font-light tracking-wide text-neutral-400 my-4">
            {card.subtitle}{" "}
          </h3>
          <p className="font-light tracking-wide xs:text-sm   text-neutral-400 mb-10">
            {card.desc}{" "}
          </p>
          {card.btnLink && card.linkTitle ? (
            <Link
              href={card.btnLink}
              className="p-3 px-4 uppercase  tracking-wide text-neutral-500 
     border border-neutral-300 transition-all hover:border-neutral-700 hover:text-neutral-700 duration-500"
            >
              {card.linkTitle}{" "}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SingleCard;
