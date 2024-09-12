import authors from "@/assets/data/blogs/authorsData";
import { NextResponse } from "next/server";

export async function GET(_request: Request, context: any) {
  const { params } = context;
  const author = authors.find((author) => author.id === params.authorId);
  if (!author)
    return NextResponse.json({ error: "Not Found!" }, { status: 404 });
  return NextResponse.json(author);
}
