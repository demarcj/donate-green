import React from "react";
import { NavBar, Search, NavBack } from "components/ui";

export const Organization: React.FC = () => {
  return (
    <>
      <NavBack nav="/home" />
      <Search />
      <NavBar />
    </>
  )
}