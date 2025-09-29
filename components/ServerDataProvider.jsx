
export default async function fetchGlobalMovies() {
  const [trendingRes, highRatedRes, sliderRes] = await Promise.all([
    fetch(`/api/movies`, { next: { revalidate: 60 } }),
    fetch(`/api/movies/highRatedMovie`, { next: { revalidate: 60 } }),
    fetch(`/api/movies/movieSlider`, { next: { revalidate: 60 } }),
  ]);

  const [trendingMovies, highRatedMovies, sliderMovies] = await Promise.all([
    trendingRes.json(),
    highRatedRes.json(),
    sliderRes.json(),
  ]);

  return { trendingMovies, highRatedMovies, sliderMovies };
}
