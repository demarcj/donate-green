import React, { useState } from "react";
import { SearchInput, HomeUI, NavBar } from "components/ui";
import { OrganizationModel } from "interface";
import { OrganizationData } from "temp";
import styles from 'styles/home.module.css';

export const Home: React.FC = () => {
  const [search, set_search] = useState(``);
  const [organiztion, set_organiztion] = useState(OrganizationData);

  const filter_organiztion = (search_word: string) => {
    const filter_org = OrganizationData.filter(org => {
      set_search(search_word);
      const tidy = search_word.toLocaleLowerCase().trim();
      const is_title = org.title.toLocaleLowerCase().includes(tidy);
      const is_location = org.location.toLocaleLowerCase().includes(tidy);
      return !tidy || is_title || is_location;
    });
    set_organiztion(filter_org);
  }

  return (
    <div className={styles.home_container}>
      <SearchInput
        search={search}
        emit={filter_organiztion}
      />
      <h1 className={styles.header}>Help heal the world one community at a time</h1>
      {
        organiztion.map((org: OrganizationModel) => (
          <HomeUI
            key={org.id}
            org={org}
          />
        ))
      }
      <NavBar />
    </div>
  )
}