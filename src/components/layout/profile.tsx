import React from "react";
import { NavBar, ProfileOption, Divider } from "components/ui";
import { useNavigate } from "react-router-dom";
import { CredentialModel } from "interface";
import styles from "styles/profile.module.css";
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
      <h1 className={styles.profile}>Profile</h1>
      <div className={styles.profile_name}>Royce Greenfield</div>
      <Divider />
      <ProfileOption 
        img="account"
        page_type="Create Fundraiser"
        nav={`/profile/fundraiser`}
      />
      <ProfileOption 
        img="heart"
        page_type="Liked Organiztions"
        nav={`/profile/liked`}
      />
      <ProfileOption 
        img="message"
        page_type="Messages"
        nav={`/profile/messages`}
      />
      <ProfileOption 
        img="profile"
        page_type="Profile Image"
        nav={`/profile/profile-image`}
      />
      <ProfileOption 
        img="wrench"
        page_type="Account"
        nav={`/profile/account`}
      />
      <div className={button.container}>
        <button 
          className={button.signout}
          onClick={() => signout()}
        >Sign out</button>
      </div>
      <NavBar />
    </>
  )
}