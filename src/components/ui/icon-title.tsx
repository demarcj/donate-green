import React from "react";
import styles from 'styles/icon-title.module.css';
import img from 'images/earth.png';

export const IconTitle: React.FC = () => {
  return (
    <div className={styles.icon_title_container}>
      <img className={styles.img} src={img} alt="Earth"/>
      <h1 className={styles.title}>
        <span className={styles.donate}>Donate</span>  <span className={styles.green}>Green</span>
      </h1>
    </div>
  )
}