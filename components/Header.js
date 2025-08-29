"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';
import { useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [isDark,setIsDark]=useState(false)
  return (
    <div className='w-full h-[80px] bg-black flex justify-between items-center px-3'>
     <h1 className='text-violet-400'>Movie App</h1>
     <ul className='flex gap-6 font-semibold '>
        <li>
         <Link
           href="/"
           className={pathname === "/" ? " border-[1px]  border-violet-400 px-2 py-1 rounded-[8px] text-violet-400" : 
            "text-white"}
          >
            Home
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
