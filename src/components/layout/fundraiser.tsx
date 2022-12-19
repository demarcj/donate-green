import React from "react";
import { NavBar, NavBack, Header, Divider, Search } from "components/ui";

export const Fundraiser: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Header header="Create Fundraiser" />
      <Search />
      <Divider />
      <NavBar />
    </>
  )
}