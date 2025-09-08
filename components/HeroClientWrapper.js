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
  const { showPopup,isDark } = usePopup();
    useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden"; // stop scroll
    } else {
      document.body.style.overflow = "auto"; // re-enable scroll
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  return (
    <>
    <div className={`${isDark?"bg-white":""}
      ${showPopup} ? "blur-sm pointer-events-none" : ""}`}>
      <Slider initialData={sliderData} />
      <TrendingMovie movieData={trendingMovieData} />
      <UpcomingMovie upcomingMovieData={upcomingMovieData} />
      <HighRatedMovie movieData={highMovieData} />
      <Footer />
    </div>
    { showPopup && <Popup/> }
    </>
  );
}
