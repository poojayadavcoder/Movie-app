"use client"

import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Header from "@/components/Header"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar} from "react-icons/fa";
import Footer from "@/components/Footer"

export default function MovieDes() {
    const {movieId}=useParams()
    const swiperRef = useRef(null);
    const [movieData,setMovieData]=useState({})
    // const [trendingMovie,setTrendingMovie]=useState([])
     const [movieAllData,setMovieAllData]=useState([])
    
     const [highRatedMovies, setHighRatedMovies] = useState({});



async function fetchHighRatedMovies() {
  const response = await fetch(`/api/movies/highRatedMovie/${movieId}`);
  const data = await response.json();
  setMovieData(data);
}
   async function fetchData(){
      const response= await fetch(`/api/movies/${movieId}`)
      const data= await response.json()
      // setHighRatedMovies(data)
      setMovieData(data)
      }

      async function fetchAllData(){
      const response= await fetch(`/api/movies`)
      const data= await response.json()
      setMovieAllData(data)

      }
      console.log(movieData)
      
    useEffect(()=>{
      fetchData()
      fetchHighRatedMovies();
      },[movieId])

       useEffect(()=>{
      fetchAllData()
      },[])

  // console.log(highRatedMovies)
  // console.log(movieData)
  //  const highRatedMovie = highRatedMovies.filter(item => item.id === movieId);
  //  console.log(highRatedMovie)
  // const currentMovie = highRatedMovie || movieData; 
    
  return (
    <>
    <Header/>
      <div className="w-full min-h-[100vh] bg-black relative">
         {movieData.poster ? (
           <div className="relative w-full h-[300px]">
          <Image
            src={movieData.poster}
            alt={movieData.title || "movie-poster"}
            fill
            className="object-cover"
          />
          <div className="w-full h-full bg-black/70 absolute top-0 left-0 z-10"></div>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
      
     <div className="w-full min-h-[500px] flex justify-between items-start">
      <div className="w-[280px] h-[300px] bg-amber-300
       relative z-50 -mt-[90px] ml-5">
         <div className="w-full h-[300px] rounded-[5px] overflow-hidden">
           {movieData.images? <Image
             src={movieData.images[0]}
             alt={movieData.title || "movie-poster"}
             fill
          />:<p>Loading</p>}
          </div>
        
        <button className="border-[1px] border-violet-400 rounded-[8px] text-[14px] w-full text-violet-400 px-7 py-[6px] mt-4 cursor-pointer
          hover:bg-violet-400 transition-all duration-150 ease-linear hover:text-black">Watch Now</button>
     
      </div>

      <div className="w-[100%] min-h-[300px] mt-5 flex items-center justify-end">
        <div className="w-[95%] min-h-[300px]
        flex justify-start items-start flex-col gap-2">
           <h1 className="text-violet-400 text-[17px]">{movieData.title}</h1>
           <div className="flex">
            {
             movieData.genre?  
             movieData.genre.map((item,index)=>{
                    return (
                        <p className="text-white text-[14px]" key={index}>{item} {index==2?"":"|"}&nbsp;</p>
                    )
                }):""
            }
           </div>
           <div className="bg-gray-100 w-[90%] h-[1px]"></div>
           {movieData.description?<p className="text-white text-[14px]">{movieData.description}</p>:""}
            <div className="bg-gray-100 w-[90%] h-[1px]"></div>
           <div className="flex w-full gap-5">  
            {movieData.year?<p className="text-white text-[14px]">{movieData.year}</p>:<p className="text-white text-[14px]">2015</p>}
            {movieData.rating?<p className="text-white text-[14px]">{movieData.rating}</p>:<p className="text-white text-[14px]">8.3</p>}
            {movieData.duration?<p className="text-white text-[14px]">{movieData.duration}</p>:<p className="text-white text-[14px]">3h 20min</p>}
            </div> 
            <div className="bg-gray-100 w-[90%] h-[1px]"></div>
            <div className="w-full flex justify-start items-start
             flex-col gap-5">
                <h1 className="text-xl font-semibold text-white">Cast</h1>
                <div className="w-full flex justify-start items-center 
                gap-3 flex-wrap pl-5">
                    {
                        movieData.cast? 
                            movieData.cast.map((item,index)=>{
                                return (
                                    <div className="w-[140px] min-h-[140px] flex justify-center items-center flex-col gap-5" key={index}>
                                        <div className="w-[100px] h-[100px]  rounded-[50%] overflow-hidden border-[3px] border-violet-400">
                                            <img src={item.image} className="w-full h-full object-fill" alt="" />
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
    <div className="w-full min-h-[400px] bg-black px-3 flex justify-start 
    items-start gap-5 flex-col">
      <h1 className="text-xl font-semibold text-white pt-5">Similar movie</h1>
         <div className="relative w-full h-[330px]">
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
             className="w-full h-full"
           >
             {movieAllData.map((movie) => (
               <SwiperSlide key={movie.id}>
                 <div className="w-[230px] h-[300px] overflow-hidden
                  rounded-[15px]  relative shadow-xs shadow-violet-400">
                   <Image
                     src={movie.poster}
                     width={300}
                     height={448}
                     alt="movie-poster"
                     className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                   />
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
    </>
   
  )
}


