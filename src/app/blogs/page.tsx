import BlogList from "@/components/blogList/BlogList";
import styles from "./page.module.scss";
import WishlistProvider from "@/lib/WishListContext";

export default function Blogs() {
  return (
    <main className={styles.main}>
      <h1>Blogs</h1>

      <WishlistProvider>
        <BlogList />
      </WishlistProvider>
    </main>
  );
}
