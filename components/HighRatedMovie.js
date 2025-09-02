import MovieBox from "./MovieBox";

export default function HighRatedMovie({movieData}) {
  return (
    <div>
    <div className="w-full bg-black">
      <h1 className="text-2xl font-semibold text-violet-400 px-3 py-4 ">High Rated Movies</h1>
   </div> 
   <MovieBox movieData={movieData}  />
    </div>
  )
}