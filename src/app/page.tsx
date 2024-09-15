import MuiTheme from "@/components/MuiTheme/MuiTheme";
import HeroSection from "@/components/heroSection/HeroSection";
import NewsletterSection from "@/components/newsletterSection/NewsletterSection";
import CategoriesSection from "@/components/categoriesSection/CategoriesSection";
import ContactSection from "@/components/contactSection/ContactSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <MuiTheme>
        <HeroSection />
        <NewsletterSection />
        <CategoriesSection />
        <ContactSection />
      </MuiTheme>
    </main>
  );
}
