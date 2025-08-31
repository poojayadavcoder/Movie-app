import movieData from '../../../../../highRatedMovie.json'
// my-app/hightRatedMovie.json

export async function GET(_,{params}){
    const {movieId}=await params
     const movie=movieData.find((movie)=>movieId==movie.id)

    if(!movie){
     return Response.json({error : "Movie is not found"},
        {status:404}
    )
    }
  
  return  Response.json(movie)
}