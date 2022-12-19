import React from "react";
import { NavBar, NavBack, Header, Divider, MessageArea } from "components/ui";

export const Messages: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Header header="Messages" />
      <Divider />
      <MessageArea 
        img=""
        name="Chloe"
        message="Something Something"
      />
      <NavBar />
    </>
  )
}

