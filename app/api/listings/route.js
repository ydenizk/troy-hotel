
import { prisma } from "@/utils/prismaDb";
import { NextResponse } from "next/server";


export async function GET() {
    try {
      const listings = await prisma.Listing.findMany({
        orderBy: { createdAt: "desc" },
      });
      return NextResponse.json(listings);
    } catch (error) {
      console.log(error);
      return NextResponse.json("sth went wrong about rooms...", { status: 500 });
    }
  }
  

