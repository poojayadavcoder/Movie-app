"use client"

import {useRef} from "react"
import Image from "next/image"
import Header from "@/components/Header"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "@/components/Footer"
import { FaStar } from "react-icons/fa";      // Rating
import { MdOutlineAccessTime } from "react-icons/md";  // Duration
import { BsCalendarDate } from "react-icons/bs";  // Year
import { usePopup } from "@/app/context/PopupContext";
import YoutubeBox from "./YoutubeBox";

export default function MovieDes({movie,allMovies}) {
   const {handleWatchNow,showPlayer}=usePopup()
    const swiperRef = useRef(null);
return (
    <>
    <Header/>
      <div className="w-full min-h-[100vh] bg-black relative">
         {movie.poster ? (
           <div className="relative w-full h-[420px] hidden md:flex">
          <Image
            src={movie.poster}
            alt={movie.title || "movie-poster"}
            fill
            className="object-cover object-top"
          />
          <div className="w-full h-full bg-black/30 absolute top-0 left-0 z-10"></div>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
      
     <div className="w-full min-h-[500px] flex justify-between
     items-center gap-[40px] md:gap-0 md:items-start flex-col md:flex-row">
      <div className="w-[280px] h-[300px]
       relative md:z-50 mt-[50px] md:mt-[-90px] md:ml-5 rounded-[12px]">
         <div className="w-full h-[300px] rounded-[5px]  relative
         overflow-hidden">
           {movie.images?<Image
             src={movie.images[0]}
             alt={movie.title || "movie-poster"}
             fill
             className="object-cover"
          />:<p>Loading</p>}
          </div>
        
        <button onClick={()=>handleWatchNow(movie.watchUrl)} className="border-[1px] border-violet-400 rounded-[8px] text-[14px] w-full text-violet-400 px-7 py-[6px] mt-4 cursor-pointer
          hover:bg-violet-400 transition-all duration-150 ease-linear hover:text-black">Watch Now</button>
     
      </div>

      <div className="w-[100%] min-h-[300px] mt-5 flex items-center justify-end">
        <div className="w-full md:w-[95%] min-h-[300px]
        flex justify-start items-start flex-col gap-2">
           <h1 className="text-violet-400 text-[17px] pl-2 md:pl-0">{movie.title}</h1>
           <div className="flex pl-2 md:pl-0">
            {
             movie.genre?  
             movie.genre.map((item,index)=>{
                    return (
                        <p className="text-white text-[14px]" key={index}>{item} {index==2?"":"|"}&nbsp;</p>
                    )
                }):""
            }
           </div>
           <div className="bg-gray-100 w-[90%] h-[1px] pl-2 md:pl-0"></div>
           {movie.description?<p className="text-white text-[14px] pl-2 md:pl-0">{movie.description}</p>:""}
            <div className="bg-gray-100 w-[90%] h-[1px] pl-2 md:pl-0"></div>
           <div className="flex w-full gap-5 pl-2 md:pl-0">  
            {movie.year?<div className=" flex justify-center items-center gap-[4px]"><span className="text-violet-400 text-[15px]"><BsCalendarDate /></span><p className="text-white text-[14px]">{movie.year}</p></div>:<p className="text-white text-[14px]">2024</p>}
            {movie.rating?<div className="flex justify-center items-center gap-[4px]"><span className="text-violet-400 text-[15px]"><FaStar/></span> <p className="text-white text-[14px]">{movie.rating}</p></div>:<p className="text-white text-[14px]">8.3</p>}
            {movie.duration?<div className="flex justify-center items-center gap-[4px]"><span className="text-violet-400 text-[15px]"><MdOutlineAccessTime/></span> <p className="text-white text-[14px]">{movie.duration}</p></div>:<p className="text-white text-[14px]">3h 20min</p>}
            </div> 
            <div className="bg-gray-100 w-[90%] h-[1px]"></div>
            <div className="w-full flex justify-start items-start
             flex-col gap-5">
                <h1 className="text-xl font-semibold text-white pl-2 md:pl-0">Cast</h1>
                <div className="w-full flex justify-start items-center 
                gap-3 flex-wrap  md:pl-5">
                    {
                        movie.cast? 
                            movie.cast.map((item,index)=>{
                                return (
                                    <div className="w-[140px] min-h-[140px] flex justify-center items-center flex-col gap-5" key={index}>
                                        <div className="w-[100px] h-[100px] relative
                                          rounded-[50%] overflow-hidden border-[3px]
                                           border-violet-400">
                                            {/* <img src={item.image} className="w-full h-full object-fill" alt="" /> */}
                                            <Image src={item.image} fill
                                            alt="movie-img"
                                            className="object-cover"/>
                                        </div>
                                        <h1 className="text-[13px] font-semibold text-white text-center">{item.name}</h1>
                                    </div>
                                )
                            })
                        :""
                    }
                </div>
            {/* </div> */}
        </div>
      </div>
      </div>
 </div>
      
    </div>

    <div className="w-full h-auto px-3 flex justify-start 
    items-start gap-5 flex-col bg-black">
      <h1 className="text-xl font-semibold text-white pt-5">Similar movie</h1>
         <div className="relative w-full min-h-[330px]">
           {/* Left Chevron */}
           <button
             onClick={() => swiperRef.current.slidePrev()}
             className="absolute left-2 top-1/2 -translate-y-1/2 
             z-10 p-2 bg-black/80 border-[1px] border-violet-400
              rounded-full text-violet-400 hover:cursor-pointer
              hover:bg-black"
           >
             <FaChevronLeft size={20} />
           </button>
     
           {/* Right Chevron */}
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
             spaceBetween={25}
             slidesPerView={4}
             className="w-full h-full flex justify-center items-center"
              breakpoints={{
    320: { // mobile
      slidesPerView: 1,
      spaceBetween: 10,
    },
     400: { // small tablets
      slidesPerView: 2,
      spaceBetween: 15,
    },
    640: { // small tablets
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: { // desktops
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1280: { // large screens
      slidesPerView: 5,
      spaceBetween: 25,
    },
  }}
           >
             {allMovies.map((movie) => (
               <SwiperSlide key={movie.id}>
                 <div className="w-[95%] lg:w-[230px] h-[320px] sm:h-[300px]  overflow-hidden
                  rounded-[15px]  relative shadow-xs shadow-violet-400 mx-auto">
                    <a href={`/pages/movies/${movie.id}`} className="relative">
                   <Image
                     src={movie.poster}
                     width={300}
                     height={448}
                     alt="movie-poster"
                     className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                   />
                   </a>
                   <h1 className="text-white bg-black rounded-[5px] text-[13px] px-2 py-[2px] flex justify-center items-center gap-[2px] absolute top-2 right-2">{movie.rating} <span><FaStar color="yellow"/></span></h1>
                  <h1 className="absolute bg-black bottom-[0px] left-0 border-[1px] border-t-0 border-x-0 border-b-violet-400
                  text-[14px] font-semibold text-white 
                    px-2 py-[10px] truncate w-full">
                    {movie.title}
                  </h1>
                 </div>
               </SwiperSlide>
             ))}
           </Swiper>
         </div>
    </div>
    <Footer/>
    {showPlayer&& <YoutubeBox/>}
    </>
   
  )
}
