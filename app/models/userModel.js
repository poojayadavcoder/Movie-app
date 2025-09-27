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
