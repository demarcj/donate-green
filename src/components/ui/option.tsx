import React from "react";
import { useNavigate } from "react-router-dom";
import { OptionModel, ProfileImg } from "interface";
import { social } from "global-constants";
import ShareOnSocial from 'react-share-on-social';
import styles from "styles/option.module.css";
import account from "images/account.png";
import heart from "images/heart.png";
import message from "images/message.png";
import profile from "images/profile.png";
import wrench from "images/wrench.png";
import facebook from "images/facebook.png";
import instagram from "images/instagram.png";
import email from "images/email.png";
import link from "images/link.png";

export const Option: React.FC<OptionModel> = ({ img, nav, text, social }) => {
  const navigate = useNavigate();
  const post_social = (social_type: social) => {
    console.log(`hey y'all`);
  }
  const src: ProfileImg = {
    "account": account,
    "heart": heart,
    "message": message,
    "profile": profile,
    "wrench": wrench,
    "facebook": facebook,
    "instagram": instagram,
    "email": email,
    "link": link
  }

  return (
      <div className={styles.option_container}>
        <img className={styles.img} src={src[img]} alt="" />
        <div>{text}</div>
        {
          social ? (
            <ShareOnSocial
              textToShare="Testing"
              link="https://ikea.com/wardrobes/kalle"
              linkTitle="Title"
              linkMetaDesc="Description"
              shareTo={[social]}
            >
            <span 
              className={["material-icons", styles.chevron].join(" ")}
            >chevron_right</span>
          </ShareOnSocial>
          ) : (
            <span 
              className={["material-icons", styles.chevron].join(" ")}
              onClick={() => { navigate(`${nav}`)} }
            >chevron_right</span>
          )
        }
      </div>
  )
}