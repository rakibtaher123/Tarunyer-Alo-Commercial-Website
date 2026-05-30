import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Application from "@/models/Application";
import Member from "@/models/Member";
import Contact from "@/models/Contact";
import User from "@/models/User";

export async function GET() {
  try {
    await dbConnect();
    
    const [applications, members, contacts, users] = await Promise.all([
      Application.countDocuments(),
      Member.countDocuments(),
      Contact.countDocuments(),
      User.countDocuments(),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        applications,
        members,
        contacts,
        users,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch stats" }, { status: 500 });
  }
}
