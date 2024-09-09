import BlogItem from "../blogItem/BlogItem";
import styles from "./heroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <h1>The ReadMe Blog</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at modi rem
        dolores debitis beatae.
      </p>
      <h2>Recent Blogs</h2>
      <ul className={styles.recentBlogs}>
        {["", "", ""].map((_, key) => (
          <li key={key}>
            <BlogItem
              id={key.toString()}
              image=""
              title="Lorem Ipsum dolor sit."
              date="12th Dec"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
