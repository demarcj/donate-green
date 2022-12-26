import React from "react";
import { NavBar, NavBack, Header, Divider, Search } from "components/ui";
import { OrganizationData } from "temp";
import { url_converter } from "functions"
import { Link } from "react-router-dom";
import styles from "styles/fundraiser.module.css";
import wood from "images/wood.jpg";

export const Fundraiser: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Header header="Create Fundraiser" />
      <Search />
      <Divider />
      <h2 className={styles.header}>Select a nonprofit organiztion</h2>
      {
        OrganizationData.map(data => (
          <div key={data.id}>
            <Link to={`/profile/fundraiser/create/${url_converter(data.name)}/one?id=${data.id}`}>
              <img src={wood} alt="" />
            </Link>
          </div>
        ))
      }
      <NavBar />
    </>
  )
}