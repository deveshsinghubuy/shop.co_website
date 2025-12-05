import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const { email } = await req.json();

  const filePath = path.join(process.cwd(), "emails", "emails.json");

  const fileData = fs.readFileSync(filePath, "utf-8");
  const emails = JSON.parse(fileData);

  emails.push({
    email,
    date: new Date().toISOString()
  });

  fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));

  return NextResponse.json({ message: "Email saved successfully" });
}