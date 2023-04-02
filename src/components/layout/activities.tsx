import React from "react";
import { NavBar, Header, ActivitiesUI } from "components/ui";
import { OrganizationData } from "temp";
import styles from "styles/activities.module.css";

export const Activities: React.FC = () => {
  return (
    <div className={styles.activities_main_container}>
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
    </div>
  )
}