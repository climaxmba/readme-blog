"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import blogAPI from "@/lib/modules/blogAPI";
import Loading, { LoadingError } from "../loading/Loading";
import BlogItem from "../blogItem/BlogItem";
import WishlistProvider from "@/lib/WishListContext";

import styles from "./authorProfile.module.scss";

export default function AuthorProfile({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState<Author | null>(null);
  const [error, setError] = useState(false);

  // Load author data
  useEffect(() => {
    (async () => {
      try {
        const authorData = await blogAPI.getAuthorById(id);
        setAuthor(authorData);
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, [id]);

  return (
    <WishlistProvider>
      {error ? (
        <LoadingError />
      ) : loading ? (
        <Loading />
      ) : author ? (
        <>
          <div className={styles.banner}>
            <div className={styles.bgDecor}></div>
            <Image
              alt="Profile Image"
              width={150}
              height={150}
              src={author.image}
            />
          </div>
          <h1 className={styles.name}>{author.name}</h1>
          <p className={styles.bio}>{author.bio}</p>
          <div className={styles.posts}>
            <h2> Blog Posts</h2>
            <div className={styles.list}>
              {author.blogs.map((blog) => (
                <BlogItem key={blog.id} {...blog} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>No Post found!</p>
      )}
    </WishlistProvider>
  );
}
