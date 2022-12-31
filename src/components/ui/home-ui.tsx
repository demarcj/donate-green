import React from "react";
import { ImgLiked, ProgressBar } from "./";
import { HomeModel } from "interface";
import styles from "styles/home.module.css";

export const HomeUI: React.FC<HomeModel> = ({id, title, location, donation_goal, donation_amount, liked_organization}) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <ImgLiked 
          id={id}
          name={title}
          url="/home/organization/"
          liked_organization={liked_organization}
        />
      </div>
      <h2>{title}</h2>
      <ProgressBar 
        donation_amount={donation_amount}
        donation_goal={donation_goal}
        location={location}
      />
    </div>
  )
}