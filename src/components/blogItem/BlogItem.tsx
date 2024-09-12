"use client";
import Link from "next/link";
import { routes } from "@/lib/constants";
import StarOutline from "@mui/icons-material/StarOutline";
import IconButton from "@mui/material/IconButton";

import styles from "./blogItem.module.scss";

export default function BlogItem({ id, title, image, date }: BlogItemProps) {
  return (
    <Link
      style={{ backgroundImage: `url(${image})` }}
      href={`${routes.blogs}/${id}`}
      className={styles.container}
    >
      <div className={styles.shift}></div>
      <div>
        <p>{title}</p>
        <div className={styles.likesNDate}>
          <IconButton>
            <StarOutline />
          </IconButton>
          {date}
        </div>
      </div>
    </Link>
  );
}
