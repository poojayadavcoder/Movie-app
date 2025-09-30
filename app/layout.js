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


export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
         <PopupProvider>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </PopupProvider>
      </body>
    </html>
  );
}
