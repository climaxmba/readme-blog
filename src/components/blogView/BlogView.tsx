"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import blogAPI from "@/lib/modules/blogAPI";
import Loading, { LoadingError } from "../loading/Loading";
import Code from "../code/Code";
import { routes } from "@/lib/constants";

import styles from "./blogView.module.scss";
import "./blog-view.scss";

export default function Blog({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState(false);

  // Load blog data
  useEffect(() => {
    (async () => {
      try {
        const blogData = await blogAPI.getBlogById(id);
        setBlog(blogData);
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, [id]);

  return (
    <>
      {error ? (
        <LoadingError />
      ) : loading ? (
        <Loading />
      ) : blog ? (
        <>
          <p>
            Published on <i>{blog.date}</i>
          </p>

          <main className={styles.blogView}>
            <Markdown
              options={{
                overrides: {
                  code: Code,
                  // The `code` override adds it's own `<pre>`
                  pre: ({ children }) => <>{children}</>,
                  // Wrap `<table>`
                  table: ({ children }) => (
                    <div className="table-wrapper">
                      <table>{children}</table>
                    </div>
                  ),
                  img: ImageWrapper,
                },
              }}
            >
              {blog.content}
            </Markdown>
          </main>

          <p>
            Written by{" "}
            <Link
              style={{ fontStyle: "italic" }}
              href={`${routes.authors}/${blog.authorId}`}
            >
              {blog.author}
            </Link>
          </p>

          <section className={styles.comments}>
            <h1>Comments</h1>

            <div>
              {blog.comments.map((comment) => (
                <div key={comment.author} className={styles.comment}>
                  <h2>{comment.author}</h2>
                  <p>{comment.message}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <p>No Post found!</p>
      )}
    </>
  );
}

function ImageWrapper({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={320}
      height={300}
      className={styles.coverImage}
    />
  );
}
