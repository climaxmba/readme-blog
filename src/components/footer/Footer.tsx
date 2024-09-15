import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Logo } from "../navBar/NavBar";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Logo />
      
      <div className={styles.socialIcons}>
        <IconButton href="https://www.linkedin.com/in/climaxmba/">
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton href="https://github.com/climaxmba">
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton href="https://www.instagram.com/">
          <Instagram fontSize="large" />
        </IconButton>
        <IconButton href="https://www.facebook.com/">
          <Facebook fontSize="large" />
        </IconButton>
      </div>

      <p className={styles.author}>
        Copywrite &copy; {new Date().getFullYear()}; Made by{" "}
        <a href="https://github.com/climaxmba">Climax Mba</a>
      </p>
    </footer>
  );
}
