"use client";

import React, { useContext, useState, useEffect } from "react";
import { Range } from "react-date-range";
import Calendar from "./calendar";
import { GeneralContext } from "@/context/generalContext";
import { useSession } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const ListingReservation = ({
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,

  disabledDates,
  currentUser,
}) => {
  const {
    phone,
    setPhone,
    note,
    setNote,
    isLoading,
    setIsLoading,
    showSuccessMessage,
    setShowSuccessMessage,
  } = useContext(GeneralContext);

  const { status, data: session } = useSession();

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(0);
  }, []);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  return (
    <div className="mx-auto w-full">
      {/* tab1  */}

      <div className="w-full shadow-md border border-neutral-100 p-2  ">
        <div
          onClick={() => toggleTab(0)}
          className="w-full flex justify-between items-center"
        >
          <div className="flex justify center items-center gap-2">
            <h3 className="w-[42px] h-8 bg-lightbrown rounded-full text-center pt-[3px] text-lg text-neutral-600">
              1
            </h3>
            <h1 className="text-2xl pl-2  w-full text-neutral-600 tracking-wide  ">
              Availability
            </h1>
          </div>

          <div className="">
            {activeTab === 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 font-bold text-neutral-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 font-bold text-neutral-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            activeTab === 0 ? "h-[328px]" : "h-0"
          }`}
        >
          <Calendar
            value={dateRange}
            disabledDates={disabledDates}
            onChange={(value) => onChangeDate(value.selection)}
          />
        </div>
      </div>

      {/* tab 1 son..... */}

      {/* tab2.. */}
      <div className="w-full shadow-md border border-neutral-100 p-2 my-2  transition-all duration-500 ">
        <div
          onClick={() => toggleTab(1)}
          className="w-full flex justify-between items-center"
        >
          <div className="flex justify center items-center gap-2">
            <h3 className="w-[44px] h-8 bg-lightbrown rounded-full text-center pt-[3px] text-lg text-neutral-600">
              2
            </h3>
            <h1 className="text-2xl pl-2  w-full text-neutral-600 tracking-wide  ">
              Details
            </h1>
          </div>
          <div className="transition-all duration-500">
            {activeTab === 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 font-bold text-neutral-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 font-bold text-neutral-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            activeTab === 1 ? "h-56" : "h-0"
          }`}
        >
          <div className="my-4 mt-8 px-2">
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className=" border p-3 text-neutral-500 outline-none focus:border-neutral-400 "
            />
          </div>
          <div className="px-2">
            <textarea
              placeholder="Any personel requests?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full border h-24 p-2 text-neutral-500 outline-none focus:border-neutral-400"
            />
          </div>
        </div>
      </div>
      {/* TOTAL Price........ */}
      <div className="text-xl font-light text-neutral-800 flex items-center mt-8 mb-4 gap-4">
        <span className="font-normal text-neutral-700">TOTAL:</span>
        {totalPrice}.00 €
      </div>

      <button
        onClick={() => onSubmit({ note, phone })}
        className="my-4 text-center p-2 cursor-pointer bg-lightbrown 
        rounded-lg
        text-neutral-800
        hover:opacity-90
        transition
        duration-500
        w-full
        uppercase
        tracking-wide
        "
      >
        {isLoading ? (
          <div role="status" className="text-center mx-auto">
            <svg
              aria-hidden="true"
              class="w-7 h-7 text-gray-200 animate-spin dark:text-neutral-700 fill-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Book"
        )}
      </button>
      {status === "unauthenticated" ? (
        <p className="text-sm text-red-300 w-full text-center font-light sm:text-xs">
          Please sign in to complete reservation !
        </p>
      ) : null}
      {showSuccessMessage ?(
        <p className="text-sm text-green-700 w-full text-center font-light sm:text-xs">
          Your reservation has been completed successfully!
        </p>
      ): null}
      <Toaster />
     
      <div className="flex items-center gap-1 text-sm text-neutral-700 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="font-light sm:text-xs">Free cancellation! | Book now, pay later</p>
      </div>
    </div>
  );
};

export default ListingReservation;
