import React from "react";
import getCurrentUser from "../actions/getCurrentuser";
import getReservations from "../actions/getReservations";
import Link from "next/link";
import ClientReservation from "./clientReservation";
import NavOthers2 from "../listings/navOthers2";

const MyReservationPage = async () => {


  const currentUser = await getCurrentUser();

  if (!currentUser) {


    return (
      <div className="w-full p-6 mx-auto bg-bgcolor ">
        <NavOthers2 />
        <div className="flex justify-center items-center mx-auto w-full">
          <div className="w-3/4 mx-auto text-center my-16 mb-20">
            <p className="text-neutral-500 text-xl font-light my-2">
              Please sign in to see your reservation(s)!
            </p>
            <Link
              href="/"
              className="p-2 px-3 border bg-brown font-light text-bgcolor transition
 hover:bg-lightbrown duration-500"
            >
              Home Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });


  if (reservations.length === 0) {


    return (
      <div className="w-full p-6 mx-auto border-b ">
        <NavOthers2 />
        <div className="flex justify-center items-center mx-auto w-full">
          <div className="w-3/4 mx-auto text-center my-16 mb-24">
            <p className="text-neutral-500 text-xl font-light my-2">
              You do not have any reservation yet!
            </p>
            <Link
              href="/rooms"
              className="p-2 px-3 border bg-brown font-light text-bgcolor transition
 hover:bg-lightbrown duration-500"
            >

              Book Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-6 mx-auto ">




      <div className="flex justify-center items-center mx-auto w-full">
        <ClientReservation
          reservations={reservations}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default MyReservationPage;
