import { prisma } from "@/utils/prismaDb";

export default async function getReservations(params) {
    try {
      const { listingId, userId} = params;
  
      const query = {};
  
      //listing lerde kullanılmnası için
      if (listingId) {
        query.listingId = listingId;
      }
  
      //my trips yada eskı rezervasyonları görmek içibn user ların-reservations olarak açtım bunu.Myreservationpage
      if (userId) {
        query.userId = userId;
      }
  
      //admin olarak tüm rezervasyonları görmek için
    /*   if (authorId) {
        query.listing = { userId: authorId };
      } */
  
      const reservations = await prisma.reservation.findMany({
        where: query,
        include: {
          listing: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
  
      return reservations;
    } catch (error) {
      throw new Error(error);
    }
  }
  