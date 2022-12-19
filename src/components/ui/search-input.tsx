import React from "react";
import search from "images/search.png";
import styles from "styles/search.module.css";

export const Search: React.FC = () => {
  return (
    <div className={styles.search_container}>
      <input
        className={styles.search}
        type="search" 
        name="search" 
        id="search" 
        placeholder="Search Organizations"
      />
      <img className={styles.search_icon} src={search} alt="" />
    </div>
  )
}