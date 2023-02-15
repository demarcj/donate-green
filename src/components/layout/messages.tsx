import React from "react";
import { NavBar, NavBack, Header, Divider, MessageArea } from "components/ui";
import styles from "styles/message.module.css";

export const Messages: React.FC = () => {
  const messages = [
    {
      img: ``,
      name: `Chloe`,
      message: `Something Something`,
      id: crypto.randomUUID()
    }
  ];
  return (
    <>
      <div className={styles.header_container}>
        <NavBack nav="/profile" />
        <Header header="Messages" />
      </div>
      <Divider />
      {messages.map(message => (
          <MessageArea
            key={message.id}
            img={message.img}
            name={message.name}
            message={message.message}
          />
        ))
      }
      <NavBar />
    </>
  )
}

