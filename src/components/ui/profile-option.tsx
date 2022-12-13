import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "styles/profile.module.css";

export const ProfileOption: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className={styles.option_container}>
        <div className={styles.left_container}>
          <img src="" alt="" />
          <div>Create Fundraiser</div>
        </div>
        <span 
          className="material-icons"
          onClick={() => navigate(`/fundraiser`)}
        >chevron_right</span>
      </div>
    </>
  )
}