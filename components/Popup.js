"use client"
import { usePopup } from '@/app/context/PopupContext';
import { FaTimes } from 'react-icons/fa';
import Image from "next/image";

export default function Popup() {
  const {showPopup,setShowPopup,setPopId,popItem,setPopItem}=usePopup()
   if (!showPopup || !popItem) return null;
  return (
    <div>
  
        <div
          className="w-[600px] h-[450px] pb-4 border-[1px] border-white 
                        rounded-[10px] bg-black backdrop-blur-sm fixed top-1/2 left-1/2 
                         transform -translate-x-1/2 -translate-y-1/2 z-[100]
                        overflow-y-auto "
        >
          <div
            className="text-white text-[15px] absolute z-30 right-4 top-3"
            onClick={() => {
              setShowPopup(false);
              setPopId(null);
              setPopItem(null)
            }}
          >
            <FaTimes />
          </div>

          <div className="relative w-full min-h-[300px] pb-3 overflow-hidden">
            <Image
              src={popItem.mainImg}
              alt="movie"
              fill
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 z-10 
        shadow-[inset_150px_-100px_200px_rgba(0,0,0,2)]
        "
            />
          </div>
          <h1
            className="text-[26px] font-bold text-white pl-2
drop-shadow-[0_0_12px_rgba(167,139,250,0.9)]"
          >
            {popItem.title}
          </h1>
          <p className="text-white text-[12px] mt-2 pl-2">
            {popItem.description}
          </p>
          <div className="flex justify-start items-center gap-2 mt-2 pl-2">
            <button className="text-white text-[12px] border-[1px] border-violet-400 px-2 py-1 rounded-[10px]">
              {popItem.duration}
            </button>
            <div className="flex justify-start items-center gap-3">
              {popItem.genre.map((item, index) => (
                <button
                  key={index}
                  className="text-white text-[12px] border-[1px] border-violet-400 px-2 py-1 rounded-[10px]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-start items-center gap-[3px] pl-3 mt-2">
            {popItem.cast.map((item, index) => (
              <h1 className="text-white text-[13px]" key={index}>
                {item} {index === popItem.cast.length - 1 ? "" : "|"}
              </h1>
            ))}
          </div>

          <button
            className="px-[8px] py-[4px] ml-2 rounded-[10px] text-white bg-violet-400 text-[14px]
 font-semibold mt-4"
          >
            Watch Trailor
          </button>
        </div>
      
    </div>
  )
}
