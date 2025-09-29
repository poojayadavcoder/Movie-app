"use client";
import { usePopup } from "@/app/context/PopupContext";
import Footer from "./Footer";
import HighRatedMovie from "./HighRatedMovie";
import Slider from "./Slider";
import TrendingMovie from "./TrendingMovie";
import UpcomingMovie from "./UpcomingMovie";
import Popup from "./Popup";
import { useEffect } from "react";

export default function HeroClientWrapper({
  sliderData,
  trendingMovieData,
  highMovieData,
  upcomingMovieData,
}) {
  const { favorites, setFavorites } = usePopup();
  const { showPopup } = usePopup();
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  return (
    <>
      <div className={`${showPopup} ? "bg-black pointer-events-none" : ""}`}>
        <Slider initialData={sliderData} />
        <TrendingMovie
          movieData={trendingMovieData}
          favorites={favorites}
          setFavorites={setFavorites}
        />
        <UpcomingMovie upcomingMovieData={upcomingMovieData} />
        <HighRatedMovie
          movieData={highMovieData}
          favorites={favorites}
          setFavorites={setFavorites}
        />
        <Footer />
      </div>
      {showPopup && <Popup />}
    </>
  );
}
