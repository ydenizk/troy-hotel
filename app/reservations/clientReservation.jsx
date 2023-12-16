"use client";

import React from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import ListingCard from "./listingCard";
import NavOthers2 from "../listings/navOthers2";

const ClientReservation = ({ reservations, currentUser }) => {
  const [deletingId, setDeletingId] = useState("");
  const router = useRouter();

  const onCancel = useCallback(
    (id) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (

    <div className="w-full border-b " >
      <NavOthers2 />


    <div className="w-full p-2 flex flex-col my-10 ">
    <h1 className="text-3xl text-neutral-700 border-b border-orange-800 mb-8">My Reservations</h1>
      {reservations?.map((reservation) => {
        return (
          <ListingCard 
          key={reservation.id}
          data={reservation.listing}
          reservation={reservation}
          id={reservation.id}
          onAction={onCancel}
          disabled={deletingId === reservation.id}
          currentUser={currentUser}
          
          
          />
        );
      })}
    </div>
          
    </div>
  );
};

export default ClientReservation;
