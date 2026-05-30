import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request) {
  try {
    const body = await request.json();
    await dbConnect();
    const newContact = await Contact.create(body);
    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit contact form" },
      { status: 400 }
    );
  }
}
