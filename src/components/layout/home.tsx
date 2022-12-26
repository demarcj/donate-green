import React from "react";
import { Search, HomeUI, NavBar } from "components/ui";
import { OrganizationData } from "temp"
import styles from 'styles/home.module.css'

export const Home: React.FC = () => {

  return (
    <div className={styles.home_container}>
      <Search />
      <h1 className={styles.header}>Help heal the world one community at a time</h1>
      {
        OrganizationData.map(org => (
          <HomeUI
            key={org.id}
            id={org.id}
            name={org.name}
            location={org.location}
            donation_goal={org.donation_goal}
            donation_amount={org.donation_amount}
            liked_organization={org.liked_organization}
          />
        ))
      }
      <NavBar />
    </div>
  )
}