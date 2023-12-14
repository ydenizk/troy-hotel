"use client";

import React from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import ListingCard from "./listingCard";

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
    <div className="w-full p-2 flex flex-col ">
      {reservations.map((reservation) => {
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
  );
};

export default ClientReservation;
