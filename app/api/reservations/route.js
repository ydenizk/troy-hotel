import { NextResponse } from "next/server";
import { prisma } from "@/utils/prismaDb";
import getCurrentUser from "@/app/actions/getCurrentuser";

export async function POST(
    request
  ) {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      return NextResponse.json({mesage:"not a currentuser....."});
    }
  
    const body = await request.json();
    const { 
      listingId,
      startDate,
      endDate,
      totalPrice,
      phone,
      note
     } = body;
  
     if (!listingId || !startDate || !endDate || !totalPrice || !phone) {
      return NextResponse.json({mesage:"startdate,endate,totalprice,lişstingI,phone  one of them is miisng....."})
    }
  
    const listingAndReservation = await prisma.listing.update({
      where: {
        id: listingId
      },
      data: {
        reservations: {
          create: {
            userId: currentUser.id,
            startDate,
            endDate,
            totalPrice,
            phone,
            note
          }
        }
      }
    });
  
    return NextResponse.json(listingAndReservation);
  }
  