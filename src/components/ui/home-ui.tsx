import React from "react";
import { ImgLiked } from "./"
import { HomeModel } from "interface";
import styles from "styles/home.module.css";

export const HomeUI: React.FC<HomeModel> = ({id, name, location, donation_goal, donation_amount, liked_organization}) => {
  const percent = `${100 / (donation_goal / donation_amount)}%`;
  const progress_style = { width: percent };
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <ImgLiked 
          id={id}
          name={name}
          url="/home/organization/"
        />
      </div>
      <h2>{name}</h2>
      <div>{location}</div>
      <div className={styles.progress_container}>
        <div className={styles.progress_max}></div>
        <div 
          className={styles.progress}
          style={progress_style}
        ></div>
      </div>
      <div className={styles.bottom_container}>
        <div>Amount donated</div>
        <div> Donation goal</div>
      </div>
    </div>
  )
}