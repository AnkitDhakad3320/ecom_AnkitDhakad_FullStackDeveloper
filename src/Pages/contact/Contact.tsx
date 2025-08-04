import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => (
  <section>
    <div className={styles.banner}>
      <div className={styles.bannerTitle}>Let's Connect!</div>
      <div className={styles.bannerSubtitle}>
        We're here to help and answer any questions you might have.<br />
        We look forward to hearing from you.
      </div>
    </div>
    <div className={styles.infoGrid}>
      <div className={styles.infoCard}>
        <div className={styles.infoTitle}>Our Office</div>
        <div className={styles.infoDetail}>123 Blvd. Suite<br />Indore, MP 452001<br />India</div>
      </div>
      <div className={styles.infoCard}>
        <div className={styles.infoTitle}>Call Us</div>
        <div className={styles.infoDetail}>+1 (999) 123-4567<br />Mon - Fri, 9 AM - 5 PM PST</div>
      </div>
      <div className={styles.infoCard}>
        <div className={styles.infoTitle}>Email Us</div>
        <div className={styles.infoDetail}>support@Zxsis.com<br />Response within 24 hours</div>
      </div>
    </div>
  </section>
);

export default Contact;
