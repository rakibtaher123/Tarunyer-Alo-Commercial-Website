import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { signToken } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const { emailOrPhone, password } = body;

    if (!emailOrPhone || !password) {
      return NextResponse.json(
        { success: false, error: "Please provide credentials." },
        { status: 400 }
      );
    }

    // Hardcoded Admin Check
    if (emailOrPhone === "01893078015" && password === "01893078015") {
      const token = await signToken({
        userId: "admin-master",
        role: "admin",
        name: "Master Admin",
        emailOrPhone: "01893078015",
      });

      const response = NextResponse.json(
        { success: true, message: "Admin Login successful", role: "admin" },
        { status: 200 }
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
    }

    // Standard User Check
    await dbConnect();
    const user = await User.findOne({ emailOrPhone });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials." },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials." },
        { status: 401 }
      );
    }

    // Sign JWT
    const token = await signToken({
      userId: user._id.toString(),
      role: user.role,
      name: user.name,
      emailOrPhone: user.emailOrPhone,
    });

    const response = NextResponse.json(
      { success: true, message: "Login successful", role: user.role },
      { status: 200 }
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
      { success: false, error: error.message || "Login failed" },
      { status: 500 }
    );
  }
}
