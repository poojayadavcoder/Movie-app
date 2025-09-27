"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { usePopup } from "@/app/context/PopupContext";

export default function Header() {
  // const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const { showPopup,token, logout } = usePopup();
  const pathname = usePathname();
  // const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-[80px] fixed top-0 left-0 z-50 flex text-[13px] md:text-[16px] 
        justify-between items-center px-3 transition-colors
         duration-300 ${showPopup ? "blur-sm pointer-events-none" : ""} ${
        isScrolled ? "bg-black" : "bg-black/70"
      }`}
    >
      <h1 className="logo text-[2em] text-violet-400 shadowLogo">
        Movie <span className="text-violet-400">Go</span>
      </h1>
      <ul className="hidden md:flex gap-6 font-semibold text-[1.2em]">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? " border-[1px]  border-violet-400 px-2 py-1 rounded-[8px] text-violet-400"
                : "text-white"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/pages/movies"
            className={
              pathname === "/pages/movies"
                ? "border-[1px]  border-violet-400 px-2 py-1 rounded-[8px] text-violet-400"
                : "text-white"
            }
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            href="/pages/watchlist"
            className={
              pathname === "/pages/watchlist"
                ? "border-[1px]  border-violet-400 px-2 py-1 rounded-[8px] text-violet-400"
                : "text-white"
            }
          >
            Favorites

          </Link>
        </li>
      </ul>
      <div className="flex gap-3">
        <div>
          <a
           onClick={token ? logout : () => (window.location.href = "/pages/login")}
            href="/pages/login"
            className="text-white text-[1.2em] font-semibold hover:text-violet-400"
          >
            {token?"Log Out":"Login"}
          </a>
        </div>
        {/* <button className='text-white'
        onClick={()=>setIsDark(pre=>!pre)}>
        {
         isDark?<SunIcon/>:<MoonIcon/>
        }
        </button> */}
      </div>
    </div>
  );
}
