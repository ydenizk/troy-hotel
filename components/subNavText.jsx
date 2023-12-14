"use client"

import React from 'react'
import { motion } from 'framer-motion'

function SubNavText({details}) {
  return (
    <>
 <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto p-6 w-full my-20 text-center "
      >
        <h1 className="text-7xl capitalize font-serif  opacity-90  mb-16  text-black w-full px-6 sm:text-6xl xs:text-5xl ">
          {details[0].dh1}
        </h1>
        <p className="font-light"> {details[0].dp} </p>
      </motion.div>

    </>
  )
}

export default SubNavText