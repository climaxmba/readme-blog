"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import Button from "@mui/material/Button";

import Code from "../code/Code";
import Loading, { LoadingError } from "../loading/Loading";
import FeedbackForm from "../feedbackForm/FeedbackForm";
import blogAPI from "@/lib/modules/blogAPI";
import { routes } from "@/lib/constants";
import WishlistProvider, { useWishlistContext } from "@/lib/WishListContext";
import { Star, StarOutline } from "@mui/icons-material";
import MuiTheme from "../MuiTheme/MuiTheme";

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

          <WishlistProvider>
            <WishlistButton id={blog.id} />
          </WishlistProvider>

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

          <FeedbackForm blogTitle={blog.title} />
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

function WishlistButton({ id }: { id: string }) {
  const { wishlist, addItem, removeItem } = useWishlistContext();
  const isInWishlist = wishlist.includes(id);
  
  return (
    <MuiTheme>
      <Button
        onClick={() => (isInWishlist ? removeItem(id) : addItem(id))}
        startIcon={isInWishlist ? <Star /> : <StarOutline />}
        variant={isInWishlist ? "text" : "contained"}
        sx={{ m: "1rem 0" }}
      >
        {isInWishlist ? "Remove" : "Add to Wishlist"}
      </Button>
    </MuiTheme>
  );
}
