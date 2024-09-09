import FeaturedBlogsSection from "@/components/featuredBlogsSection/FeaturedBlogsSection";
import HeroSection from "@/components/heroSection/HeroSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <FeaturedBlogsSection />
    </main>
  );
}
