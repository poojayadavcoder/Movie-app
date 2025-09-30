
// export default async function fetchGlobalMovies() {
//   const [trendingRes, highRatedRes, sliderRes] = await Promise.all([
//     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`, { next: { revalidate: 60 } }),
//     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/highRatedMovie`, { next: { revalidate: 60 } }),
//     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/movieSlider`, { next: { revalidate: 60 } }),
//   ]);



//   const [trendingMovies, highRatedMovies, sliderMovies] = await Promise.all([
//     trendingRes.json(),
//     highRatedRes.json(),
//     sliderRes.json(),
//   ]);

//   return { trendingMovies, highRatedMovies, sliderMovies };
// }

export default async function fetchGlobalMovies() {
  const [trendingRes, highRatedRes, sliderRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/highRatedMovie`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/movieSlider`, { cache: "no-store" }),
  ]);


  const [trendingMovies, highRatedMovies, sliderMovies] = await Promise.all([
    trendingRes.json(),
    highRatedRes.json(),
    sliderRes.json(),
    // [],[],[]
  ]);
 

  return { trendingMovies, highRatedMovies, sliderMovies };
}



// import { getTrendingMovies, getHighRatedMovies, getSliderMovies } from "@/app/models/movieModel";

// export default async function fetchGlobalMovies() {
//   const [trendingMovies, highRatedMovies, sliderMovies] = await Promise.all([
//     getTrendingMovies(),
//     getHighRatedMovies(),
//     getSliderMovies(),
//   ]);
//   // console.log(trendingMovies)

//   return { trendingMovies, highRatedMovies, sliderMovies };
// }
