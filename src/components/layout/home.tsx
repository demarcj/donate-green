import React from "react";
import { Search, Organization, NavBar } from "components/ui";
import styles from 'styles/home.module.css'

export const Home: React.FC = () => {

  return (
    <div className={styles.home_container}>
      <Search />
      <Organization />
      <NavBar />
    </div>
  )
}