import blogs from "@/assets/data/blogs";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(blogs);
}
