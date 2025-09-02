"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider({ initialData }) {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden bg-amber-400">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        // spaceBetween={10}
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
                  // quality={100}
                  priority
                  fill
                  className=" w-full h-full object-cover"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black/60"></div>
                <div className=" absolute bottom-[40px] sm:bottom-[130px] left-[20px] md:left-[50px] xl:left-[100px] z-30 w-auto sm:w-[340px] h-[200px] flex justify-start items-start gap-3 flex-col">
                  <h1 className="text-xl sm:text-3xl font-bold text-white [text-shadow:_0_0_4px_violet]">
                    {slide.title}
                  </h1>
                  <p className="text-[12px] sm:text-[14px] text-white ">
                    {slide.description}
                  </p>
                  <div className="flex justify-center items-center gap-3">
                    <button className="bg-black text-violet-400 text-[11px] sm:text-[14px] border-[1px] border-violet-400 hover:bg-violet-400 hover:text-white cursor-pointer transition-all duration-150 ease-linear font-semibold rounded-[5px] px-3 py-[4px]">
                      Explore More
                    </button>
                    <button className="bg-black text-violet-400 text-[11px] sm:text-[14px] border-[1px] border-violet-400 font-semibold rounded-[5px] px-3 py-[4px] hover:bg-violet-400 hover:text-white cursor-pointer transition-all duration-150 ease-linear">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
