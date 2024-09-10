import blogs from "@/assets/data/blogs";
import { NextResponse } from "next/server";

export async function GET(_request: Request, context: any) {
  const { params } = context;
  const blog = blogs.find((blog) => blog.id === params.blogId);
  if (!blog) return NextResponse.json({ error: "Not Found!" }, { status: 404 });
  return NextResponse.json(blog);
}
