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
        page="Facebook"
        nav={`/profile/fundraiser`}
      />
      <Option 
        img="instagram"
        page="Instagram"
        nav={`/profile/liked`}
      />
      <Option 
        img="message"
        page="Message"
        nav={`/profile/messages`}
      />
      <Option 
        img="email"
        page="Email"
        nav={`/profile/profile-image`}
      />
      <Option 
        img="link"
        page="Copy Link"
        nav={`/profile/account`}
      />
      <NavBar />
    </>
  )
}