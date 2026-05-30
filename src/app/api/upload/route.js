import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name.replaceAll(" ", "_")}`;
    
    // Ensure the uploads directory exists
    const uploadDir = path.join(process.cwd(), "public/uploads");
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    const filepath = path.join(uploadDir, filename);
    await fs.writeFile(filepath, buffer);

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      url: `/uploads/${filename}`,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Upload failed" }, { status: 500 });
  }
}
