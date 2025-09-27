// import { ObjectId } from "mongodb";
// import clientPromise from "@/lib/mongodb";
// import jwt from "jsonwebtoken";

// async function getUserIdFromRequest(request) {
//   const token = request.headers.get("authorization")?.split(" ")[1];
//   if (!token) {
//     throw new Error("No token provided");
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     return decoded.id; // The user ID from JWT
//   } catch (error) {
//     throw new Error("Invalid token");
//   }
// }



// export async function POST(request) {
//   try {
//     const userId = await getUserIdFromRequest(request);
//     console.log(userId)
//     const client = await clientPromise;
//     const db = client.db("poojadbs"); // your database name

//        const usersCollection = db.collection("users");
//     const userExists = await usersCollection.findOne({ _id: new ObjectId(userId) });

//     if (!userExists) {
//       return new Response(JSON.stringify({ error: "User not found" }), { status: 401 });
//     }



//     const favoritesCollection = db.collection("favorites");

//     const body = await request.json();
//     const {movie}=body
//     // const userId = "demo-user"; // Later use actual user ID

//     // Upsert (insert if not exists, update if exists)
//     const result = await favoritesCollection.updateOne(
//       { userId },
//       { $set: { favorites: body } },
//       { upsert: true }
//     );

//     return Response.json({ message: "Favorites saved", result });
//   } catch (error) {
//     console.error("Error saving favorites:", error);
//     return new Response(JSON.stringify({ error: "Failed to save favorites" }), { status: 500 });
//   }
// }


// export async function DELETE(request) {
//   try {
//     const userId = await getUserIdFromRequest(request);

//     const client = await clientPromise;
//     const db = client.db("poojadbs");
//     const favoritesCollection = db.collection("favorites");

//     const body = await request.json();
//     const { movieId } = body;
//     // const userId = "demo-user";

    
//     const result = await favoritesCollection.updateOne(
//       { userId },
//       { $pull: { favorites: { id: movieId } } } // remove by movie.id
//     );

//     return Response.json({ message: "Movie removed from favorites", result });
//   } catch (error) {
//     console.error("Error removing favorite:", error);
//     return new Response(JSON.stringify({ error: "Failed to remove favorite" }), { status: 500 });
//   }
// }

// export async function GET(request) {
//   try {
//     const userId = await getUserIdFromRequest(request);

//     const client = await clientPromise;
//     const db = client.db("poojadbs");
//     const favoritesCollection = db.collection("favorites");

//     // const userId = "demo-user";
//     const favorites = await favoritesCollection.findOne({ userId });

//     return Response.json(favorites || { favorites: [] });
//   } catch (error) {
//     console.error("Error fetching favorites:", error);
//     return new Response(JSON.stringify({ error: "Failed to fetch favorites" }), { status: 500 });
//   }
// }


import clientPromise from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb"; // <-- Import ObjectId

async function getUserIdFromRequest(request) {
  const token = request.headers.get("authorization")?.split(" ")[1];
  if (!token) throw new Error("No token provided");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch (error) {
    throw new Error("Invalid token");
  }
}

export async function POST(request) {
  try {
    const userId = await getUserIdFromRequest(request);

    const client = await clientPromise;
    const db = client.db("poojadbs");

    const usersCollection = db.collection("users");
    const userExists = await usersCollection.findOne({ _id: new ObjectId(userId) });
    if (!userExists) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 401 });
    }

    const favoritesCollection = db.collection("favorites");
    const body = await request.json();
    const { movie } = body;

    // Upsert favorites
    const result = await favoritesCollection.updateOne(
      { userId },
      { $addToSet: { favorites: movie } }, // add only if not exists
      { upsert: true }
    );

    return new Response(JSON.stringify({ message: "Favorites saved", result }), { status: 200 });
  } catch (error) {
    console.error("Error saving favorites:", error);
    return new Response(JSON.stringify({ error: "Failed to save favorites" }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const userId = await getUserIdFromRequest(request);

    const client = await clientPromise;
    const db = client.db("poojadbs");

    const usersCollection = db.collection("users");
    const userExists = await usersCollection.findOne({ _id: new ObjectId(userId) });
    if (!userExists) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 401 });
    }

    const favoritesCollection = db.collection("favorites");
    const { movieId } = await request.json();

    const result = await favoritesCollection.updateOne(
      { userId },
      { $pull: { favorites: { id: movieId } } }
    );

    return new Response(JSON.stringify({ message: "Movie removed from favorites", result }), { status: 200 });
  } catch (error) {
    console.error("Error removing favorite:", error);
    return new Response(JSON.stringify({ error: "Failed to remove favorite" }), { status: 500 });
  }
}

export async function GET(request) {
  try {
    const userId = await getUserIdFromRequest(request);

    const client = await clientPromise;
    const db = client.db("poojadbs");

    const usersCollection = db.collection("users");
    const userExists = await usersCollection.findOne({ _id: new ObjectId(userId) });
    if (!userExists) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 401 });
    }

    const favoritesCollection = db.collection("favorites");
    const favorites = await favoritesCollection.findOne({ userId });

    return new Response(JSON.stringify(favorites || { favorites: [] }), { status: 200 });
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch favorites" }), { status: 500 });
  }
}
