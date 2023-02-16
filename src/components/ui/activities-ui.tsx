import React from "react";
import { useNavigate } from "react-router-dom";
import { Divider, More } from "components/ui";
import { OrganizationModel } from "interface";
import styles from "styles/activities.module.css";
import wood from "images/wood.jpg";

export const ActivitiesUI: React.FC<{org: OrganizationModel}> = ({ org }) => {
  const navigate = useNavigate();
  const {id, title, location, donation_amount, donation_goal} = org;
  return (
    <div className={styles.activities_container}>
      <div className={styles.top_container}>
        <div>
          <h2>{title}</h2>
          <div>{location}</div>
        </div>
        <img
          className={styles.img}
          onClick={() => navigate(`/activities/share?id=${id}`)}
          src={wood} 
          alt="" 
        />
      </div>
      <Divider />      
      <div className={styles.bottom_container}>
        <div>Amount donated</div>
        <div>$ {new Intl.NumberFormat().format(donation_amount)} USD</div>
      </div>
      <div className={styles.bottom_container}>
        <div> Donation goal</div>
        <div>$ {new Intl.NumberFormat().format(donation_goal)} USD</div>
      </div>
      <More />
    </div>
  )
}