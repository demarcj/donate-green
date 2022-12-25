import React from "react";
import { UserImageModel } from "interface";
import styles from 'styles/user-image.module.css';

export const UserImage: React.FC<UserImageModel> = ({src, name}) => {
  const placeholder = () => {
    const first_char_name = name ? name[0].toLocaleUpperCase() : ``;
    return <div className={styles.placeholder}>{first_char_name}</div>
  };
  const img = <img className={styles.img} src={src} alt=""/>;
  
  return src ? img : placeholder();
};