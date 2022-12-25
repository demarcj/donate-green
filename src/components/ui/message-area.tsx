import React from 'react';
import { More, UserImage } from "components/ui"
import { MessageModel } from "interface";
import styles from "styles/message.module.css";
import placeholder from 'images/placeholder.jpg';

export const MessageArea: React.FC<MessageModel> = ({ img, message, name }) => {

  return (
    <div className={styles.message_container}>
      <UserImage 
        src={img}
        name={name}
      />
      <div className={styles.message}>
        <div>{name}</div>
        <div>{message}</div>
        <More />
      </div>
    </div>
  )
}