import MovieBox from "./MovieBox";

export default function TrendingMovie({movieData}) {
  return (
    <>
    <div className="w-full bg-black h-[80px] flex justify-start items-center">
      <h1 className="text-2xl font-semibold text-violet-400 px-3 ">Trending Movies</h1>
   </div> 
   <MovieBox movieData={movieData}  />
    </>
  )
}
