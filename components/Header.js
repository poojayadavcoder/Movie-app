"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';
import { useEffect, useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [isDark,setIsDark]=useState(false)
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
      className={`w-full h-[60px] fixed top-0 left-0 z-50 flex justify-between items-center px-3 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-black/70"
      }`}
    >
    <h1 className="logo text-2xl text-violet-400"
// aria-hidden="true"
>
Movie <span className='text-white'>Go</span>
</h1>
     <ul className='flex gap-6 font-semibold '>
        <li>
         <Link
           href="/"
           className={pathname === "/" ? " border-[1px]  border-violet-400 px-2 py-1 rounded-[8px] text-violet-400" : 
            "text-white"}
          >
            Movies
          </Link>
        </li>
        <li>
         <Link
           href="/about"
           className={pathname === "/about" ?"border-[1px]  border-violet-400 px-2 py-1 rounded-[8px] text-violet-400" : 
            "text-white"}
          >
            About
          </Link>
        </li>
        <li>
         <Link
           href="/contact"
           className={pathname === "/contact" ? "border-[1px]  border-violet-400 px-2 py-1 rounded-[8px] text-violet-400" : 
            "text-white"}
          >
            Contact
          </Link>
        </li>
     </ul>
     <div className=''>
        <button className='text-white'
        onClick={()=>setIsDark(pre=>!pre)}>
        {
         isDark?<SunIcon/>:<MoonIcon/>
        }
        </button>
     </div>
    </div>
  )
}
