import HeroClientWrapper from "./HeroClientWrapper";
import fetchGlobalMovies from "./ServerDataProvider";

export async function getSliderData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/slider`,
    {
      //  cache: "force-cache",
    }
  );
  return res.json();
}

export async function getUpcomingMovieData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/upcomingMovies`,
    {
      // cache: "force-cache",
    }
  );
  return res.json();
}

export default async function HeroSection() {
  const { trendingMovies, highRatedMovies } = await fetchGlobalMovies();
  const sliderData = await getSliderData();
  const upcomingMovieData = await getUpcomingMovieData();

  return (
    <>
      <HeroClientWrapper
        sliderData={sliderData}
        trendingMovieData={trendingMovies}
        highMovieData={highRatedMovies}
        upcomingMovieData={upcomingMovieData}
      />
    </>
  );
}
