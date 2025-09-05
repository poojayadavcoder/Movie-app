import MovieBox from "./MovieBox";

export default function HighRatedMovie({movieData}) {
  return (
    <div>
    <div className="w-full bg-black pt-2">
      <h1 className="text-[18px] font-semibold text-violet-400 px-3 ">High Rated Movies</h1>
   </div> 
   <MovieBox movieData={movieData}  />
    </div>
  )
}