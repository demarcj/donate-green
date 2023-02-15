import React from "react";
import { NavBar, Header, Divider, NavBack, ImgLiked } from "components/ui";
import styles from "styles/liked.module.css"
import { OrganizationData } from "temp";

export const Liked: React.FC = () => {
  return (
    <>
      <div className={styles.header_container}>
        <NavBack nav="/profile" />
        <Header header="Liked Organization" />
      </div>
      <Divider />
      {
        OrganizationData.map(org => (
          <div key={org.id} className={styles.container}>
            <ImgLiked 
              id={org.id}
              liked_organization={org.liked_organization}
            />
            <div className={styles.content_container}>
              <div>{org.title}</div>
              <div>{org.location}</div>
            </div>
          </div>
        ))
      }
      <NavBar />
    </>
  )
}