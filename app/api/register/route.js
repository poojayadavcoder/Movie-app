

import { createUser, findUserByEmail } from "@/app/models/userModel";
import bcrypt from "bcryptjs";
// import { findUserByEmail, createUser } from "@/models/userModel";

export async function POST(request) {
  try {
    const body = await request.json(); // ✅ Make sure to await
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
      });
    }

    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 409,
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to DB
    const result = await createUser({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        message: "User registered successfully",
        user: { id: result.insertedId, name, email },
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Register API error:", error);
    return new Response(JSON.stringify({ error: "Failed to register user" }), {
      status: 500,
    });
  }
}
