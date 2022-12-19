import React from "react";
import { NavBar, Option, Divider, Header, NavBack } from "components/ui";
import { useNavigate } from "react-router-dom";
import { CredentialModel } from "interface";
import styles from "styles/profile.module.css";
import button from "styles/button.module.css";

export const Share: React.FC = () => {
  const navigate = useNavigate();
  const credential: CredentialModel = JSON.parse(localStorage.getItem(`credential`) as string);

  const signout = () => {
    credential.is_signin = false;
    localStorage.setItem(`credential`, JSON.stringify(credential));
    navigate(`/`);
  };

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