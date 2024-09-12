import blogs from "@/assets/data/blogs/blogsData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(blogs);
}
