import React from "react";
import { NavBar, NavBack, Header, Divider, ProfileImgUI, Save, UploadButton } from "components/ui";
import styles from "styles/profile-image.module.css";

export const ProfileImage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header_container}>
          <NavBack nav="/profile" />
          <Header header="Profile Image" />
          <Save />
        </div>
        <ProfileImgUI />
        <Divider />
      </div>
      <UploadButton />
      <NavBar />
    </div>
  )
}