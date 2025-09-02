"use client";

import { FaStar, FaPlay, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function MovieBox({ movieData }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const swiperRef = useRef(null);
  const handleWatchNow = (url) => {
    let embedUrl = url;
    if (url.includes("watch?v=")) {
      embedUrl = url.replace("watch?v=", "embed/");
    }
    embedUrl += "?autoplay=1";
    setCurrentVideo(embedUrl);
    setShowPlayer(true);
  };

  const closePlayer = () => {
    setShowPlayer(false);
    setCurrentVideo("");
  };
  return (
    <div className="bg-black w-full min-h-[350px] pt-[10px]">
      <div className="relative w-[98%] h-[330px] mx-auto">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute left-2 top-1/2 -translate-y-1/2 
                 z-10 p-2 bg-black/80 border-[1px] border-violet-400
                 rounded-full text-violet-400 hover:cursor-pointer
                hover:bg-black"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute right-2 top-1/2 -translate-y-1/2
              z-10 p-2 cursor-pointer bg-black/50 border-[1px] border-violet-400 rounded-full text-violet-400
               hover:bg-black "
        >
          <FaChevronRight size={20} />
        </button>

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          className="w-full h-full"
          breakpoints={{
            320: { slidesPerView: 2 }, // Mobile
            640: { slidesPerView: 3 }, // Small tablets
            1024: { slidesPerView: 4 }, // Tablets / small desktops
            1280: { slidesPerView: 5 }, // Large desktops
          }}
        >
          {movieData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link href={`/movies/${item.id}`}>
                  <div
                    className="w-full lg:w-[230px] h-[300px] overflow-hidden rounded-[15px] relative shadow-xs shadow-violet-400 group"
                  >
                    <div className="w-full h-[300px] relative overflow-hidden rounded-[10px]">
                      <Image
                        src={item.poster}
                        fill
                        alt="movie-poster"
                        className="group-hover:scale-110 transition-all object-cover duration-150 ease-linear"
                      />

                      <div className="w-full h-full bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => handleWatchNow(item.videoUrl)}
                          className="flex items-center gap-2 bg-violet-400 text-black text-[14px] px-4 py-2 rounded-lg  font-semibold transition hover:bg-violet-500"
                        >
                          <FaPlay className="text-white text-[14px]" />
                          Watch Now
                        </button>
                      </div>

                      <div
                        className="flex justify-between items-center w-full absolute bottom-0 left-0 bg-black py-[10px] px-[5px]"
                      >
                        <h1
                          className="text-violet-400 text-[12px] sm:text-[16px] font-semibold truncate "
                        >
                          {item.title}
                        </h1>

                        <div className="text-gray-100 bg-violet-400 rounded-[5px] text-[14px] flex justify-center items-center px-2">
                          {item.rating}&nbsp;
                          <span>
                            <FaStar color="gold" size={11} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {showPlayer && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
        >
          <div
            className="p-4 rounded-xl relative max-w-4xl w-full"
          >
            <button
              onClick={closePlayer}
              className="absolute top-2 right-2 text-white text-xl"
            >
              <FaTimes />
            </button>
            <iframe
              width="800"
              height="450"
              src={currentVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
