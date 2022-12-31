import React from "react";
import { NavBar, NavBack, Header, Divider, ProfileImgUI, Save, UploadButton } from "components/ui";
import styles from "styles/profile-image.module.css";

export const ProfileImage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavBack nav="/profile" />
        <Save />
        <Header header="Profile Image" />
        <ProfileImgUI />
        <Divider />
      </div>
      <UploadButton />
      <NavBar />
    </div>
  )
}