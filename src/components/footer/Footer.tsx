import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.contactInfo}>
          © 2025 Zxsis Pte. Ltd. |  0755-516774 | 123 Blvd. Suitet,Indore, MP 452001, India
        </div>
        <div className={styles.contactInfo}>
          Contact: +91 8231 4107 | Email: hr@zxsis-inc.com
        </div>
        <div className={styles.links}>
          <a href="/" className={styles.link}>Home</a>
          <a href="/about" className={styles.link}>About</a>
          <a href="/contact" className={styles.link}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
