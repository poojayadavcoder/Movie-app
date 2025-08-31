"use client"

import { useEffect, useState } from "react"
import Footer from "./Footer";
import MovieBox from "./MovieBox";
import Slider from "./Slider";

export default function HeroSection() {
  const [movieData,setMovieData]=useState([])
  const [highMovieRatedData,sethighMovieRatedData]=useState([])
  
  useEffect(()=>{
  fetchData()
  fetchMovieData()
  },[])

  async function fetchData(){
  const response= await fetch('/api/movies')
  const data= await response.json()
  setMovieData(data)
  }

   async function fetchMovieData(){
  const response= await fetch('/api/movies/highRatedMovie')
  const data= await response.json()
  sethighMovieRatedData(data)
  }
  console.log(highMovieRatedData)
 

  return (
    <>
    <Slider/>
   <div className="w-full bg-black">
    <h1 className="text-2xl font-semibold text-violet-400 px-3
     py-4 ">Trending Movies</h1>
   </div> 
   <MovieBox movieData={movieData}  />
<div className="w-full bg-black">
    <h1 className="text-2xl font-semibold text-violet-400 px-3
     py-4 ">Hight Rated Movies</h1>
   </div> 
   <MovieBox movieData={highMovieRatedData}  />
  <Footer/>
     </>
  )
}
