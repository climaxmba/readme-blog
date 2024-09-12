"use client";
import Link from "next/link";
import { routes } from "@/lib/constants";
import styles from "./authorItem.module.scss";
import Image from "next/image";

interface AuthorItemProps {
  name: string;
  id: string;
  image: string;
}

export default function AuthorItem({ name, id, image }: AuthorItemProps) {
  return (
    <Link href={`${routes.authors}/${id}`} className={styles.container}>
      <Image alt="" height={150} width={150} src={image} />
      <p>{name}</p>
    </Link>
  );
}
