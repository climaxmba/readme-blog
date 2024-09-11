import BlogList from "@/components/blogList/BlogList";
import styles from "./page.module.scss";

export default function Blogs() {
  return (
    <main className={styles.main}>
      <h1>Blogs</h1>

      <BlogList />
    </main>
  );
}
