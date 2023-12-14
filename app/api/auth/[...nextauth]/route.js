import NextAuth from "next-auth/next";
import { prisma } from "@/utils/prismaDb";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import  CredentialsProvider  from "next-auth/providers/credentials";


export const authOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
    
      GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      }),
      CredentialsProvider({
        name: 'credentials',
        credentials: {
          email: { label: 'email', type: 'text' },
          password: { label: 'password', type: 'password' }
        },
        async authorize(credentials) {

          //check if emial and password valid
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Invalid credentials');
          }
  
          //check if user exists
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          });
          
  
         /*  if (!user || !user?.hashedPassword) {
            throw new Error('Invalid credentials');
          }  */

          if(!user){
            throw new Error('Invalid credentials');
          }
  
          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );
  
          if (!isCorrectPassword) {
            throw new Error('Invalid credentials');
          }
  
          return user;
        }
      })
    ],
/*     pages:{signIn:"/"},  */
    debug: process.env.NODE_ENV === 'development',
session: {
  strategy: "jwt",  
},
    secret:process.env.NEXTAUTH_SECRET 
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };
  