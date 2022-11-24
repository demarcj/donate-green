import React from "react";
import styles from 'styles/icon-title.module.css';

export const IconTitle: React.FC = () => {
  return (
    <div>
      <div className={styles.img}></div>
      <h1 className={styles.title}>Donate Green</h1>
    </div>
  )
}