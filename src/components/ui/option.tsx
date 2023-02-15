import React from "react";
import { useNavigate } from "react-router-dom";
import { OptionModel, ProfileImg } from "interface";
import ShareOnSocial from 'react-share-on-social';
import { url_converter } from "functions"
import styles from "styles/option.module.css";
import account from "images/account.png";
import heart from "images/heart.png";
import whatsapp from "images/message.png";
import profile from "images/profile.png";
import wrench from "images/wrench.png";
import facebook from "images/facebook.png";
import instagram from "images/instagram.png";
import email from "images/email.png";
import link from "images/link.png";

export const Option: React.FC<OptionModel> = ({ img, nav, text, social, org }) => {
  const navigate = useNavigate();
  const origin = `${window.location.origin}/orginization/`;
  const search = window.location.search;
  const url = org ? `${origin + url_converter(org.title) + search}` : ``;
  const text_to_share = `Learn about how to donate to ${org?.title}` 
  const src: ProfileImg = {
    account,
    heart,
    whatsapp,
    profile,
    wrench,
    facebook,
    instagram,
    email,
    link
  };

  return (
      <div className={styles.option_container}>
        <img className={styles.img} src={src[img]} alt="" />
        <div className={styles.text}>{text}</div>
        {
          social && org ? (
            <ShareOnSocial
              textToShare={text_to_share}
              link={url}
              linkTitle={org.title}
              linkMetaDesc={org.description}
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