// import movieData from '../../../../dynamicMovie'
// import clientPromise from "@/lib/mongodb";
// export async function GET(_,{params}){
//     const {movieId}=await params
//      const movie=movieData.find((movie)=>movieId==movie.id)

//     if(!movie){
//      return Response.json({error : "Movie is not found"},
//         {status:404}
//     )
//     }
  
//   return  Response.json(movie)
// }

import clientPromise from "@/lib/mongodb";

export async function GET(_,{params}) {
  const {movieId}=await params
  try {
    const client = await clientPromise;
    const db = client.db("poojadbs"); // Replace with your DB name
    const movies = await db.collection("dynamicMovies").find({}).toArray();
    
  
     const movie=movies.find((movie)=>movieId==movie.id)

//     if(!movie){
//      return Response.json({error : "Movie is not found"},
//         {status:404}
//     )
//     }
    return Response.json(movie);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch movies" }), { status: 500 });
  }
}