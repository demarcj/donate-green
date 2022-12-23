import React from "react";
import { useNavigate } from "react-router-dom"
import { Divider, More } from "components/ui"
import styles from "styles/activities.module.css";
import wood from "images/wood.jpg";

export const ActivitiesUI: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.activities_container}>
      <div className={styles.top_container}>
        <div>
          <h2>Title of Organiztion</h2>
          <div>Location</div>
        </div>
        <img
          className={styles.img}
          onClick={() => navigate(`/activities/share`)}
          src={wood} 
          alt="" 
        />
      </div>
      <Divider />      
      <div className={styles.bottom_container}>
        <div>Amount donated</div>
        <div>Amount donated</div>
      </div>
      <div className={styles.bottom_container}>
        <div> Donation goal</div>
        <div> Donation goal</div>
      </div>
      <More />
    </div>
  )
}