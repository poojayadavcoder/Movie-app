import ServerDataProvider from "@/components/ServerDataProvider";
import { PopupProvider } from "./context/PopupContext";
import "./globals.css";
import { Poppins, Lobster_Two } from "next/font/google";
import { Toaster } from "react-hot-toast";

const montserrat = Poppins({
  subsets: ["Poppins"],
  weight: ["400", "700"],
});

const lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "My App",
  description: "Movie Go Project",
};

export async function getMoviesSlider() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/movieSlider`, {
    cache: "force-cache",
  });
  return res.json();
}

export default async function RootLayout({ children }) {
   const movieSlider =await getMoviesSlider()
  return (
    <html lang="en">
      <body className={montserrat.className}>
         <PopupProvider>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </PopupProvider>
         {/* <ServerDataProvider>
          {children}
        </ServerDataProvider> */}
      </body>
    </html>
  );
}
