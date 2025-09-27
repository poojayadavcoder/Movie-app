import Movie from "@/components/WholeMovies";
import fetchGlobalMovies from '@/components/ServerDataProvider'

export default async function MovieSection() {
  const {sliderMovies,trendingMovies, highRatedMovies} = await fetchGlobalMovies();
  const allMovies=[...highRatedMovies,...trendingMovies]
  return <Movie movies={allMovies} sliderMovies={sliderMovies} />;
}