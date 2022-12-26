import React from "react";
import { NavBar, NavBack, Header, Divider, MessageArea } from "components/ui";

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
      <NavBack nav="/profile" />
      <Header header="Messages" />
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

