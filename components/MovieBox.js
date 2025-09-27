"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar, FaPlay, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePopup } from "@/app/context/PopupContext";
import { FaHeart } from "react-icons/fa";

export default function MovieBox({ movieData,favorites,setFavorites }) {
  const {handleWatchNow,showPlayer}=usePopup()
  const swiperRef = useRef(null);
  
  // useEffect(() => {
  //   if (favorites.length === 0) return;

  //   const saveFavorites = async () => {
  //     try {
  //       const res = await fetch("/api/favorites", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(favorites),
  //       });

  //       const data = await res.json();
  //       console.log("Saved favorites:", data);
  //     } catch (error) {
  //       console.error("Error saving favorites:", error);
  //     }
  //   };

  //   saveFavorites();
  // }, [favorites]);

    // const toggleFav = (movie) => {
    //     const isFavorite = favorites.some(fav => fav.id === movie.id);
    //      if (isFavorite) {
    //         setFavorites(favorites.filter(fav => fav.id !== movie.id));
    //       } else {
    //         setFavorites([...favorites, movie]);
    //        }
    //       }

// console.log(favorites)

  return (
    <div className={`bg-black w-full min-h-[350px] pt-5 px-3 `}>
      <div className="relative w-[100%] min-h-[330px] mx-auto ">
        <div className="absolute right-[30px] -top-[45px] rounded-[10px] flex bg-gradient-to-r from-violet-400 to-pink-400 justify-center items-center cursor-pointer overflow-hidden px-2 py-[3px]">
            <span className="text-white z-30 relative text-[12px] sm:text-[16px]">
              View All
            </span>
            <div className="w-[100%] h-[100%] bg-black rounded-[20px] absolute inset-0"></div>
          </div>
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
          spaceBetween={10}
          className="w-[100%] h-full mx-auto"
          breakpoints={{
            320:{slidesPerview:1},
            480: { slidesPerView: 2 }, // Mobile
            640: { slidesPerView: 3 }, // Small tablets
            1024: { slidesPerView: 4 }, // Tablets / small desktops
            1280: { slidesPerView: 5 }, // Large desktops
          }}
        >
          {movieData.map((item) => {
            //  const isFavorite = favorites.some(fav => fav.id === item.id);
            return (
              <SwiperSlide key={item.id}>
                  <div
                    className="w-[95%] sm:w-[95%] min-h-[300px] mx-auto
                     rounded-[15px] relative my-3 shadow-[0_0_2px_2px_rgba(139,92,246,0.5)] p-2 group"
                  >
                    <div className="w-full h-[240px] relative overflow-hidden
                     rounded-[10px]">
                      <Image
                        src={item.poster}
                        fill
                        alt="movie-poster"
                        className="group-hover:scale-110 transition-all 
                        object-cover object-top duration-150 ease-linear"
                      />

                      <div className="w-full h-full bg-black/50 absolute top-0
                       left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       flex justify-between items-start gap-[2px]">
                        <button
                          onClick={() => handleWatchNow(item.videoUrl)}
                          className="flex items-center gap-2
                           bg-violet-400  text-black
                            text-[12px] px-2 py-2 rounded-lg font-semibold transition
                             hover:bg-violet-500"
                        >
                          <FaPlay className="text-white text-[12px]" />
                          Watch Now
                        </button>
                        <button className="flex items-center gap-2 bg-violet-400  text-black
                            text-[12px] px-2 py-2 rounded-lg font-semibold transition hover:bg-violet-500">
                          <Link href={`/pages/movies/${item.id}`}>Explore Now</Link>
                        </button>
                      </div>
                      
                       </div>

                      <div
                        className="flex justify-between items-center
                         w-full absolute bottom-0 left-0
                         py-[10px] px-[5px]"
                      >
                        <h1
                          className="text-violet-400 text-[12px] 
                          sm:text-[14px] font-semibold truncate "
                        >
                          {item.title}
                        </h1>
                        {/* <button onClick={()=>toggleFav(item)} className={`${isFavorite?"text-pink-600":"text-white"} cursor-pointer`}><FaHeart/></button> */}

                        <div className="text-gray-100 bg-violet-400 rounded-[5px] text-[14px] flex justify-center items-center px-2">
                          {item.rating}&nbsp;
                          <span>
                            <FaStar color="gold" size={11} />
                          </span>
                        </div>
                      </div>
                   
                  </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
