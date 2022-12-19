import React from "react";
import { NavBar, Header, ActivitiesUI } from "components/ui";

export const Activities: React.FC = () => {
  return (
    <>
      <Header header="Activities" />
      <ActivitiesUI />
      <NavBar />
    </>
  )
}