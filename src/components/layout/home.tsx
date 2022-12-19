import React from "react";
import { Search, Organization, NavBar } from "components/ui";
import styles from 'styles/home.module.css'

export const Home: React.FC = () => {

  return (
    <div className={styles.home_container}>
      <Search />
      <h1 className={styles.header}>Help heal the world one community at a time</h1>
      <Organization />
      <Organization />
      <NavBar />
    </div>
  )
}