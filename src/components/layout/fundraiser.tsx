import React from "react";
import { NavBar, NavBack, Header, Divider, Search } from "components/ui";
import styles from "styles/fundraiser.module.css"

export const Fundraiser: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Header header="Create Fundraiser" />
      <Search />
      <Divider />
      <h2 className={styles.header}>Select a nonprofit organiztion</h2>
      <NavBar />
    </>
  )
}