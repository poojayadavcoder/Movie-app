
export default async function fetchGlobalMovies() {
  const [trendingRes, highRatedRes, sliderRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`, { next: { revalidate: 60 } }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/highRatedMovie`, { next: { revalidate: 60 } }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/movieSlider`, { next: { revalidate: 60 } }),
  ]);

  const [trendingMovies, highRatedMovies, sliderMovies] = await Promise.all([
    trendingRes.json(),
    highRatedRes.json(),
    sliderRes.json(),
  ]);

  return { trendingMovies, highRatedMovies, sliderMovies };
}
