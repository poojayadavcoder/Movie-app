"use client";
import Image from "next/image";
import bannerImg from "../public/movieFavImg.jpg";
import { useState } from "react";
import { usePopup } from "@/app/context/PopupContext";
import Link from "next/link";

export default function WatchList() {
  const { favorites } = usePopup();
  const [showHoverId, setShowHoverId] = useState(null);

  return (
    <div className="w-full min-h-[400px] bg-black mt-[80px] relative">
      <div className="w-full h-full absolute top-0 left-0">
        <Image
          src={bannerImg}
          fill
          alt="movie-banner"
          className="object-cover object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
      </div>

      <h1
        className="text-2xl pt-5 font-extrabold text-center 
         bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
         bg-clip-text text-transparent drop-shadow-lg animate-fade-in"
      >
        <span className="text-white">🎬</span> Your Personal Collection Of
        Favorite Movies Is Here!
      </h1>
      <p className="text-center text-lg text-gray-100  animate-fade-in-delay relative z-10 mt-2">
        Save, track, and enjoy your favorite movies anytime.
      </p>
      {favorites.length < 1 ? (
        <h1 className="text-rose-500 z-10 relative text-center mt-10">
          You have not selected any favorite movies.
        </h1>
      ) : (
        <div
          className="w-full min-h-[300px] relative z-10 py-[50px] 
        grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-8 px-3"
        >
          {favorites?.map((item, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => setShowHoverId(item.id)}
                onMouseLeave={() => setShowHoverId(null)}
                className=" w-full h-[250px] xs:h-[200px] border-[1px] transition-all duration-300 ease-linear
                         border-violet-400 rounded-2xl relative overflow-hidden "
              >
                <Image
                  src={item.poster}
                  fill
                  alt="movie-img"
                  className="object-cover object-top"
                />
                <Link
                  href={`/pages/movies/${item.id}`}
                  className={`w-full h-full bg-gradient-to-b from-black/70 to-purple-900/80 
                                absolute top-0 left-0 flex justify-center items-center
                                transition-transform duration-500 ease-in-out
                                ${
                                  showHoverId === item.id
                                    ? "translate-y-0"
                                    : "translate-y-full"
                                }
                            `}
                >
                  <h1 className="text-white font-semibold">{item.title}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
