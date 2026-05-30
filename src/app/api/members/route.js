import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Member from "@/models/Member";

const seedMembers = [
  {
    name: "Rabiul Islam Ahad",
    role: "Founder & Chief Director",
    memberId: "TA-101",
    category: "executive",
    email: "tarunyeraloyouthofficial@gmail.com",
    social_links: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    }
  },
  {
    name: "Engr. Md. Rakibul Islam(Rakib)",
    role: "Admin & Web Developer",
    memberId: "TA-102",
    category: "executive",
    email: "rakibtaher27@gmail.com",
    social_links: {
      facebook: "https://facebook.com/abutaheruddinrakib",
    }
  },
  
];

export async function GET() {
  try {
    await dbConnect();
    let members = await Member.find({}).sort({ createdAt: 1 });
    
    if (members.length === 0) {
      // Seed data
      await Member.insertMany(seedMembers);
      members = await Member.find({}).sort({ createdAt: 1 });
    }

    return NextResponse.json({ success: true, data: members });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch members" },
      { status: 500 }
    );
  }
}
