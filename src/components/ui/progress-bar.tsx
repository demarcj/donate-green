import React from 'react';
import { ProgressBarModel } from "interface";
import styles from "styles/progress-bar.module.css";

export const ProgressBar: React.FC<ProgressBarModel> = ({ donation_goal, donation_amount, location }) => {
  const percent = `${100 / (donation_goal / donation_amount)}%`;
  const progress_style = { width: percent };

  return (
    <>
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
    </>
  )
}