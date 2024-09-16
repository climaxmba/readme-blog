"use client";
import WishlistProvider from "@/lib/WishListContext";
import BlogItem from "../blogItem/BlogItem";
import blogs from "@/assets/data/blogs/blogsData";
import { useRef } from "react";
import { motion } from "framer-motion";

import styles from "./heroSection.module.scss";

export default function HeroSection() {
  const blogLength = blogs.length;
  const ref = useRef(null);

  return (
    <section ref={ref} className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: "25%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 1 }}
      >
        Lost in the Code? We&apos;ve Got Your Map.
      </motion.h1>
      <p>
        Discover a world of software engineering insights, tips, and tutorials.
        From beginner to expert, we&apos;ve got you covered with articles on
        programming languages, algorithms, data structures, and more. Join our
        community of passionate developers and elevate your coding skills.
      </p>
      <h2>Recent Posts</h2>
      <ul className={styles.recentBlogs}>
        {blogs.slice(blogLength - 3, blogLength).map((blog) => (
          <li key={blog.id}>
            <WishlistProvider>
              <BlogItem
                id={blog.id}
                image={blog.image}
                title={blog.title}
                date={blog.date}
              />
            </WishlistProvider>
          </li>
        ))}
      </ul>
    </section>
  );
}
