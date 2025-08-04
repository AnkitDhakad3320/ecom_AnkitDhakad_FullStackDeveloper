import React, { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import { useTheme } from "../../context/ThemeContext";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const CardList: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  let gridClass = styles.grid;
  if (theme === "theme2") gridClass += " " + styles["grid--sidebar"];
  if (theme === "theme3") gridClass += " " + styles["grid--cards"];

  return (
    <section className={gridClass}>
      {products.slice(0, 140).map(p => (
        <div className={styles.card} key={p.id}>
          <img src={p.image} alt={p.title} className={styles.img} />
          <div className={styles.title}>{p.title}</div>
          <div className={styles.price}>${p.price}</div>
        </div>
      ))}
    </section>
  );
};

export default CardList;
