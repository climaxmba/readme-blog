import BlogView from "@/components/blogView/BlogView";
import styles from "./page.module.scss";

export default function Blog({ params }: { params: { blogId: string } }) {
  return (
    <div className={styles.main}>
      <BlogView id={params.blogId} />
    </div>
  );
}
