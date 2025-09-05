import MovieBox from "./MovieBox";

export default function TrendingMovie({movieData}) {
  return (
    <>
    <div className="w-full bg-black flex justify-start 
   pt-5 items-center">
      <h1 className="text-[18px] font-semibold text-violet-400 px-3 ">Trending Movies</h1>
   </div> 
   <MovieBox movieData={movieData}  />
    </>
  )
}
