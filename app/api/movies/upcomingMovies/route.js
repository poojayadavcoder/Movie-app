// import movieData from '../../../../upcomingMovies.json'

// export function GET(){
//     return  Response.json(movieData)
// }


import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("poojadbs"); // Replace with your DB name
    const movies = await db.collection("upcomingMovies").find({}).toArray();

    return Response.json(movies);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch movies" }), { status: 500 });
  }
}
