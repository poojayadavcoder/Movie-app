"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import YoutubeBox from "./YoutubeBox";
import { usePopup } from "@/app/context/PopupContext";
import Link from "next/link";

export default function Slider({ initialData }) {
  const { handleWatchNow, showPlayer } = usePopup();
  return (
    <>
      <div className="w-full h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden bg-black">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          className="w-full h-full"
        >
          {initialData.map((slide, index) => {
            return (
              <SwiperSlide
                key={index || slide._id}
                className="w-full h-full relative"
              >
                <div className="w-full h-full overflow-hidden relative">
                  <Image
                    src={slide.image}
                    alt={slide.title || "movie-poster"}
                    fill
                    className=" w-full h-full object-cover object-top"
                  />

                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/70 to-black/50"></div>
                  <div className=" absolute bottom-[3%] md:bottom-[10%] left-[20px] md:left-[50px] xl:left-[100px] z-30 w-[90%] sm:w-[70%] lg:w-[500px] min-h-[100px] flex justify-start items-start gap-2 md:gap-5 flex-col text-[13px] sm:text-[16px]">
                    <h1 className="text-[2.1em] font-bold text-white [text-shadow:_2px_2px_8px_rgba(0,0,0,0.8),_0_0_12px_violet]">
                      {slide.title}
                    </h1>
                    <p className="text-[1em] text-white">{slide.description}</p>
                    <div className="flex justify-center items-center gap-3 flex-row">
                      <button className="bg-black text-white text-[0.9em] border-[1px] cursor-pointer font-semibold rounded-[5px] bg-gradient-to-tl from-violet-400 via-pink-500 to-violet-950 p-[2px] w-[100px] sm:w-[150px] h-[30px] sm:h-[45px]">
                        <Link
                          className="w-full h-full bg-black rounded-[5px] flex justify-center items-center"
                          href="/pages/movies"
                        >
                          Explore More
                        </Link>
                      </button>
                      <button className="bg-black text-white text-[0.9em] border-[1px] cursor-pointer font-semibold rounded-[5px] bg-gradient-to-tl from-violet-400 via-pink-500 to-violet-950 p-[2px] w-[100px] sm:w-[150px] h-[30px] sm:h-[45px]">
                        <div
                          onClick={() => handleWatchNow(slide.videoUrl)}
                          className="w-full h-full bg-black rounded-[5px] flex justify-center items-center"
                        >
                          Watch Now
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {showPlayer && <YoutubeBox />}
    </>
  );
}
