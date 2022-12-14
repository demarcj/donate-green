import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "styles/profile.module.css";
import { ProfileOptionModel } from "interface";

export const ProfileOption: React.FC<ProfileOptionModel> = ({ img, nav, page_type }) => {
  const navigate = useNavigate();

  return (
      <div className={styles.option_container}>
        <img src={img} alt="" />
        <div>{page_type}</div>
        <span 
          className={["material-icons", styles.chevron].join(" ")}
          onClick={() => { navigate(`${nav}`)} }
        >chevron_right</span>
      </div>
  )
}