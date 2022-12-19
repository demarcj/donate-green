import React from 'react';
import { More } from "components/ui"
import { MessageModel } from "interface";
import styles from "styles/message.module.css";
import placeholder from 'images/placeholder.jpg';

export const MessageArea: React.FC<MessageModel> = ({ img, message, name }) => {
  const src = img ? img : placeholder;

  return (
    <div className={styles.message_container}>
      <img className={styles.img} src={src} alt="" />
      <div className={styles.message}>
        <div>{name}</div>
        <div>{message}</div>
        <More />
      </div>
    </div>
  )
}