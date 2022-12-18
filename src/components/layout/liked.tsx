import React from "react";
import { NavBar, Header, Divider, NavBack } from "components/ui";

export const Liked: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Header header="Liked Organization" />
      <Divider />
      <NavBar />
    </>
  )
}