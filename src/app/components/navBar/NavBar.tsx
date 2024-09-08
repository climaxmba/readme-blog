import Image from "next/image";
import Link from "next/link";
import {
  AddOutlined,
  Close,
  HomeOutlined,
  LoginOutlined,
  MenuOutlined,
  PageviewOutlined,
  PersonOutline,
  Search,
  StarOutline,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { routes } from "@/lib/constants";
import styles from "./navBar.module.scss";

export default function NavBar() {
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
          <Link href={routes.search}>
            <Search /> Search
          </Link>
        </li>
        <li>
          <Link href={routes.wishlist}>
            <StarOutline /> Wishlist
          </Link>
        </li>
        <li>
          <IconButton>
            <LoginOutlined /> Login
          </IconButton>
        </li>
        <li>
          <Link href={routes.writeBlog}>
            <AddOutlined /> Create New
          </Link>
        </li>
      </ul>

      <IconButton title="Open Menu" className={styles.menuButton}>
        <MenuOutlined />
      </IconButton>

      <MobileMenu />
    </nav>
  );
}

function MobileMenu() {
  return (
    <div className={styles.mobileMenu}>
      <IconButton title="Close Menu">
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

export function BottomNav() {
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
      <Link href={routes.search}>
        <Search /> Search
      </Link>
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
