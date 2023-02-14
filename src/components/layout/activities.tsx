import React from "react";
import { NavBar, Header, ActivitiesUI } from "components/ui";
import { OrganizationData } from "temp"

export const Activities: React.FC = () => {
  return (
    <>
      <Header header="Activities" />
      {
        OrganizationData.map(org => (
          <ActivitiesUI 
            key={org.id}
            org={org}
          />
        ))
      }
      <NavBar />
    </>
  )
}