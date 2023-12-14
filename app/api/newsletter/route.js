import { prisma } from "@/utils/prismaDb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email is missing." },
        { status: 400 }
      );
    }

    const newEmail = await prisma.newsletter.create({
      data: {email},
    });
    return NextResponse.json(newEmail);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "An error occurred." },
      { status: 500 }
    );
  }
};
