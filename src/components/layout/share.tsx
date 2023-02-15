import React from "react";
import { NavBar, Option, Divider, Header, NavBack } from "components/ui";
import { useLocation } from "react-router-dom";
import { OrganizationData } from "temp";
import { social, share_img } from "global-constants"
import styles from "styles/share.module.css";

export const Share: React.FC = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get(`id`);
  const org = OrganizationData.find(data => data.id === id);
  const social_list: social[]  = [`facebook`, `whatsapp`, `email`]

  return (
    <>
      <div className={styles.header_container}>
        <NavBack nav="/activities" />
        <Header header="Share" />
        <div></div>
      </div>
      <Divider />
      {
        social_list.map(social => (
          <Option
            key={social} 
            img={social as share_img}
            text={social}
            social={social}
            org={org}
          />
        ))
      }
      <NavBar />
    </>
  )
}