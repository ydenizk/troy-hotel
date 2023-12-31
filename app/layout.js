import "./globals.css";
import { GeneralContextProvider } from "@/context/generalContext";
import { Footer } from "@/components/footer";
import { NextAuthProvider } from "@/components/providers/providers";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden m-0 p-0 ">

          <NextAuthProvider>
            <GeneralContextProvider>
              {children}
              <Footer />
            </GeneralContextProvider>
          </NextAuthProvider>

      </body>
    </html>
  );
}
