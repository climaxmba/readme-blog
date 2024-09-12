import authors from "@/assets/data/blogs/authorsData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(authors);
}
