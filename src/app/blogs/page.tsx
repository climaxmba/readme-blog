import { Suspense } from "react";
import BlogList from "@/components/blogList/BlogList";
import styles from "./page.module.scss";
import WishlistProvider from "@/lib/WishListContext";
import Loading from "@/components/loading/Loading";

export default function Blogs() {
  return (
    <main className={styles.main}>
      <h1>Blogs</h1>

      <Suspense fallback={<Loading />}>
        <WishlistProvider>
          <BlogList />
        </WishlistProvider>
      </Suspense>
    </main>
  );
}
