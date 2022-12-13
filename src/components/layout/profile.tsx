import React from "react";
import { NavBar, ProfileOption } from "components/ui";
import styles from "styles/profile.module.css";
import button from "styles/button.module.css";

export const Profile: React.FC = () => {
  return (
    <>
      <h1 className={styles.profile}>Profile</h1>
      <div className={styles.profile_name}>Royce Greenfield</div>
      <div className={styles.divider}></div>
      <ProfileOption />
      <ProfileOption />
      <ProfileOption />
      <ProfileOption />
      <ProfileOption />
      <button className={button.signout}>Sign out</button>
      <NavBar />
    </>
  )
}