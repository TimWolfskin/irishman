import React from "react";

import styles from "../../styles/Home.module.css";
import BG from "../../images/poster.png";

const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 20%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>Nike Free Run 2018</div>
          <h1 className={styles.head}>feels super light and flexible.</h1>
          <button className={styles.button}>SHOP NOW</button>
        </div>
        <div className={styles.image}>
          <img src={BG} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
