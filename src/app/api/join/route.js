import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(request) {
  try {
    const body = await request.json();
    await dbConnect();
    const newApplication = await Application.create({
      ...body,
      status: "pending"
    });
    return NextResponse.json({ success: true, data: newApplication }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit application" },
      { status: 400 }
    );
  }
}
