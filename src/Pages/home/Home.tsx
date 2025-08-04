import React from "react";
import styles from "./Home.module.css";
import CardList from "../../components/cardlist/CardList";

const Home: React.FC = () => (
  <main>
    <div className={styles.hero}>
      <div className={styles.title}>Discover Your Perfect Theme</div>
      <div className={styles.desc}>
        Welcome to ThemeSwitch, where elegance meets adaptability.
        Explore our curated collection of digital products and experience seamless UI transformations with just a click.
      </div>
      <button className={styles.ctaButton}>Explore Products</button>
    </div>
    <div className={styles.sectionTitle}>Featured Products</div>
    <CardList />
  </main>
);

export default Home;
