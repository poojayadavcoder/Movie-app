import MovieDes from "@/components/MovieDes";

async function getMovie(movieId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${movieId}`, {
    cache: "no-store" 
  });
  return res.json();
}

export default async function MovieItemsPage({params}) {
 const { movieId } = await params;
   const movie = await getMovie(movieId);
   const allMovies = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`).then(res => res.json());
 
   return <MovieDes movie={movie} allMovies={allMovies} />
   
}


