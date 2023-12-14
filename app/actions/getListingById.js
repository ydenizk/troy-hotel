import { prisma } from "@/utils/prismaDb";

export default async function getListingById(params) {
  try {
    const { listingId } = params;

    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      //buna gerek olmayabilir.listing den user ı cıkarttım
   
    });

    if (!listing) {
      return null;
    }

    return listing;
  } catch (error) {
    throw new Error(error);
  }
}
