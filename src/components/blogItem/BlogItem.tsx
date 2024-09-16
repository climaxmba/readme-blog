"use client";
import Link from "next/link";
import { routes } from "@/lib/constants";
import StarOutline from "@mui/icons-material/StarOutline";
import IconButton from "@mui/material/IconButton";
import { useWishlistContext } from "@/lib/WishListContext";

import styles from "./blogItem.module.scss";
import { Star } from "@mui/icons-material";

/** Requires `WishlistProvider` */
export default function BlogItem({ id, title, image, date }: BlogItemProps) {
  const { wishlist, addItem, removeItem } = useWishlistContext();

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
          <IconButton
            onClick={(e) => {
              wishlist.includes(id) ? removeItem(id) : addItem(id);
              e.preventDefault();
            }}
          >
            {wishlist.includes(id) ? (
              <Star htmlColor="gold" />
            ) : (
              <StarOutline htmlColor="gold" />
            )}
          </IconButton>
          {date}
        </div>
      </div>
    </Link>
  );
}
