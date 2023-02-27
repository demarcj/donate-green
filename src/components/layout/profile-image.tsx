import React from "react";
import { NavBar, NavBack, Header, Divider, ProfileImgUI, Save } from "components/ui";
import button from "styles/button.module.css";
import styles from "styles/profile-image.module.css";

export const ProfileImage: React.FC = () => {
  const open_dialog = () => (document.querySelector(`#dialog`) as HTMLDialogElement).showModal();
  const close_dialog = () => (document.querySelector(`#dialog`) as HTMLDialogElement).close();

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
      <div className={styles.upload_container}>
        <button 
          className={button.upload}
          onClick={open_dialog}  
        >Upload image</button>
      </div>
      <dialog 
          id="dialog"
          className={styles.dialog}
        >
          <button onClick={close_dialog}>Close</button>
      </dialog>
      <NavBar />
    </div>
  )
}