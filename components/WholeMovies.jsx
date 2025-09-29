"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaHeart } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { usePopup } from "@/app/context/PopupContext";
import { useState } from "react";

export default function Movie({ movies, sliderMovies }) {
  const { favorites, setFavorites, movieSlider } = usePopup();
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const toggleFav = async (movie) => {
    if (!token) {
      showPopupMessage("Please login to add favorites!");
      return;
    }

    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
      showPopupMessage(`${movie.title} removed from favorites`);

      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ movieId: movie.id }),
      });
    } else {
      setFavorites([...favorites, movie]);
      showPopupMessage(`${movie.title} added to favorites`);

      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ movie }),
      });
    }
  };

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };
  return (
    <>
      <div className="w-full h-full bg-black pb-[50px]">
        <Header />
        <div
          className="w-full min-h-[200px] mt-[60px]
       flex justify-center items-center"
        >
          <div
            className="w-[95%] h-[250px] rounded-2xl bg-black
        my-[20px] relative overflow-hidden flex justify-endtify-start items-center"
          >
            <Swiper
              autoplay={{ delay: 3000 }}
              modules={[Autoplay]}
              slidesPerView={1}
              className="w-full h-full"
            >
              {sliderMovies.length > 0 &&
                sliderMovies.map((item) => {
                  return (
                    <SwiperSlide
                      className="relative"
                      key={item.id}
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div
                        className="w-full h-full absolute top-0 left-0
               z-10 bg-gradient-to-r from-black/40
                to-violet-500/50"
                      ></div>
                      <div
                        className="w-[70%] sm:w-[400px] h-full flex justify-center items-center 
                gap-[10px] flex-col relative z-30"
                      >
                        <h1 className="text-[18px] text-white font-semibold text-center">
                          {item.title}
                        </h1>
                        <p className="text-center text-[14px] text-white text-center">
                          {item.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>

        <div className="w-[100%] mx-auto sm:w-full min-h-[200px] py-[40px]">
          <div
            className="w-[95%] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3
           lg:grid-cols-4 place-items-center gap-[30px] mx-auto"
          >
            {movies.map((item, index) => {
              const isFavorite = favorites.some((fav) => fav.id === item.id);
              return (
                <Link
                  href={`/pages/movies/${item.id}`}
                  className={`w-full rounded-2xl overflow-hidden p-[1px] flex justify-center items-center 
                    bg-gradient-to-tl from-violet-400 via-pink-500 to-violet-950
                ${
                  index < 2
                    ? `${
                        index == 0
                          ? "col-span-1 sm:col-span-2 sm:row-span-2"
                          : "col-span-1 sm:row-span-2 h-[250px] sm:h-full"
                      }  lg:col-span-2 
                ${
                  index == 0 && "h-[250px] sm:h-[300px]"
                } md:h-[300px] lg:h-[250px]`
                    : "h-[250px] md:h-[170px]"
                }`}
                  key={index}
                >
                  <div className="w-[100%] h-[100%] rounded-2xl overflow-hidden relative bg-black">
                    <Image
                      fill
                      alt="Image"
                      src={item.poster}
                      className="w-full h-full object-cover object-top"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFav(item);
                      }}
                      disabled={!token}
                      className={`${
                        isFavorite ? "text-pink-600" : "text-white"
                      } ${!token ? "opacity-50 cursor-not-allowed" : ""} 
  cursor-pointer absolute right-[6px] top-[4px] text-[25px] z-30`}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div
          className="w-[95%] min-h-[250px] xs:h-[230px] sm:h-[250px] mx-auto
     rounded-2xl overflow-hidden bg-gradient-to-tl from-violet-400 via-pink-500 to-black 
      relative border-[1px] border-violet-900 p-[1px]"
        >
          <div
            className="w-[100%] h-[100%] flex justify-center items-start gap-3
    flex-col p-[20px] sm:py-0 sm:pl-10 bg-black rounded-2xl"
          >
            <h1 className="uppercase text-white font-semibold text-[20px]">
              Download Our App Now!
            </h1>
            <p className="text-white text-[13px] w-[90%] sm:w-[50%]">
              Through trials and triumphs, challenges, and celebrations, our
              narrative unfolded. each chapter adding depth to our journey. Our
              milestones became markers of growth, testaments to the unwavering
              commitment of our team.
            </p>
            <div className="flex gap-[15px]">
              <button className="text-white border-[1px] border-violet-400 flex justify-center items-center gap-[2px] rounded-[5px] px-2 py-1 bg-black">
                <span className="text-[25px]">
                  <FaApple />
                </span>
                <div className="flex flex-col justify-start items-start">
                  <span className="text-[8px]">Download on the </span>
                  <span className="text-[13px] font-semibold">App Store</span>
                </div>
              </button>
              <button className="text-white border-[1px] border-violet-400 flex justify-center items-center gap-[2px] rounded-[5px] px-2 py-1 bg-black">
                <span className="text-[25px] ">
                  <FaGooglePlay />
                </span>
                <div className="flex flex-col justify-start items-start">
                  <span className="text-[8px]">Get it on</span>
                  <span className="text-[13px] font-semibold">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {showPopup && (
          <div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 
                  bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600
                  text-white px-4 py-2 rounded-xl shadow-lg z-50"
          >
            {popupMessage}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
