import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { prisma } from "@/utils/prismaDb";

export async function POST(request) {
  const body = await request.json();
  const { email, name, password } = body.data;

  /* sonradan ekleme */
  console.log(body.data);

  if (!email || !password || !name) {
    return new NextResponse(400, { error: "missing email or password" });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    return new NextResponse("user already exists", { status: 400 });
  }
  /* sonradan ekleme SON */


  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
