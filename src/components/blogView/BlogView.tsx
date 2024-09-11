"use client";
import { useEffect, useState } from "react";
import blogAPI from "@/lib/modules/blogAPI";
import Loading, { LoadingError } from "../loading/Loading";
import Markdown from "markdown-to-jsx";
import Code from "../code/Code";

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
                  pre: ({ children }) => <>{children}</>,
                },
              }}
            >
              {blog.content}
            </Markdown>
          </main>

          <p>
            Written by <i>{blog.author}</i>
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
