import { findUserByEmail } from "@/app/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email and password are required" }), {
        status: 400,
      });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
   console.log(token)
    return new Response(
      JSON.stringify({
        message: "Login successful",
        token,
        user: { id: user._id, name: user.name, email: user.email },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Login API error:", error);
    return new Response(JSON.stringify({ error: "Failed to login user" }), { status: 500 });
  }
}
