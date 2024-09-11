import blogs from "@/assets/data/blogs";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = blogs.flatMap((blog) => blog.categories);
  return NextResponse.json(
    categories.filter((item, i) => categories.indexOf(item) === i)
  );
}
