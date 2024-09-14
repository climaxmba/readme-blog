"use client";
import WishlistProvider from "@/lib/WishListContext";
import BlogItem from "../blogItem/BlogItem";
import styles from "./featuredBlogsSection.module.scss";

export default function FeaturedBlogsSection() {
  return (
    <section className={styles.container}>
      <h1>Featured Posts</h1>

      <ul className={styles.featuredBlogs}>
        {Array(8)
          .fill("")
          .map((_, key) => (
            <li key={key}>
              <WishlistProvider>
                <BlogItem
                  id={key.toString()}
                  image=""
                  title="Lorem Ipsum dolor sit."
                  date="12th Dec"
                />
              </WishlistProvider>
            </li>
          ))}
      </ul>
    </section>
  );
}
