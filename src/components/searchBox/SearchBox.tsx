"use client";
import { MenuItem, Select, TextField } from "@mui/material";
import { SetStateAction } from "react";

import styles from "./searchBox.module.scss";

interface SearchAndFilterProps {
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
  category: string;
  setCategrory: React.Dispatch<SetStateAction<string>>;
  categories: string[];
}

export default function SearchBox({
  query,
  setQuery,
  category,
  setCategrory,
  categories,
}: SearchAndFilterProps) {
  return (
    <div className={styles.container}>
      <TextField
        variant="filled"
        label="Search Blogs"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        sx={{ ".MuiInputBase-root": { bgcolor: "transparent" } }}
      />

      <Select
        label="Categories"
        variant="filled"
        value={category}
        onChange={(e) => setCategrory(e.target.value)}
        sx={{
          minWidth: 100,
        }}
      >
        <MenuItem value="">
          <i>All Categories</i>
        </MenuItem>
        {categories.map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
