
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UpcomingMovie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/movies/upcomingMovies");
      const mainData = await res.json();
      const sliceData=mainData.slice(0,3)
      setData(sliceData);
    }

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-[250px] bg-black">
      <h1 className="text-2xl font-semibold text-violet-400 px-3 ">Upcoming Movies</h1>
       <div className="w-full min-h-[200px] grid grid-cols-3
        place-items-center mt-5">
        {
            data.map((item,index)=>{
                return (
                    <div className="w-[295px] h-[250px] overflow-hidden" key={item.id}>
                        <div className="w-full h-[175px] relative overflow-hidden rounded-2xl border-[1px] border-violet-400">
                            {/* <img src={item.bannerImage} className="w-full h-full object-cover" alt="" /> */}
                            <Image 
                            src={item.bannerImage}
                            fill 
                            alt={item.title||"Movie Poster"}
                            className="w-full h-full object-fill"/>
                        </div>
                      <div className="pl-2 pt-3">
                        <h1 className="text-white text-[13px] font-semibold">{item.title}</h1>
                      {
                        item.genre.map((item,index)=><span className="text-white text-[11px] font-semibold mt-2" key={index}>{item} &nbsp;{index==0?"|":""} &nbsp;</span>)
                      }
                      <span className="text-[12px] text-violet-400"><span className="text-white">(</span>&nbsp;{item.director}&nbsp;<span className="text-white">)</span></span>
                      </div>
                    </div>
                )
            })
        }
       </div>
    </div>
  );
}
