import React from "react";
import styles from "styles/input.module.css"

export const Search: React.FC = () => {
  return (
    <>
      <input
        className={styles.search}
        type="search" 
        name="search" 
        id="search" 
        placeholder="Search Organizations"
      />
    </>
  )
}