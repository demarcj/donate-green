import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBar, Search, NavBack, ImgLiked, GreenContainer } from "components/ui";
import styles from "styles/organization.module.css";

export const Organization: React.FC = () => {
  const search = useLocation().search;
  const get_id = new URLSearchParams(search).get(`id`);
  const id = get_id ? get_id : ``;
  const url = window.location.pathname + `/payment?id=${id}`;

  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <NavBack nav="/home" />
        <div className={styles.search_container}>
          <Search />
        </div>
      </div>
      <GreenContainer>
        <Link to={url}>
          <ImgLiked
            id={id}
            liked_organization={true}
          />
        </Link>
      </GreenContainer>
      <NavBar />
    </div>
  )
}