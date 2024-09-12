import AuthorList from "@/components/authorList/AuthorList";
import styles from "./page.module.scss";

export default function Authors() {
  return (
    <main className={styles.container}>
      <h1>Authors</h1>
      <AuthorList />
    </main>
  );
}
