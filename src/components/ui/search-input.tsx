import React from "react";
import { SearchModel } from "interface"
import search_icon from "images/search.png";
import styles from "styles/search.module.css";

export const SearchInput: React.FC<SearchModel> = ({search, emit}) => {
  return (
    <div className={styles.search_container}>
      <input
        className={styles.search}
        type="search" 
        name="search" 
        id="search" 
        placeholder="Search Organizations"
        value={search}
        onChange={e => emit(e.target.value)}
      />
      <img className={styles.search_icon} src={search_icon} alt="" />
    </div>
  )
}