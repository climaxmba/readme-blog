import WishlistProvider from "@/lib/WishListContext";
import BlogItem from "../blogItem/BlogItem";
import blogs from "@/assets/data/blogs/blogsData";
import styles from "./heroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <h1>Lost in the Code? We&apos;ve Got Your Map.</h1>
      <p>
        Discover a world of software engineering insights, tips, and tutorials.
        From beginner to expert, we&apos;ve got you covered with articles on
        programming languages, algorithms, data structures, and more. Join our
        community of passionate developers and elevate your coding skills.
      </p>
      <h2>Recent Posts</h2>
      <ul className={styles.recentBlogs}>
        {blogs.slice(0, 3).map((blog) => (
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
