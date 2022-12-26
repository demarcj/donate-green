import React from "react";
import { NavBar, Header, Divider, NavBack } from "components/ui";

export const Payment: React.FC = () => {
  return (
    <>
      <NavBack nav="/home/organization/:name" />
      <Header header="Liked Organization" />
      <Divider />
      <NavBar />
    </>
  )
}