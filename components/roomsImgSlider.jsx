"use client";

import React, { useState } from "react";


const RoomsSlider = ({ data }) => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <>
      <div className="w-full h-[480px] mmd:h-[360px] relative flex  items-center overflow-hidden">
        {data.map((dt, index) => {
          return (
           
            <div
              key={dt}
              className="w-full  h-[480px] mmd:h-[360px] bg-cover bg-center absolute transition-transform duration-700"
              style={{
                backgroundImage: `url(${dt})`,
                left: `${index * 100}%`,
                transform: `translateX(-${imgIndex * 100}%)`,
              }}
            ></div>
          );
        })}

        <div className="  flex bottom-4 right-1/2 absolute  text-blackk  z-10">
          {data.map((b, inx) => {
            return (
              <button
                onClick={() => setImgIndex(inx)}
                key={inx}
                className={`text-xl mx-1 w-[10px] h-[10px] 
            rounded-full  transition duration-300 ${
              inx === imgIndex ? "bg-neutral-600" : "bg-neutral-400"
            }`}
              ></button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoomsSlider;
