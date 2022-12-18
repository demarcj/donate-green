import React from "react";
import { NavBar, NavBack, Header, Divider } from "components/ui";

export const ProfileImage: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Header header="Profile Image" />
      <Divider />
      <NavBar />
    </>
  )
}