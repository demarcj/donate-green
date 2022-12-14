import React from "react";
import { NavBar, ProfileOption } from "components/ui";
import styles from "styles/profile.module.css";
import button from "styles/button.module.css";

export const Profile: React.FC = () => {
  const id = `1234`;
  return (
    <>
      <h1 className={styles.profile}>Profile</h1>
      <div className={styles.profile_name}>Royce Greenfield</div>
      <div className={styles.divider}></div>
      <ProfileOption 
        img="test"
        page_type="Create Fundraiser"
        nav={`/fundraiser/${id}`}
      />
      <ProfileOption 
        img="test"
        page_type="Liked Organiztions"
        nav={`/liked/${id}`}
      />
      <ProfileOption 
        img="test"
        page_type="Messages"
        nav={`/messages/${id}`}
      />
      <ProfileOption 
        img="test"
        page_type="Profile Image"
        nav={`/profile-image/${id}`}
      />
      <ProfileOption 
        img="test"
        page_type="Account"
        nav={`/account/${id}`}
      />
      <button className={button.signout}>Sign out</button>
      <NavBar />
    </>
  )
}