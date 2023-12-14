import React from "react";
import getCurrentUser from "@/app/actions/getCurrentuser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import ListingClient from "./listingClient";
import Image from "next/image";
import SecondOverlay from "@/components/secondOverlay";
import NavOthers2 from "../navOthers2";


const SingleListingPage = async ({ params }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser(params);

  

  return (
    <div className="w-full justify-center items-center flex border-b pb-8 ">
      <div className="mx-auto p-6 w-full bg-white ">
   
        <NavOthers2 listing={listing} />

        <ListingClient
          listing={listing}
          reservations={reservations}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default SingleListingPage;
