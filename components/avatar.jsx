"use client";

import React, { useContext } from "react";
import { GeneralContext } from "@/context/generalContext";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Link from "next/link";
const Avatar = () => {
  const { logSideOpen, setLogSideOpen } = useContext(GeneralContext);
  const { status, data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <div
        className="tracking-wide group cursor-pointer relative inline-block opacity-80
       p-[62x]  transition-opacity hover:opacity-95  xs:opacity-100 xs:w-[30px]"
      >
        {status === "authenticated" ? (
          <>
            <Image
              src={session?.user?.image || "/brown.png"}
              width={35}
              height={35}
              className="rounded-full "
              alt="profile logo"
            />
            <div
              className="absolute top-0 -left-[70px] opacity-0 invisible transition-opacity
               duration-500 ease-in-out group-hover:opacity-100 group-hover:visible  "
            >
              <ul className="mt-12 bg-bgcolor p-2 xs:mt-8">
                <li>
                  {/*  */}
                  <button
                    onClick={() => signOut()}
                    className="text-neutral-600 text-sm  transition hover:text-lightbrown whitespace-nowrap"
                  >
                    Sign Out
                  </button>
                </li>
                <li>
                  <Link
                    href="/reservations"
                    className="text-neutral-600 text-sm transition  hover:text-lightbrown whitespace-nowrap"
                  >
                    My reservations
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Image
              src="/placeholder.jpg"
              width={35}
              height={35}
              className="rounded-full "
              alt="profile logo"
            />
            <div
              className="absolute top-0 -left-4 opacity-0 invisible transition-opacity
               duration-500 ease-in-out group-hover:opacity-100 group-hover:visible"
            >
              <ul className="mt-12 bg-bgcolor p-2">
                <li>
                  {/*  */}
                  <button
                    onClick={() => setLogSideOpen(!logSideOpen)}
                    className="text-neutral-600 text-sm  transition  hover:text-lightbrown"
                  >
                    Regsiter
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Avatar;
