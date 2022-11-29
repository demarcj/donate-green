import React from "react";
import styles from 'styles/icon-title.module.css';
import img from 'images/earth.png';

export const IconTitle: React.FC = () => {
  return (
    <div className={styles.icon_title_container}>
      <img className={styles.img} src={img} alt="Earth"/>
      <h1 className={styles.title}>Donate Green</h1>
    </div>
  )
}