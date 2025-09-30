// models/userModel.js
import clientPromise from "@/lib/mongodb";

export async function getUsersCollection() {
  const client = await clientPromise;
  const db = client.db("poojadbs");
  return db.collection("users");
}

export async function findUserByEmail(email) {
  const users = await getUsersCollection();
  return users.findOne({ email });
}

export async function createUser(userData) {
  const users = await getUsersCollection();
  return users.insertOne(userData);
}

export async function getTrendingMovies() {
  const db = (await clientPromise).db();
  return db.collection("movies").find({}).toArray();
}

export async function getHighRatedMovies() {
  const db = (await clientPromise).db();
  return db.collection("highRatedMovies").find({}).toArray();
}

export async function getSliderMovies() {
  const db = (await clientPromise).db();
  return db.collection("sliderMovies").find({}).toArray();
}
