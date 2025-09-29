"use client";
import Image from "next/image";
import { useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Mousewheel } from "swiper/modules";
import { usePopup } from "@/app/context/PopupContext";
import Link from "next/link";

export default function UpcomingMovie({ upcomingMovieData }) {
  const {showPopup,setShowPopup,PopId,setPopId,setPopItem}=usePopup()
  const item = upcomingMovieData.find((item) => item.id === PopId);
 
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
          <div className="absolute right-[30px] -top-[45px] rounded-[10px] flex bg-gradient-to-r from-violet-400 to-pink-400 justify-center items-center cursor-pointer overflow-hidden px-2 py-[3px]">
            <span className="text-white z-30 relative text-[12px] sm:text-[16px]">
              <Link href="/pages/movies">View All</Link>
            </span>
            <div className="w-[100%] h-[100%] bg-black rounded-[20px] absolute inset-0"></div>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            freeMode={{ enabled: true, momentum: true }}
            grabCursor={true}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            modules={[Navigation, Mousewheel]}
            simulateTouch={true}
             breakpoints={{
            480: { slidesPerView: 1 },
            520: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1100: { slidesPerView: 4 }, 
          }}
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
                <div className="w-[100%] lg:w-[295px] h-[250px]">
                  <div className="w-full h-[200px] sm:h-[175px] p-[1px] rounded-2xl bg-gradient-to-tl from-violet-400 via-pink-500 to-violet-950">
                  <div className="w-full h-full relative overflow-hidden
                   rounded-2xl ">
                    <Image
                      src={item.bannerImage}
                      fill
                      alt={item.title || "Movie Poster"}
                      className="object-cover object-top"
                    />
                  </div>
                  </div>
                  <div className="pl-2 pt-3">
                    <h1 className="text-white text-[16px] font-semibold">
                      {item.title}
                    </h1>
                    {item.genre.map((item, index) => (
                      <span
                        className="text-white text-[13px] mt-2"
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
