import React from "react";
import styles from "styles/organization.module.css";
import wood from "images/wood.jpg";

export const Organization: React.FC = () => {

  return (
    <div className={styles.organization_container}>
      <div className={styles.img_container}>
        <img
          className={styles.img}
          src={wood} 
          alt="" 
        />
        <div className={styles.favorite_container}></div>
      </div>
      <h2>Title of Organiztion</h2>
      <div>Location</div>
      <div className={styles.bottom_container}>
        <div>Amount donated</div>
        <div> Donation goal</div>
      </div>
    </div>
  )
}