import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => (
  <main className={styles.container}>
    <h1 className={styles.title}>
      About ThemeSwitch: Empowering Your Digital Aesthetic
    </h1>

    <div className={styles.intro}>
      At ThemeSwitch, we believe that your digital environment should be as dynamic and expressive as your ideas.
      We've pioneered a seamless platform for developers, designers, and everyday users to effortlessly switch between distinct UI themes, transforming the look and feel of web applications with a single click.
    </div>

    <h2 className={styles.sectionHeading}>Our Vision & Mission</h2>

    <div className={styles.mission}>
      <p>
        Our vision is a web where design is fluid, accessible, and endlessly customizable. We're committed to building tools that empower creators to express their brand identity and enhance user experience through adaptable interfaces, without compromising on performance or accessibility.
      </p>
      <p>
        Our mission is to simplify the complexities of front-end theming, providing robust, scalable solutions that cater to diverse aesthetic preferences and functional requirements. We strive to foster a community where innovation thrives and beautiful design is effortless.
      </p>
    </div>

    <h2 className={styles.sectionHeading}>Our Core Values</h2>
    <div className={styles.valuesGrid}>
      <div className={styles.valueCard}>
        <div className={styles.valueIcon} title="Innovation">💡</div>
        <div className={styles.valueTitle}>Innovation</div>
        <div className={styles.valueDesc}>
          We continuously push the boundaries of UI/UX design, exploring new paradigms and technologies to bring you the most advanced theming solutions.
        </div>
      </div>
      <div className={styles.valueCard}>
        <div className={styles.valueIcon} title="Simplicity">🛠</div>
        <div className={styles.valueTitle}>Simplicity</div>
        <div className={styles.valueDesc}>
          Complexity is our enemy. We build intuitive tools that make sophisticated theming effortless, allowing you to focus on creativity, not configuration.
        </div>
      </div>
      <div className={styles.valueCard}>
        <div className={styles.valueIcon} title="Community">👥</div>
        <div className={styles.valueTitle}>Community</div>
        <div className={styles.valueDesc}>
          We foster a vibrant ecosystem where users, developers, and designers can collaborate, share ideas, and contribute to the evolution of adaptable digital experiences.
        </div>
      </div>
    </div>

    <button className={styles.cta}>Explore Our Themes</button>
  </main>
);

export default About;
