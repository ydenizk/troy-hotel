"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/newsletter", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email,
        }),
      });
      if (res.ok) {
        setEmail("");
        toast.success("Thank you for email subsciption.");
      }
      if (!res.ok) {
        toast.error("An error occurred.");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center pb-12   "
      >
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-neutral-300 w-56 mmd:w-48  text-neutral-500 text-sm p-3 border-r-0 shadow-none outline-none  "
            placeholder="Your email adress"
          />
        </div>
        <button
          type="submit"
          className="border bg-neutral-400 text-white p-[15px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </button>
      </form>
      <Toaster />
    </>
  );
};
