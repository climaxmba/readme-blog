"use client";
import Image from "next/image";
import Link from "next/link";
import { type Dispatch, type SetStateAction, useState } from "react";
import {
  AddOutlined,
  Close,
  Contrast,
  HomeOutlined,
  LoginOutlined,
  MenuOutlined,
  PageviewOutlined,
  PersonOutline,
  StarOutline,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { routes } from "@/lib/constants";
import { useNavContext } from "@/components/navBar/NavbarContext";
import styles from "./navBar.module.scss";

/** Requires Provider */
export default function NavBar() {
  const { handleThemeSwitch } = useNavContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <Logo />

      <ul>
        <li>
          <Link href={routes.home}>Home</Link>
        </li>
        <li>
          <Link href={routes.blogs}>Blogs</Link>
        </li>
        <li>
          <Link href={routes.categories}>Categories</Link>
        </li>
        <li>
          <Link href={routes.contact}>Contact</Link>
        </li>
      </ul>

      <ul className={styles.iconLinks}>
        <li>
          <span
            role="button"
            tabIndex={0}
            title="Switch Theme"
            onClick={handleThemeSwitch}
          >
            <Contrast /> Theme
          </span>
        </li>
        <li>
          <Link href={routes.wishlist}>
            <StarOutline /> Wishlist
          </Link>
        </li>
        <li>
          <span role="button" title="Login">
            <LoginOutlined /> Login
          </span>
        </li>
        <li>
          <Link href={routes.writeBlog}>
            <AddOutlined /> Create New
          </Link>
        </li>
      </ul>

      <IconButton
        onClick={() => setMenuOpen(true)}
        title="Open Menu"
        className={styles.menuButton}
      >
        <MenuOutlined />
      </IconButton>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
}

function MobileMenu({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
      <IconButton title="Close Menu" onClick={() => setMenuOpen(false)}>
        <Close />
      </IconButton>

      <Logo />

      <ul>
        <li>
          <Link href={routes.categories}>Categories</Link>
        </li>
        <li>
          <Link href={routes.authors}>Authors</Link>
        </li>
        <li>
          <Link href={routes.contact}>Contact</Link>
        </li>
      </ul>

      <ul className={styles.iconLinks}>
        <li>
          <Link href={routes.writeBlog}>
            <AddOutlined /> Create New
          </Link>
        </li>
        <li>
          <Link href={routes.me}>
            <PersonOutline /> Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

/** Requires Provider */
export function BottomNav() {
  const { handleThemeSwitch } = useNavContext();

  return (
    <nav className={styles.bottomNav}>
      <Link href={routes.home}>
        <HomeOutlined /> Home
      </Link>
      <Link href={routes.blogs}>
        <PageviewOutlined /> Blogs
      </Link>
      <Link href={routes.wishlist}>
        <StarOutline /> Wishlist
      </Link>
      <span
        role="button"
        tabIndex={0}
        title="Switch Theme"
        onClick={handleThemeSwitch}
      >
        <Contrast /> Theme
      </span>
    </nav>
  );
}

function Logo() {
  return (
    <Link href={routes.home}>
      <Image alt="Logo" src="/next.svg" height={15.25} width={75} />
    </Link>
  );
}
