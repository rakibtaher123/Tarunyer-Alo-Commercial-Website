import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { signToken } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, emailOrPhone, password } = body;

    if (!name || !emailOrPhone || !password) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields." },
        { status: 400 }
      );
    }

    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ emailOrPhone });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "An account with this email/phone already exists." },
        { status: 409 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await User.create({
      name,
      emailOrPhone,
      password: hashedPassword,
      role: "customer", // Default role
    });

    // Sign JWT
    const token = await signToken({
      userId: newUser._id.toString(),
      role: newUser.role,
      name: newUser.name,
      emailOrPhone: newUser.emailOrPhone,
    });

    // Create response and set cookie
    const response = NextResponse.json(
      { success: true, message: "Registration successful" },
      { status: 201 }
    );

    response.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Registration failed" },
      { status: 500 }
    );
  }
}
