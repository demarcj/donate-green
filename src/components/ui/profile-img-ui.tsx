import React from "react";
import { CredentialModel } from "interface";
import { UserImage } from "./";
import styles from 'styles/profile-img-ui.module.css';

export const ProfileImgUI: React.FC = () => {
  const credential: CredentialModel = JSON.parse(localStorage.getItem(`credential`) as string);

  return (
    <div className={styles.profile_img_container}>
      <UserImage 
        name={credential.name}
      />
      <div className={styles.profile_name}>{credential.name}</div>
    </div>
  )
};