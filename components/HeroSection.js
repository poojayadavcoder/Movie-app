"use client"

import { useEffect, useState } from "react"
import { FaStar,FaPlay,FaTimes} from "react-icons/fa";
import Image from "next/image"

export default function HeroSection() {
  const [movieData,setMovieData]=useState([])
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(()=>{
  fetchData()
  },[])

  async function fetchData(){
  const response= await fetch('/api/movies')
  const data= await response.json()
  setMovieData(data)
  }
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
  }

  return (
    <div className="bg-black w-full min-h-[400px] xl:h-[700px] grid grid-cols-3 place-items-center gap-5 pt-5">
        {
          movieData.map((item)=>{
            return (
             <div className="w-[280px] min-h-[280px] bg-black overflow-hidden group" key={item.id}>
              <div className="w-full h-[300px] relative overflow-hidden rounded-[10px]">

              <Image 
               src={item.poster} 
               width={300} height={448}
               alt="movie-poster" 
               className="group-hover:scale-110 transition-all 
                  duration-150 ease-linear"
              />
            <div
              className="w-full h-full bg-black/50 absolute top-0 left-0 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               
               <button
                onClick={() => handleWatchNow(item.videoUrl)}
                  className="flex items-center gap-2 bg-violet-400
                   text-black text-[14px] px-4 py-2 rounded-lg
                    font-semibold transition hover:bg-violet-500"
                >
                  <FaPlay className="text-white text-[14px]" />
                  Watch Now
                </button>
              </div>
           </div>


               <div className="flex justify-between items-center pr-5 mt-3 px-2">
                <h1 className="text-violet-400 text-[16px] 
                font-semibold truncate w-[200px]">
                  {item.title}
                </h1>

                <div className="text-gray-100 bg-violet-400 w-10 h-5
                 rounded-[5px] text-[14px] flex justify-center items-center 
                 px-2">{item.rating}&nbsp;<span><FaStar color="gold" size={11} /></span></div>
                 
               </div>
              

              <div className="px-2">
                {
                  item.genre.map((item,index)=>{
                    return(
                      <span className="text-[13px] text-gray-200" key={index}>
                        {item}&nbsp;{index===2?"":"|"}&nbsp;
                        </span>
                    )
                  })
                }
              </div>
              </div>
            )
          })
        }

             {showPlayer && (
        <div className="fixed inset-0 bg-black/90 flex 
        justify-center items-center z-50">
          <div className="p-4 rounded-xl relative
           max-w-4xl w-full">
            <button
              onClick={closePlayer}
              className="absolute top-2 right-2 text-white
               text-xl"
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
  )
}
