import React from "react";
import styles from './start.module.css';

export const Start: React.FC = () => {
  return (
    <div className={styles.start_container}>
      <div className={styles.img}></div>
      <h1 className={styles.title}>Donate Green</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" name="password" id="password" />
      <button>Sign in</button>
      <div className={styles.divider_container}>
        <div className={styles.divider}></div>
        <div className={styles.text}>Or</div>
        <div className={styles.divider}></div>
      </div>
      <button>Sign up</button>
    </div>
  )
}