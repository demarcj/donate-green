import React from "react";
import { NavBar, Header, Divider, NavBack, ImgLiked } from "components/ui";
import styles from "styles/liked.module.css"
import { OrganizationData } from "temp";

export const Liked: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Header header="Liked Organization" />
      <Divider />
      {
        OrganizationData.map(org => (
          <div key={org.id} className={styles.container}>
            <ImgLiked 
              id={org.id}
            />
            <div className={styles.content_container}>
              <div>{org.name}</div>
              <div>{org.location}</div>
            </div>
          </div>
        ))
      }
      <NavBar />
    </>
  )
}