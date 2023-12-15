"use client";

import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { differenceInDays, eachDayOfInterval } from "date-fns";
import ListingReservation from "@/components/listingReservation";
import { GeneralContext } from "@/context/generalContext";
import { useSession } from "next-auth/react";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const ListingClient = ({ listing, currentUser, reservations = [] }) => {
  const router = useRouter();
  const { status, data: session } = useSession();

  const disabledDates = useMemo(() => {
    let dates = [];

    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

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

  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState(initialDateRange);

  const onCreateReservation = useCallback(
    ({ note, phone }) => {
      if (status === "unauthenticated") {
        toast.error("Please sign in to complete reservation !");
        return;
      }
      setIsLoading(true);
      setShowSuccessMessage(false);

      axios
        .post("/api/reservations", {
          totalPrice,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          listingId: listing?.id,
          note,
          phone,
        })
        .then(() => {
          toast.success("Your reservation has been completed successfully!");
          setShowSuccessMessage(true);
          setDateRange(initialDateRange);

          setPhone("");
          setNote("");
        })
        .catch(() => {
          toast.error("Something went wrong.");
          setShowSuccessMessage(false);
        })
        .finally(() => {
          setIsLoading(false);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
          router.push("/reservations");
        });
    },
    [
      totalPrice, 
      dateRange, 
      listing?.id, 
      router, 
      setIsLoading, 
      setNote, 
      setPhone, 
      setShowSuccessMessage, 
      status
    ]
  );

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

  const [imgIndex, setImgIndex] = useState(0); //left,image slider için...

  return (
    <div
      className="w-full grid grid-cols-2 gap-6 mt-20 mmd:grid-cols-none mmd:grid-rows-2 mmd:gap-2 
    mx-auto items-center sm:justify-center"
    >
      <div className="flex flex-col gap-2 w-full mmd:order-2 xs:mx-2  ">
        <div className="relative h-96 xs:h-80 w-full flex  items-center overflow-hidden">
          {listing?.imageSrc.map((dt, index) => {
            return (
              <div
                key={dt}
                className="w-full  h-96 xs:h-80 bg-cover bg-center absolute transition-transform duration-500"
                style={{
                  backgroundImage: `url(${dt})`,
                  left: `${index * 100}%`,
                  transform: `translateX(-${imgIndex * 100}%)`,
                }}
              ></div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-1">
          {listing.imageSrc.map((b, inx) => {
            return (
              <div
                onClick={() => setImgIndex(inx)}
                key={inx}
                style={{
                  backgroundImage: `url(${b})`,
                }}
                className={`h-44 mmd:h-36 xs:h-32 w-full bg-cover bg-center cursor-pointer transition-all duration-500 border-2 ${
                  inx === imgIndex ? "border-neutral-400" : "border-neutral-100"
                }`}
              ></div>
            );
          })}
        </div>

        <div className="w-full my-10 ">
          <h1 className="text-2xl   w-full text-neutral-600 tracking-wide  mb-8 xs:mx-4 ">
            Room Facilities
          </h1>
          <div className="grid grid-cols-2 items-center gap-4 font-light text-neutral-500 xs:gap-2 xs:mx-4 ">
            <h3>Air Condition</h3>
            <h3>Breakfast Included</h3>
            <h3>Telephone</h3>
            <h3>Hairdryer</h3>
            <h3>Mini Bar</h3>
            <h3>Balcony or Garden</h3>
            <h3>Smart TV</h3>
            <h3>Non Smoking</h3>
            <h3>Wifi Acess</h3>
            <h3>Mini Fridge</h3>
          </div>
        </div>
      </div>
      {/* rezervasyon dahil sag kısım.... */}
      <div className="p-6 mmd:border-b  xs:text-center ">
        <h1 className="text-3xl tracking-wide font-light mb-6 xs:mb-3 text-neutral-700  uppercase">
          {listing.title}
        </h1>

        <p className="font-light tracking-wide    text-neutral-500 mb-6">
          {listing.description.substring(0, listing.description.indexOf("."))}.
        </p>

        <div className="flex items-end  gap-4 mb-6">
          <p className="text-lg font-light text-neutral-500">
            {" "}
            {listing.price}€ /night{" "}
          </p>
          <span className="text-neutral-300 pb-1 text-xs">
            {" "}
            * All taxes included!
          </span>
        </div>

        {/* Calender kısımı */}
        <div className="">
          <ListingReservation
            totalPrice={totalPrice}
            onChangeDate={(value) => setDateRange(value)}
            disabledDates={disabledDates}
            dateRange={dateRange}
            disabled={isLoading}
            onSubmit={onCreateReservation}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingClient;
