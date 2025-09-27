import { usePopup } from "@/app/context/PopupContext";
import MovieBox from "./MovieBox";

export default function HighRatedMovie({ movieData,favorites,setFavorites }) {
  const { showPopup } = usePopup();
  return (
    <div className={`mt-5 ${showPopup ? "blur-md" : ""}`}>
      <div className="w-full bg-black flex justify-start pt-5 items-center">
        <h1 className="text-[18px] sm:text-[22px] font-semibold text-violet-400 px-3 ">
          High Rated Movies
        </h1>
      </div>
      <MovieBox movieData={movieData} favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
}
