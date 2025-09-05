"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Mousewheel } from "swiper/modules";
import { FaTimes } from "react-icons/fa";

export default function UpcomingMovie({ upcomingMovieData }) {
  const [showPopup, setShowPopup] = useState(false);
  const [PopId, setPopId] = useState(null);

  const popItem = upcomingMovieData.find((item) => item.id === PopId);

  return (
    <>
      <div className="w-full min-h-[250px] bg-black">
        <h1 className="text-[18px] font-semibold text-violet-400 px-3 ">
          Upcoming Movies
        </h1>
        <div className="w-full min-h-[200px]  place-items-center mt-1 relative flex justify-center items-center px-3">
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
                      className="object-cover "
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

      {showPopup && (
        <div
          className="w-[600px] h-[450px] pb-4 border-[1px] border-white 
                        rounded-[10px] bg-black fixed top-1/2 left-1/2 
                         transform -translate-x-1/2 -translate-y-1/2 z-[100]
                        overflow-y-auto "
        >
          <div
            className="text-white text-[15px] absolute z-30 right-4 top-3"
            onClick={() => {
              setShowPopup(false);
              setPopId(null);
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
      )}
    </>
  );
}
