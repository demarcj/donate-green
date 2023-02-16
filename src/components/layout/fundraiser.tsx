import React, { useState } from "react";
import { NavBar, NavBack, Header, Divider, HomeUI, SearchInput } from "components/ui";
import { OrganizationData } from "temp";
import { OrganizationModel } from "interface";
import { url_converter } from "functions"
import { useNavigate } from "react-router-dom";
import styles from "styles/fundraiser.module.css";
import wood from "images/wood.jpg";

export const Fundraiser: React.FC = () => {
  const [search, set_search] = useState(``);
  const [organiztion, set_organiztion] = useState(OrganizationData);

  const navigate = useNavigate();
  const select = (data: OrganizationModel) => {
    const { title, id } = data;
    localStorage.setItem(`create`, JSON.stringify({ title }));
    navigate(`/profile/fundraiser/create/${url_converter(title)}/one?id=${id}`);
  };
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
    <>
      <div className={styles.header_container}>
        <NavBack nav="/profile" />
        <Header header="Create Fundraiser" />
      </div>
      <SearchInput
        search={search}
        emit={filter_organiztion}
      />
      <Divider />
      <h2 className={styles.header}>Select a nonprofit organiztion</h2>
      {
        organiztion.map(data => (
          <div 
            className={styles.container} 
            key={data.id}
            onClick={() => select(data)}
          >
            <img className={styles.img} src={wood} alt="" />
            <div className={styles.content_container}>
              <div>{data.title}</div>
              <div>{data.location}</div>
            </div>
          </div>
        ))
      }
      <NavBar />
    </>
  )
}