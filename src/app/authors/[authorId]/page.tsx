import AuthorProfile from "@/components/authorProfile/AuthorProfile";
import styles from "./page.module.scss";

export default function Author({ params }: { params: { authorId: string } }) {
  return (
    <div className={styles.main}>
      <AuthorProfile id={params.authorId} />
    </div>
  );
}
