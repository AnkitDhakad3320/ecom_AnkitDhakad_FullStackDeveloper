import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { themes, ThemeKey } from "../../themes/Themes";
import styles from "../header/Header.module.css";

const ThemeDropdown: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={e => setTheme(e.target.value as ThemeKey)}
      className={styles.dropdown}
    >
      {Object.entries(themes).map(([k, t]) =>
        <option key={k} value={k}>{t.name}</option>
      )}
    </select>
  );
};

export default ThemeDropdown;
