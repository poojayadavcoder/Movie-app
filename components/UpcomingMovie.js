"use client";
import Image from "next/image";
import { useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Mousewheel } from "swiper/modules";
import { usePopup } from "@/app/context/PopupContext";

export default function UpcomingMovie({ upcomingMovieData }) {
  const {showPopup,setShowPopup,PopId,setPopId,setPopItem}=usePopup()
  const item = upcomingMovieData.find((item) => item.id === PopId);
 console.log(upcomingMovieData)
  console.log(item)
     useEffect(() => {
    if (PopId) {
      const item = upcomingMovieData.find((i) => i.id === PopId);
      setPopItem(item);
    }
  }, [PopId,upcomingMovieData]);
  
  return (
    <>
      <div className={`w-full min-h-[250px] bg-black pt-3 
        ${showPopup?"blur-sm pointer-events-none":""}`}>
        <h1 className="text-[18px] font-semibold text-violet-400 px-3 ">
          Upcoming Movies
        </h1>
        <div className="w-full min-h-[200px]  place-items-center mt-3 relative flex justify-center items-center px-3">
          <div className="absolute right-[30px] -top-[40px] rounded-[10px] flex bg-gradient-to-r from-violet-400 to-pink-400 justify-center items-center cursor-pointer overflow-hidden px-2 py-[3px]">
            <span className="text-white z-30 relative text-[12px]">
              View All
            </span>
            <div className="w-[100%] h-[100%] bg-black rounded-[20px] absolute inset-0"></div>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            freeMode={{ enabled: true, momentum: true }}
            grabCursor={true}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            modules={[Navigation, Mousewheel]}
            simulateTouch={true}
            className="mt-5 w-full"
          >
            {upcomingMovieData.map((item) => (
              <SwiperSlide
                key={item.id}
                onClick={() => {
                  setShowPopup(true);
                  setPopId(item.id);
                }}
              >
                <div className="w-[295px] h-[250px]">
                  <div className="w-full h-[175px] relative overflow-hidden rounded-2xl border-[1px] border-violet-400">
                    <Image
                      src={item.bannerImage}
                      fill
                      alt={item.title || "Movie Poster"}
                      className="object-cover"
                    />
                  </div>
                  <div className="pl-2 pt-3">
                    <h1 className="text-white text-[13px] font-semibold">
                      {item.title}
                    </h1>
                    {item.genre.map((item, index) => (
                      <span
                        className="text-white text-[11px] font-semibold mt-2"
                        key={index}
                      >
                        {item} &nbsp;{index == 0 ? "|" : ""} &nbsp;
                      </span>
                    ))}
                    <span className="text-[12px] text-violet-400">
                      <span className="text-white">(</span>&nbsp;{item.director}
                      &nbsp;<span className="text-white">)</span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
         </>
  );
}
