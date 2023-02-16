import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavBar, SearchInput, NavBack, ImgLiked, GreenContainer, ProgressBar, Divider, More } from "components/ui";
import { OrganizationData } from "temp";
import styles from "styles/organization.module.css";
import button from "styles/button.module.css";

export const Organization: React.FC = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const get_id = new URLSearchParams(search).get(`id`);
  const id = get_id ? get_id : ``;
  const url = window.location.pathname + `/payment?id=${id}`;
  const go_to = () => navigate(url);
  const org = OrganizationData.find(org => org.id === id);

  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <NavBack nav="/home" />
        <div className={styles.search_container}>
          {/* <SearchInput /> */}
        </div>
      </div>
      <GreenContainer>
        <>
          <ImgLiked
            id={id}
            liked_organization={true}
          />
          {
            org && (
              <>
                <ProgressBar 
                  donation_amount={org.donation_amount}
                  donation_goal={org.donation_goal}
                  location={org.location}
                />
                <button 
                  className={button.default}
                  onClick={go_to}
                >Donate</button>
                <div>{org.description}</div>
                <More></More>
                <Divider></Divider>
                <div className={styles.info_container}>
                  <div>Updates</div>
                  <div>({org.updates.length})</div>
                </div>
                <Divider></Divider>
                <div className={styles.info_container}>
                  <div>Comments</div>
                  <div>({org.comments.length})</div>
                </div>
              </>
            )
          }
        </>
      </GreenContainer>
      <NavBar />
    </div>
  )
}