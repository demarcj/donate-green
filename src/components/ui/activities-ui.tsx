import React from "react";
import { useNavigate } from "react-router-dom"
import styles from "styles/organization.module.css";
import wood from "images/wood.jpg";

export const ActivitiesUI: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.organization_container}>
      <div className={styles.img_container}>
        <img
          className={styles.img}
          onClick={() => navigate(`/activities/share`)}
          src={wood} 
          alt="" 
        />
        <div className={styles.favorite_container}></div>
      </div>
      <h2>Title of Organiztion</h2>
      <div>Location</div>
      <div className={styles.progress}></div>
      <div className={styles.bottom_container}>
        <div>Amount donated</div>
        <div> Donation goal</div>
      </div>
    </div>
  )
}