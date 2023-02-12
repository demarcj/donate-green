import React from "react";
import { NavBar, Option, Divider, ProfileImgUI, Header } from "components/ui";
import { useNavigate } from "react-router-dom";
import { CredentialModel } from "interface";
import button from "styles/button.module.css";

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const credential: CredentialModel = JSON.parse(localStorage.getItem(`credential`) as string);

  const signout = () => {
    credential.is_signin = false;
    localStorage.setItem(`credential`, JSON.stringify(credential));
    navigate(`/`);
  };

  return (
    <>
      <Header header="Profile" />
      <ProfileImgUI />
      <Divider />
      <Option 
        img="account"
        text="Create Fundraiser"
        nav={`/profile/fundraiser`}
      />
      <Option 
        img="heart"
        text="Liked Organiztions"
        nav={`/profile/liked`}
      />
      <Option 
        img="message"
        text="Messages"
        nav={`/profile/messages`}
      />
      <Option 
        img="profile"
        text="Profile Image"
        nav={`/profile/profile-image`}
      />
      <Option 
        img="wrench"
        text="Account"
        nav={`/profile/account`}
      />
      <div className={button.container}>
        <button 
          className={button.signout}
          onClick={signout}
        >Sign out</button>
      </div>
      <NavBar />
    </>
  )
}