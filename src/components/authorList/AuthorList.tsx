"use client";
import { useEffect, useState } from "react";
import Loading, { LoadingError } from "../loading/Loading";
import AuthorItem from "../authorItem/AuthorItem";
import blogAPI from "@/lib/modules/blogAPI";

import styles from "./authorList.module.scss";

export default function AuthorList() {
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState(false);

  // Load Authors
  useEffect(() => {
    (async () => {
      try {
        const authorsData = await blogAPI.getAuthors();
        setAuthors(authorsData);
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className={styles.container}>
      {error ? (
        <LoadingError />
      ) : loading ? (
        <Loading />
      ) : authors.length ? (
        <div className={styles.list}>
          {authors.map((author) => (
            <AuthorItem
              key={author.id}
              id={author.id}
              name={author.name}
              image={author.image}
            />
          ))}
        </div>
      ) : (
        <p>No Authors found!</p>
      )}
    </div>
  );
}
