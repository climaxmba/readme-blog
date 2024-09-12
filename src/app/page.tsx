import FeaturedBlogsSection from "@/components/featuredBlogsSection/FeaturedBlogsSection";
import HeroSection from "@/components/heroSection/HeroSection";
import CategoriesSection from "@/components/categoriesSection/CategoriesSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <FeaturedBlogsSection />
      <CategoriesSection />
    </main>
  );
}
