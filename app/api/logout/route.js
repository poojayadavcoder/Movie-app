import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) return new Response(JSON.stringify({ error: "No token provided" }), { status: 401 });

    const token = authHeader.split(" ")[1];
    const client = await clientPromise;
    const db = client.db("movieApp");

    await db.collection("sessions").deleteOne({ token });

    return new Response(JSON.stringify({ message: "Logged out successfully" }), { status: 200 });
  } catch (error) {
    console.error("Logout API error:", error);
    return new Response(JSON.stringify({ error: "Failed to logout" }), { status: 500 });
  }
}
