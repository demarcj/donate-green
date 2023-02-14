import React from "react";
import { NavBar, Option, Divider, Header, NavBack } from "components/ui";
import styles from "styles/share.module.css";

export const Share: React.FC = () => {

  return (
    <>
      <div className={styles.header_container}>
        <NavBack nav="activities" />
        <Header header="Share" />
      </div>
      <Divider />
      <Option 
        img="facebook"
        text="Facebook"
        social="facebook"
      />
      <Option 
        img="message"
        text="Message"
        social="whatsapp"
      />
      <Option 
        img="email"
        text="Email"
        social="email"
      />
      <NavBar />
    </>
  )
}