import React from "react";
import { NavBar, Header, Divider, NavBack } from "components/ui";
import { useNavigate } from "react-router-dom";
import button from 'styles/button.module.css';

export const CreateFundraiser: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBack nav="/profile/fundraiser" />
      <Header header="Create Fundraiser" />
      <Divider />
      <button 
        className={button.outline}
      >Continue</button>
      <NavBar />
    </>
  )
}