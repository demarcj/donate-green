import React from "react";
import { NavBar, NavBack, Header, Divider, ProfileImgUI, Save } from "components/ui";

export const ProfileImage: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Save />
      <Header header="Profile Image" />
      <ProfileImgUI />
      <Divider />
      <NavBar />
    </>
  )
}