import React, { useState } from "react";
import { Search, HomeUI, NavBar } from "components/ui";
import { OrganizationData } from "temp"
import styles from 'styles/home.module.css'

export const Home: React.FC = () => {
  const [search, set_search] = useState(``);

  const filter_organiztion = OrganizationData.filter(org => {
    const tidy = search.toLocaleLowerCase().trim();
    const is_title = org.title.toLocaleLowerCase().includes(tidy);
    const is_location = org.location.toLocaleLowerCase().includes(tidy);
    return !search || is_title || is_location;
  })

  return (
    <div className={styles.home_container}>
      <Search />
      <h1 className={styles.header}>Help heal the world one community at a time</h1>
      {
        filter_organiztion.map(org => (
          <HomeUI
            key={org.id}
            id={org.id}
            title={org.title}
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