import React from "react";
import { NavBar, NavBack, Header, Divider } from "components/ui";

export const Messages: React.FC = () => {
  return (
    <>
      <NavBack nav="/profile" />
      <Header header="Messages" />
      <Divider />
      <NavBar />
    </>
  )
}

