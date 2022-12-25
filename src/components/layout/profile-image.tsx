import React from "react";
import { NavBar, NavBack, Header, Divider, ProfileImgUI, Save } from "components/ui";
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
      <div className={styles.body}>
        <form className={styles.form}>
          <div className={styles.button}>
            <label className={styles.label} htmlFor="upload">Upload image</label>
            <input className={styles.input} type="file" name="upload" id="upload" accept=".jpg, .jpeg, .png"  />
          </div>
        </form>
      </div>
      <NavBar />
    </div>
  )
}