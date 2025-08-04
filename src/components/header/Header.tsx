import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import ThemeDropdown from "../theme_dropdown/ThemeDropdown";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logo}>ZXSIS</div>
    <nav className={styles.nav}>
      <NavLink to="/" end className={({isActive}) => isActive ? styles.linkActive : styles.link}>Home</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? styles.linkActive : styles.link}>About</NavLink>
      <NavLink to="/contact" className={({isActive}) => isActive ? styles.linkActive : styles.link}>Contact</NavLink>
    </nav>
    <ThemeDropdown /> 
  </header>
);
export default Header;
