import HeroClientWrapper from "./HeroClientWrapper";

async function getSliderData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/slider`, {
    cache: "no-store",
  });
  return res.json();
}

async function getTrendingMovieData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`, {
    cache: "no-store",
  });
  return res.json();
}

async function getHighMovieData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/highRatedMovie`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getUpcomingMovieData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/upcomingMovies`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function HeroSection() {
  const sliderData = await getSliderData();
  const trendingMovieData = await getTrendingMovieData();
  const highMovieData = await getHighMovieData();
  const upcomingMovieData = await getUpcomingMovieData();

  return (
    <>
    <HeroClientWrapper
      sliderData={sliderData}
      trendingMovieData={trendingMovieData}
      highMovieData={highMovieData}
      upcomingMovieData={upcomingMovieData}
    />
    </>
  );
}
