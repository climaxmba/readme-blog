"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { type ChangeEvent, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Loading, { LoadingError } from "../loading/Loading";
import SearchBox from "../searchBox/SearchBox";
import BlogItem from "../blogItem/BlogItem";
import useDebounce from "../../lib/useDebounce";
import blogAPI from "@/lib/modules/blogAPI";

import styles from "./blogList.module.scss";
import { routes } from "@/lib/constants";

export default function BlogList() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState(false);

  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const pageLimit = 6;

  useEffect(() => {
    const categoryQuery = searchParams.get("category");
    categoryQuery && setCategory(categoryQuery);
    router.replace(routes.blogs);
  }, [router, searchParams]);

  const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page - 1);
  };

  // Load Blogs
  useEffect(() => {
    (async () => {
      try {
        const [blogArray, categoriesArray] = await Promise.all([
          blogAPI.getBlogs(),
          blogAPI.getCategories(),
        ]);
        setBlogs(blogArray);
        setCategories(categoriesArray);
      } catch {
        setError(true);
      }
    })();
  }, []);

  // Set loading to true on `searchQuery` and `blogs` change
  useEffect(() => {
    if (!error) setLoading(true);
  }, [searchQuery, blogs, error]);

  // Filter blogs
  useEffect(() => {
    const filteredArray = blogs.filter((blog) => {
      if (
        blog.title
          .toLocaleLowerCase()
          .includes(debouncedSearchQuery.toLowerCase())
      )
        if (blog.categories.includes(category as string) || category === "")
          return true;
      return false;
    });
    setFilteredBlogs(filteredArray);
    if (blogs.length) setLoading(false);
  }, [blogs, category, debouncedSearchQuery]);

  return (
    <div className={styles.container}>
      <SearchBox
        query={searchQuery}
        setQuery={setSearchQuery}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      {error ? (
        <LoadingError />
      ) : loading ? (
        <Loading />
      ) : filteredBlogs.length ? (
        <>
          <div className={styles.list}>
            {filteredBlogs
              .slice(
                currentPage === 0
                  ? 0
                  : (currentPage + 1) * pageLimit - pageLimit,
                currentPage === 0 ? pageLimit : (currentPage + 1) * pageLimit
              )
              .map((blog) => (
                <BlogItem
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  image={blog.image}
                  date={blog.date}
                />
              ))}
          </div>
          <Pagination
            count={
              filteredBlogs.length > pageLimit
                ? Math.ceil(filteredBlogs.length / pageLimit)
                : 1
            }
            page={currentPage + 1}
            shape="rounded"
            onChange={handlePageChange}
            sx={{ alignSelf: "center" }}
          />
        </>
      ) : (
        <p>No Post found!</p>
      )}
    </div>
  );
}
