import React from "react";
import { NavBar, NavBack, Header, Divider, SearchInput } from "components/ui";
import { OrganizationData } from "temp";
import { HomeModel } from "interface";
import { url_converter } from "functions"
import { useNavigate } from "react-router-dom";
import styles from "styles/fundraiser.module.css";
import wood from "images/wood.jpg";

export const Fundraiser: React.FC = () => {
  const navigate = useNavigate();
  const select = (data: HomeModel) => {
    const { title, id } = data;
    localStorage.setItem(`create`, JSON.stringify({ title }));
    navigate(`/profile/fundraiser/create/${url_converter(title)}/one?id=${id}`);
  };

  return (
    <>
      <div className={styles.header_container}>
        <NavBack nav="/profile" />
        <Header header="Create Fundraiser" />
      </div>
      {/* <SearchInput /> */}
      <Divider />
      <h2 className={styles.header}>Select a nonprofit organiztion</h2>
      {
        OrganizationData.map(data => (
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