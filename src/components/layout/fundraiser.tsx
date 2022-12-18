import React from "react";
import { NavBar, NavBack, Header, Divider } from "components/ui";

export const Fundraiser: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Header header="Create Fundraiser" />
      <Divider />
      <NavBar />
    </>
  )
}