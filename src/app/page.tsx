import FeaturedBlogsSection from "@/components/featuredBlogsSection/FeaturedBlogsSection";
import HeroSection from "@/components/heroSection/HeroSection";
import CategoriesSection from "@/components/categoriesSection/CategoriesSection";
import MuiTheme from "@/components/MuiTheme/MuiTheme";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <MuiTheme>
        <HeroSection />
        <FeaturedBlogsSection />
        <CategoriesSection />
      </MuiTheme>
    </main>
  );
}
