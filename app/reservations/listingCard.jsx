"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import RoomDetails from "@/components/roomDetails";

const ListingCard = ({
  data,
  reservation,
  onAction,
  disabled,
  id = "",

}) => {
  const router = useRouter();

  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(id);
    },
    [disabled, onAction, id]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      className="w-3/4 flex h-auto my-4  p-4 justify-center items-center bg-white  border 
    text-neutral-800 font-light rounded  shadow"
    >
      {/* className="w-full grid grid-cols-2 sm:grid-cols-none sm:grid-rows-2 justify-center items-center bg-white shadow-md " */}
      <div className="w-full h-48 relative  flex-1 ">
        <Image
          src={data.imageSrc[0] || "/rooms.jpg"}
          alt="pic"
          fill
          className="absolute object-cover rounded"
        />
      </div>
      <div className="flex-2 p-4">
        <div className=" ">
          <div className="flex items-center gap-4">
            <h1 className=" tracking-wide font-light  text-2xl   uppercase">
              {reservation.listing.title}
            </h1>
            <Link
              href={`/listings/${data.id}`}
              className="p-1 px-2 uppercase  tracking-wide text-neutral-700  text-xs bg-neutral-100
           border transition hover:bg-neutral-200 duration-500"
            >
              Go to Room Page
            </Link>
          </div>
          <RoomDetails data={data.roomsqm2} />

          <div className="font-light text-neutral-800">{reservationDate}</div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <button
            onClick={handleCancel}
            className="p-2 px-3 text-xs font-light capitalize  tracking-wide text-neutral-600  bg-red-200
              rounded transition hover:bg-red-300  duration-500"
          >
            Cancel Reservation
          </button>
          <p>
  
            Total: <span className="font-semibold"> {price}.00 € </span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs text-neutral-700 mt-2">
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
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="font-light ">Free cancellation! | Book now, pay later</p>
      </div>
      </div>
    </div>
  );
};

export default ListingCard;
