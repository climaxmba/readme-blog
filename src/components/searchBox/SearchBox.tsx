"use client";
import { MenuItem, Select, TextField } from "@mui/material";
import { SetStateAction } from "react";
import MuiTheme from "../MuiTheme/MuiTheme";
import { allCategories } from "@/lib/constants";

import styles from "./searchBox.module.scss";

interface SearchAndFilterProps {
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
  category: string | null;
  setCategory: React.Dispatch<SetStateAction<string>>;
  categories: string[];
}

export default function SearchBox({
  query,
  setQuery,
  category,
  setCategory,
  categories,
}: SearchAndFilterProps) {
  return (
    <div className={styles.container}>
      <MuiTheme>
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
          onChange={(e) => setCategory(e.target.value as string)}
          sx={{
            minWidth: 100,
          }}
        >
          <MenuItem value={allCategories}>
            <i>All Categories</i>
          </MenuItem>
          {categories.map((val) => (
            <MenuItem key={val} value={val}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </MuiTheme>
    </div>
  );
}
