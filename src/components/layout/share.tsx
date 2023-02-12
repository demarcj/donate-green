import React from "react";
import { NavBar, Option, Divider, Header, NavBack } from "components/ui";

export const Share: React.FC = () => {

  return (
    <>
      <Header header="Share" />
      <NavBack nav="activities" />
      <Divider />
      <Option 
        img="facebook"
        text="Facebook"
        social="facebook"
      />
      <Option 
        img="message"
        text="Message"
        social="whatsapp"
      />
      <Option 
        img="email"
        text="Email"
        social="email"
      />
      <NavBar />
    </>
  )
}