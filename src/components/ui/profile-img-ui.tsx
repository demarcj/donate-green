import React from "react";
import { CredentialModel } from "interface";
import styles from 'styles/profile-img-ui.module.css';
import placeholder from 'images/placeholder.jpg';

export const ProfileImgUI: React.FC = () => {
  const credential: CredentialModel = JSON.parse(localStorage.getItem(`credential`) as string);
  const src = credential.img ? credential.img : placeholder;

  return (
    <div className={styles.profile_img_container}>
      <img className={styles.img} src={src} alt="" />
      <div className={styles.profile_name}>{credential.name}</div>
    </div>
  )
}