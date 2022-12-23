import React from "react";
import { NavBar, NavBack, Header, Divider, ProfileImgUI, Save } from "components/ui";
import styles from "styles/profile-image.module.css";

export const ProfileImage: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Save />
      <Header header="Profile Image" />
      <ProfileImgUI />
      <Divider />
      <form>
        <label className={styles.label} htmlFor="upload">Upload image</label>
        <input className={styles.input} type="file" name="upload" id="upload" accept=".jpg, .jpeg, .png"  />
      </form>
      <NavBar />
    </>
  )
}