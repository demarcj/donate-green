import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "styles/profile.module.css";
import { ProfileOptionModel, ProfileImg } from "interface";
import account from "images/account.png";
import heart from "images/heart.png";
import message from "images/message.png";
import profile from "images/profile.png";
import wrench from "images/wrench.png";

export const ProfileOption: React.FC<ProfileOptionModel> = ({ img, nav, page_type }) => {
  const navigate = useNavigate();
  const src: ProfileImg = {
    "account": account,
    "heart": heart,
    "message": message,
    "profile": profile,
    "wrench": wrench
  }

  return (
      <div className={styles.option_container}>
        <img className={styles.img} src={src[img]} alt="" />
        <div>{page_type}</div>
        <span 
          className={["material-icons", styles.chevron].join(" ")}
          onClick={() => { navigate(`${nav}`)} }
        >chevron_right</span>
      </div>
  )
}