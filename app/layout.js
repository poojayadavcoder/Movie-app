import "./globals.css";
import { Montserrat, Lobster_Two } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
