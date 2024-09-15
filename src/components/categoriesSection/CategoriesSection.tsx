"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import blogAPI from "@/lib/modules/blogAPI";
import { routes } from "@/lib/constants";
import styles from "./categoriesSection.module.scss";

export default function CategoriesSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[] | null>(null);
  const [error, setError] = useState(false);

  const createCategoryHref = (category: string) => {
    return `${routes.blogs}/?category=${category}`;
  };

  // Load categories data
  useEffect(() => {
    (async () => {
      try {
        const categoriesData = await blogAPI.getCategories();
        setCategories(categoriesData);
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <section id={routes.categories.slice(1)} className={styles.container}>
      <h1>Categories</h1>

      {loading ? (
        <em>Loading...</em>
      ) : error ? (
        <em>Error loading categories!</em>
      ) : categories?.length ? (
        <div className={styles.links}>
          {categories.map((category) => (
            <Button
              key={category}
              href={createCategoryHref(category)}
              onClick={(e) => {
                e.preventDefault();
                router.push(createCategoryHref(category));
              }}
              variant="contained"
            >
              {category}
            </Button>
          ))}
        </div>
      ) : (
        <em>No category for now</em>
      )}
    </section>
  );
}
